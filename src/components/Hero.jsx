import GradientText from './GradientText'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-400 bg-indigo-900/30 rounded-full mb-4">
          Full-Stack Developer
        </span>

        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          Building digital experiences that matter
        </GradientText>

        <p className="text-lg text-neutral-400 max-w-xl mx-auto mb-8 leading-relaxed">
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
        </div>
      </div>
    </section>
  )
}
