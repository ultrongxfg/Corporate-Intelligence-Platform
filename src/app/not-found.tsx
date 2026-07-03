import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-app flex flex-col items-center justify-center py-32 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">
        404
      </p>
      <h1 className="mb-4 text-3xl font-bold text-slate-900">Page not found</h1>
      <p className="mb-8 max-w-md text-slate-600">
        The company or page you&apos;re looking for doesn&apos;t exist in our
        database.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
