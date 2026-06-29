import skills from '../data/skills'

const CATEGORIES = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
]

const SECTION_CLASSES = 'py-24 px-4 bg-neutral-100/50 dark:bg-neutral-800/30'
const CONTAINER_CLASSES = 'max-w-6xl mx-auto'
const TITLE_CLASSES = 'text-3xl font-bold text-neutral-900 dark:text-white mb-2'
const SUBTITLE_CLASSES = 'text-neutral-500 dark:text-neutral-400 mb-12 max-w-lg'
const GRID_CLASSES = 'grid grid-cols-1 md:grid-cols-3 gap-6'
const CARD_CLASSES = 'p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800'
const CARD_TITLE_CLASSES = 'text-lg font-semibold text-neutral-900 dark:text-white mb-4'
const BADGE_WRAPPER_CLASSES = 'flex flex-wrap gap-2'
const BADGE_CLASSES = 'px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-700/50 rounded-lg transition-colors hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400'

export default function Experience() {
  return (
    <section id="experience" className={SECTION_CLASSES}>
      <div className={CONTAINER_CLASSES}>
        <h2 className={TITLE_CLASSES}>Skills & Experience</h2>
        <p className={SUBTITLE_CLASSES}>
          Technologies and tools I work with on a daily basis to build production-ready applications.
        </p>

        <div className={GRID_CLASSES}>
          {CATEGORIES.map(({ key, label }) => {
            const items = skills[key]
            return (
              <div key={key} className={CARD_CLASSES}>
                <h3 className={CARD_TITLE_CLASSES}>{label}</h3>
                <div className={BADGE_WRAPPER_CLASSES}>
                  {items.map(skill => (
                    <span key={skill} className={BADGE_CLASSES}>{skill}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
