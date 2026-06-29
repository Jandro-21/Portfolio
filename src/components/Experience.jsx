import GradientText from './GradientText'
import BorderGlow from './BorderGlow'
import skills from '../data/skills'
import { SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiAngular, SiNodedotjs, SiOpenjdk, SiPython, SiPhp, SiMysql, SiLinux } from 'react-icons/si'

const CATEGORIES = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
]

const SECTION_CLASSES = 'py-24 px-4 bg-neutral-800/30'
const CONTAINER_CLASSES = 'max-w-6xl mx-auto'
const SUBTITLE_CLASSES = 'text-neutral-400 mb-8 max-w-lg'

const techLogos = [
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiAngular,
  SiNodedotjs, SiOpenjdk, SiPython, SiPhp, SiMysql, SiLinux
]

export default function Experience() {
  return (
    <section id="experience" className={SECTION_CLASSES}>
      <div className={CONTAINER_CLASSES}>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder
          className="text-3xl font-bold mb-2"
        >
          Skills & Experience
        </GradientText>
        <p className={SUBTITLE_CLASSES}>
          Technologies and tools I work with on a daily basis to build production-ready applications.
        </p>

        <div className="mb-12 w-full overflow-hidden">
          <div className="flex marquee">
            {[...Array(3)].map((_, copyIdx) => (
              <div key={copyIdx} className="flex items-center gap-12 mx-6">
                {techLogos.map((Icon, i) => (
                  <div key={`${copyIdx}-${i}`} className="flex items-center gap-12">
                    <Icon className="text-4xl text-neutral-400 hover:text-indigo-400 transition-colors flex-shrink-0" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map(({ key, label }) => {
            const items = skills[key]
            return (
              <BorderGlow
                key={key}
                edgeSensitivity={30}
                glowColor="40 80 80"
                borderRadius={12}
                glowRadius={40}
                glowIntensity={1.0}
                coneSpread={25}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
                fillOpacity={0.0}
                className="p-6 rounded-xl border border-neutral-800"
              >
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  className="text-lg font-semibold mb-4"
                >
                  {label}
                </GradientText>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="px-3 py-1.5 text-sm text-neutral-300 bg-neutral-700/50 rounded-lg transition-colors hover:bg-indigo-900/30 hover:text-indigo-400">{skill}</span>
                  ))}
                </div>
              </BorderGlow>
            )
          })}
        </div>
      </div>
    </section>
  )
}
