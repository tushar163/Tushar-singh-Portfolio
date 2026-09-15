import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-24 text-center">
      <h1 className="text-4xl font-semibold text-[var(--foreground)]">
        Project Not Found
      </h1>
      <p className="mt-4 text-lg text-[var(--muted)]">
        The project you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/#projects" className="btn-primary mt-8 inline-flex">
        View All Projects
      </Link>
    </main>
  );
}
