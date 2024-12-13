import { useLanguage } from './context/LanguageContext'
import AnimatedText from './components/AnimatedText'
import SectionNavigation from './components/SectionNavigation'
import About from './components/sections/About'

function App() {
  const { language } = useLanguage()

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#1a1a1a] transition-colors duration-300">
      <div className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae] z-40"></div>
      <div className="pt-[4px] relative">
        <div className="flex">
          <main className="flex-1 transition-all duration-300">
            <section id="home" className="min-h-screen flex items-center justify-center px-8 sm:justify-start sm:px-16 md:px-24 lg:px-32 transition-all duration-300">
              <div className="text-left max-w-3xl transition-all duration-300">
                <AnimatedText className="text-gray-800 dark:text-white font-bold text-3xl sm:text-4xl lg+:text-5xl mb-4 transition-all duration-300">
                  {language === 'da' ? 'Velkommen! Jeg hedder' : 'Hey there! My name is'}
                </AnimatedText>
                <h1 className="leading-tight font-bold mb-6">
                  <div className="bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae] text-transparent bg-clip-text">
                    <span className="text-7xl sm:text-8xl lg+:text-[10rem] block transition-all duration-300">Mads</span>
                    <span className="text-7xl sm:text-8xl lg+:text-[10rem] block transition-all duration-300">Villadsen.</span>
                  </div>
                </h1>
                <div className="text-gray-800 dark:text-white font-bold text-2xl sm:text-3xl lg+:text-4xl space-y-2">
                  <AnimatedText className="block transition-all duration-300">
                    {language === 'da' ? 'Softwareingenørstuderende' : 'Software Engineering Student'}
                  </AnimatedText>
                  <AnimatedText className="block transition-all duration-300">
                    {language === 'da' ? 'hos AU University' : 'at AU University'}
                  </AnimatedText>
                </div>
              </div>
            </section>

            <About />

            <section id="experience" className="min-h-screen flex items-center justify-center px-8 sm:justify-start sm:px-16 md:px-24 lg:px-32 transition-all duration-300">
              <div className="text-left max-w-3xl transition-all duration-300">
                {/* Experience content */}
              </div>
            </section>

            <section id="projects" className="min-h-screen flex items-center justify-center px-8 sm:justify-start sm:px-16 md:px-24 lg:px-32 transition-all duration-300">
              <div className="text-left max-w-3xl transition-all duration-300">
                {/* Projects content */}
              </div>
            </section>
          </main>

          <SectionNavigation />
        </div>
      </div>
    </div>
  )
}

export default App
