export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full mb-4">
          Full-Stack Developer
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white leading-tight mb-6">
          Building digital experiences that{' '}
          <span className="text-indigo-600 dark:text-indigo-400">matter</span>
        </h1>

        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-8 leading-relaxed">
          I craft performant, accessible, and user-centric applications
          with modern technologies. Passionate about clean code and great design.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 border border-neutral-300 dark:border-neutral-700 hover:border-indigo-600 dark:hover:border-indigo-400 text-neutral-700 dark:text-neutral-300 font-medium rounded-lg transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
