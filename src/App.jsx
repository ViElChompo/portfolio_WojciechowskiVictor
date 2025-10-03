import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "./assets/logo.svg";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">
            <img src={logo} class="max-h-12"></img>
          </Link>
           <span className="font-semibold tracking-tight">
              Victor Wojciechowski
            </span>
          <nav className="flex gap-3 text-sm">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-1 rounded-full border ${
                  isActive
                    ? "bg-black text-white border-black"
                    : "border-gray-200"
                }`
              }
            >
              About
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Victor Wojciechowski
        </div>
      </footer>
    </div>
  );
}
