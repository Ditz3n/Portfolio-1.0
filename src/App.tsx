import { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import SectionNavigation from './components/SectionNavigation'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import { TailwindIndicator } from './components/TailwindIndicator'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#1a1a1a] transition-colors duration-300 overflow-x-hidden fixed-container">
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className={`opacity-100 transition-opacity duration-300`}>
          <div className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae] z-40"></div>
          <div className="pt-[4px] relative overflow-y-auto h-screen">
            <div className="flex">
              <main className="flex-1 transition-all duration-300">
                <Home />
                <About />
                <Experience />
                <section id="projects" className="min-h-screen flex items-center justify-center px-8 sm:justify-start sm:px-16 md:px-24 lg:px-32 transition-all duration-300">
                  <div className="text-left max-w-3xl transition-all duration-300">
                    {/* Projects content */}
                  </div>
                </section>
              </main>
              <SectionNavigation />
              <TailwindIndicator />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App;
