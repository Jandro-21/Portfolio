import GooeyNav from './GooeyNav'

const CONTACT_ITEMS = [
  { label: 'GitHub', href: 'https://github.com/Jandro-21' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/alejandrodurillo-web-dev/' },
  { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=alejandrodurillovargas21@gmail.com' },
]

const SECTION_CLASSES = 'py-24 px-4'
const CONTAINER_CLASSES = 'max-w-3xl mx-auto text-center'
const TITLE_CLASSES = 'text-3xl font-bold text-white mb-2'
const SUBTITLE_CLASSES = 'text-neutral-400 mb-12 max-w-lg mx-auto'

export default function Contact() {
  return (
    <section id="contact" className={SECTION_CLASSES}>
      <div className={CONTAINER_CLASSES}>
        <h2 className={TITLE_CLASSES}>Get in Touch</h2>
        <p className={SUBTITLE_CLASSES}>
          Whether you have a project in mind or just want to say hello, feel free to reach out.
        </p>

        <div style={{ height: '80px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <GooeyNav
            items={CONTACT_ITEMS}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </div>
    </section>
  )
}
