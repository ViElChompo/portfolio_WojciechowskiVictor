import React from "react";

// "Label : Valeur" (ex: "Login : foo@bar.com")
const kvRegex = /(^[\p{L}\w .#@+\-\/&'’]+?)\s*:\s*(.*)$/u;
const looksLikeEmail = (s) => /@/.test(s);
const isCallout = (s) => /(\(.*\))|repo privé|important|note:/i.test(s);

// Titres de section connus (évite de confondre avec des KV)
const SECTION_TITLES = new Set([
  "Contexte",
  "Tech Stack",
  "Technique",
  "Développement",
  "Design & UX",
  "Gestion de projet",
  "Livrables",
  "Accès à la plateforme avec",
]);

function isSectionHeader(line) {
  const m = line.match(kvRegex);
  if (!m) return false;
  const label = m[1]?.trim() || "";
  // 1) Terminé par ":" → header
  if (line.trim().endsWith(":")) return true;
  // 2) Label dans la whitelist → header
  if (SECTION_TITLES.has(label)) return true;
  return false; // sinon ce sera traité comme KV/texte
}

function NoteLine({ text }) {
  // ligne vide -> saut de ligne manuel
  if (text.trim() === "") return <br />;

  // Support des retours à la ligne écrits comme "\n" dans le JSON
  const parts = text.split(/\\n/g);

  // 1) Clé/valeur (en excluant les headers de section)
  const kv = text.match(kvRegex);
  if (kv && !isSectionHeader(text)) {
    const [, label, value] = kv;
    return (
      <div className="grid grid-cols-[120px_1fr] items-start gap-x-3 text-gray-700">
        <dt className="font-medium text-gray-900">{label.trim()}</dt>
        <dd
          className={
            looksLikeEmail(value)
              ? "font-mono text-sm whitespace-pre-line"
              : "text-gray-700 whitespace-pre-line"
          }
        >
          {value.trim()}
        </dd>
      </div>
    );
  }

  // 2) Callout léger
  if (isCallout(text)) {
    return (
      <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 whitespace-pre-line">
        {parts.join("\n")}
      </div>
    );
  }

  // 3) Paragraphe par défaut
  return <p className="text-gray-700 whitespace-pre-line">{parts.join("\n")}</p>;
}

export default function ProjectNotes({ notes }) {
  if (!notes) return null;
  const arr = Array.isArray(notes) ? notes : [notes];
  if (arr.length === 0) return null;

  // 1) Titre global = première ligne (affiché comme h3)
  const [title, ...rest] = arr;

  // 2) Parser en sections (header + items). Si "Header : du texte",
  //    "du texte" devient le premier item de la section.
  const sections = [];
  let current = null;

  rest.forEach((line) => {
    if (isSectionHeader(line)) {
      if (current) sections.push(current);
      const m = line.match(kvRegex);
      const label = (m?.[1] || "").trim();
      const inline = (m?.[2] || "").trim();
      current = { header: label, items: [] };
      if (inline) current.items.push(inline);
    } else {
      if (!current) current = { header: null, items: [] };
      current.items.push(line);
    }
  });
  if (current) sections.push(current);

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
      {/* Titre global (on retire les parenthèses éventuelles) */}
      <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
        {String(title).replace(/[()]/g, "")}
      </h3>

      {/* Sections */}
      <div className="space-y-4">
        {sections.map((sec, idx) => (
          <div key={idx} className="space-y-2">
            {sec.header ? (
              <div className="text-sm font-medium text-gray-900">{sec.header}</div>
            ) : null}

            {/* Carte de section */}
            <div className="rounded-lg border border-gray-200 bg-white px-4 py-3 space-y-2">
              {sec.items.map((item, i) => (
                <NoteLine key={i} text={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
