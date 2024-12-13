import { useLanguage } from './context/LanguageContext'
import AnimatedText from './components/AnimatedText'
import SectionNavigation from './components/SectionNavigation'
import profilePic from './assets/mads.jpg'

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

            <section id="about" className="min-h-screen flex items-center justify-center px-8 sm:justify-start sm:px-16 md:px-24 lg:px-32 transition-all duration-300">
              <div className="text-left max-w-3xl transition-all duration-300">
                <h2 className="text-5xl sm:text-6xl font-bold mb-12 text-gray-800 dark:text-white">
                  {language === 'da' ? 'Om mig' : 'About me'}
                </h2>
                
                <div className="flex flex-col gap-12">
                  <div className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 space-y-6 max-w-[350px] sm:max-w-[450px] lg+:max-w-[700px] transition-all duration-300">
                    {language === 'da' ? (
                      <>
                        <p>
                          Hej! Jeg er Mads. Jeg er i øjeblikket softwareingeniørstuderende på Aarhus Universitet, 
                          hvor jeg specialiserer mig i webudvikling og softwarearkitektur.
                        </p>
                        <p>
                          Min rejse inden for programmering begyndte med en fascination af webudvikling og 
                          brugergrænseflader. Jeg har siden da arbejdet med forskellige teknologier og frameworks, 
                          med særlig fokus på React og moderne frontend-udvikling.
                        </p>
                        <p>
                          Ved siden af mine studier arbejder jeg på forskellige personlige projekter, 
                          hvor jeg eksperimenterer med nye teknologier og forbedrer mine færdigheder. 
                          Denne hjemmeside er et af disse projekter!
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          Hey! I'm Mads. I'm currently a Software Engineering student at Aarhus University, 
                          specializing in web development and software architecture.
                        </p>
                        <p>
                          My journey in programming started with a fascination for web development and user 
                          interfaces. Since then, I've worked with various technologies and frameworks, 
                          with a particular focus on React and modern frontend development.
                        </p>
                        <p>
                          Alongside my studies, I work on various personal projects where I experiment with 
                          new technologies and improve my skills. This website is one of those projects!
                        </p>
                      </>
                    )}
                  </div>

                  <div className="relative max-w-[300px] sm:max-w-[350px] lg+:max-w-[400px] mx-auto aspect-square transition-all duration-300">
                    {/* Gradient border using pseudo-element */}
                    <div className="relative w-full h-full rounded-lg p-[3px] bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae]">
                      <div className="relative w-full h-full rounded-lg overflow-hidden group">
                        <img 
                          src={profilePic} 
                          alt="Mads Villadsen" 
                          className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-[0.3]"
                        />
                        {/* Hover overlay with text */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-xl font-bold">
                            Hello World! <span className="font-emoji">🎉</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

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
