import { useEffect, useState } from 'react';
import { useLanguage } from './context/LanguageContext'
import LoadingScreen from './components/LoadingScreen';
import SectionNavigation from './components/SectionNavigation'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import { TailwindIndicator } from './components/TailwindIndicator'

interface Project {
  title: string;
  imageUrl: string;
  description: { en: string; da: string };
}

function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
                <Projects openModal={openModal} />
              </main>
              <SectionNavigation />
              <TailwindIndicator />
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={closeModal}>
              <div className="bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae] rounded-lg p-[2px] mx-4 sm:mx-0">
                <div className="dark:bg-[#1a1a1a] bg-white rounded-lg p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
                  <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-700">{selectedProject?.title}</h2>
                  <img src={selectedProject?.imageUrl} alt={selectedProject?.title} className="w-full h-48 object-cover mb-4 rounded-lg shadow-md" />
                  <p className="dark:text-white text-gray-700">{selectedProject?.description[language]}</p>
                  <button className={'mt-4 px-4 py-2 rounded dark:bg-gray-300 dark:text-gray-700 bg-gray-300 dark:hover:bg-gray-400 dark:hover:text-gray-800 text-gray-700 hover:bg-gray-400 hover:text-gray-800 transition-colors duration-300'} onClick={closeModal}>
                    Luk
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default App;
