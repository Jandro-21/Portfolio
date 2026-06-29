import projects from '../data/projects'

const SECTION_CLASSES = 'py-24 px-4'
const CONTAINER_CLASSES = 'max-w-6xl mx-auto'
const TITLE_CLASSES = 'text-3xl font-bold text-neutral-900 dark:text-white mb-2'
const SUBTITLE_CLASSES = 'text-neutral-500 dark:text-neutral-400 mb-12 max-w-lg'
const GRID_CLASSES = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
const CARD_CLASSES = 'group p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800/50 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300'
const CARD_ID_CLASSES = 'text-xs text-indigo-600 dark:text-indigo-400 font-mono'
const CARD_TITLE_CLASSES = 'text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'
const CARD_DESC_CLASSES = 'text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4'
const TECH_WRAPPER_CLASSES = 'flex flex-wrap gap-1.5 mb-4'
const TECH_BADGE_CLASSES = 'px-2 py-0.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded'
const LINK_WRAPPER_CLASSES = 'flex gap-3 pt-2 border-t border-neutral-100 dark:border-neutral-800'
const LINK_CLASSES = 'text-xs text-neutral-500 dark:text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1'

function GithubIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function DemoIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={SECTION_CLASSES}>
      <div className={CONTAINER_CLASSES}>
        <h2 className={TITLE_CLASSES}>Projects</h2>
        <p className={SUBTITLE_CLASSES}>
          A selection of projects I've built, each with its own story and technical challenges.
        </p>

        <div className={GRID_CLASSES}>
          {projects.map(project => (
            <article key={project.id} className={CARD_CLASSES}>
              <div className="flex items-center gap-2 mb-3">
                <span className={CARD_ID_CLASSES}>
                  {String(project.id).padStart(2, '0')}
                </span>
              </div>

              <h3 className={CARD_TITLE_CLASSES}>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {project.title}
                </a>
              </h3>

              <p className={CARD_DESC_CLASSES}>{project.description}</p>

              <div className={TECH_WRAPPER_CLASSES}>
                {project.techStack.map(tech => (
                  <span key={tech} className={TECH_BADGE_CLASSES}>{tech}</span>
                ))}
              </div>

              <div className={LINK_WRAPPER_CLASSES}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={LINK_CLASSES}>
                  <GithubIcon />
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className={LINK_CLASSES}>
                  <DemoIcon />
                  Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
