import { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import SectionNavigation from './components/SectionNavigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import { TailwindIndicator } from './components/TailwindIndicator';
import ProjectModal from './components/sections/ProjectModal';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

interface Project {
  title: string;
  description: { en: string; da: string };
  images: string[];
}

function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused && selectedProject) {
      interval = setInterval(() => {
        handleNextImage();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPaused, selectedProject]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  const openModal = (project: Project, initialIndex: number) => {
    setSelectedProject(project);
    setCurrentImageIndex(initialIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
    }
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#1a1a1a] transition-colors duration-300 overflow-x-hidden fixed-container">
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className={`opacity-100 transition-opacity duration-300`}>
          <div className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae] dark:from-[#FF4E50] dark:to-[#F9D423] z-40"></div>
          <div className="pt-[4px] relative h-screen">
            <div className="flex">
              <main className="flex-1 h-[calc(100vh-5rem)] md:h-auto overflow-y-auto">
                <Home />
                <About />
                <Experience />
                <Projects openModal={openModal} />
                <Contact />
                <Footer />
              </main>
              <SectionNavigation />
              <TailwindIndicator />
            </div>
          </div>

          <ProjectModal
            isOpen={isModalOpen}
            onClose={closeModal}
            selectedProject={selectedProject}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            isPaused={isPaused}
            togglePause={togglePause}
          />
        </div>
      )}
    </div>
  );
}

export default App;
