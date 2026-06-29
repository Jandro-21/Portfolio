export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Alejandro. All rights reserved.
        </p>
        <p className="text-sm text-neutral-600">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
