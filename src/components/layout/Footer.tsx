export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-app flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Corporate Intelligence Platform. All
          rights reserved.
        </p>
        <p className="text-xs text-slate-400">
          Mock data for demonstration purposes only.
        </p>
      </div>
    </footer>
  );
}
