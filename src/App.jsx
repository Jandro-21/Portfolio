import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DotField from './components/DotField'
import ClickSpark from './components/ClickSpark'

function App() {
  return (
    <ClickSpark sparkColor="#c084fc" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div className="min-h-screen relative">
        <div className="fixed inset-0 z-0">
          <DotField
            dotRadius={1.5}
            dotSpacing={14}
            bulgeStrength={67}
            glowRadius={160}
            sparkle={false}
            waveAmplitude={0}
            gradientFrom="rgba(168, 85, 247, 0.35)"
            gradientTo="rgba(180, 151, 207, 0.25)"
            glowColor="#120F17"
          />
        </div>
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ClickSpark>
  )
}

export default App
