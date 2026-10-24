import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

const GITHUB = "https://github.com/Elexerly/escape";

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold tracking-widest uppercase">Escape</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Hello world</h1>
      <nav className="mt-8 flex flex-col items-center">
        <Link
          to="/about"
          className="inline-flex min-h-11 items-center text-lg underline underline-offset-4"
        >
          About me
        </Link>
        <a
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center text-lg underline underline-offset-4"
        >
          GitHub
        </a>
      </nav>
    </main>
  );
}
