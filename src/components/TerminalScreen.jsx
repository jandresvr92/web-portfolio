import { Link } from "@tanstack/react-router";

// Shared frame of the 404 and error screens, in the boot terminal's style.
export function TerminalScreen({ title, children, actions }) {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-lg border border-zinc-800 bg-black/40 p-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-neon">{title}</p>
        <div className="mt-4 text-sm text-zinc-400">{children}</div>
        <div className="mt-6 flex justify-center gap-3">{actions}</div>
      </div>
    </main>
  );
}

const ACTION =
  "border px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-neon";

export function ActionButton({ children, ...props }) {
  return (
    <button type="button" className={`${ACTION} border-zinc-700 text-zinc-300 hover:border-zinc-400 hover:text-white`} {...props}>
      {children}
    </button>
  );
}

export function HomeLink({ children }) {
  return (
    <Link to="/" className={`${ACTION} border-neon/50 text-neon hover:border-neon hover:bg-neon/10`}>
      {children}
    </Link>
  );
}
