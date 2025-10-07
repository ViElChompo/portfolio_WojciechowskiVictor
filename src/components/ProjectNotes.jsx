import React from "react";

// "Label : Valeur" (ex: "Login : foo@bar.com")
const kvRegex = /(^[\p{L}\w .#@+\-\/]+?)\s*:\s*(.+)$/u;
const looksLikeEmail = (s) => /@/.test(s);
const isCallout = (s) => /(\(.*\))|repo privé|important|note:/i.test(s);

function NoteLine({ text }) {
  const kv = text.match(kvRegex);

  // 1) Clé/valeur
  if (kv) {
    const [, label, value] = kv;
    return (
      <div className="grid grid-cols-[120px_1fr] items-start gap-x-3 text-gray-700">
        <dt className="font-medium text-gray-900">{label.trim()}</dt>
        <dd className={looksLikeEmail(value) ? "font-mono text-sm" : "text-gray-700"}>
          {value.trim()}
        </dd>
      </div>
    );
  }

  // 2) Callout léger
  if (isCallout(text)) {
    return (
      <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700">
        {text}
      </div>
    );
  }

  // 3) Paragraphe par défaut
  return <p className="text-gray-700">{text}</p>;
}

export default function ProjectNotes({ notes }) {
  if (!notes) return null;
  const arr = Array.isArray(notes) ? notes : [notes];

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
      <dl className="space-y-3">
        {arr.map((n, i) => (
          <NoteLine key={i} text={n} />
        ))}
      </dl>
    </div>
  );
}
