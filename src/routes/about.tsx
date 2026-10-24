import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Coming soon</h1>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-11 items-center text-lg underline underline-offset-4"
      >
        Home
      </Link>
    </main>
  );
}
