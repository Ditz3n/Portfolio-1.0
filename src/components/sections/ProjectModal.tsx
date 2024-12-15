import React from 'react';
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import { useLanguage } from '../../context/LanguageContext';

interface Project {
  title: string;
  description: { en: string; da: string };
  images: string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProject: Project | null;
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  isPaused: boolean;
  togglePause: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  selectedProject,
  currentImageIndex,
  setCurrentImageIndex,
  isPaused,
  togglePause,
}) => {
  if (!isOpen || !selectedProject) return null;

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const { language } = useLanguage();

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div className="bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae] rounded-lg p-[2px] mx-4 sm:mx-0">
        <div
          className="dark:bg-[#1a1a1a] bg-white rounded-lg p-6 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-700 text-center">
            {selectedProject.title}
          </h2>
          {/* Centered Image Section */}
          <div className="flex items-center justify-center mb-4">
            <div className="animated-gradient-border">
              <div className="relative w-full h-64 rounded-xl overflow-hidden">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover transition-all duration-300"
                  onClick={togglePause}
                />
                {/* Pause/Play Icon */}
                <div className="absolute top-2 right-2 z-10">
                  {isPaused ? (
                    <PlayIcon className="w-6 h-6 text-gray-700" />
                  ) : (
                    <PauseIcon className="w-6 h-6 text-gray-700" />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center mb-4">
            {selectedProject.images.map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full mx-1 cursor-pointer"
                style={{
                  backgroundColor: index === currentImageIndex ? 'rgb(119, 161, 211)' : 'rgb(200, 200, 200)',
                }}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
          <p className="dark:text-white text-gray-700 text-center">
            {language === 'da' ? selectedProject.description.da : selectedProject.description.en}
          </p>
          <button
            className="mt-4 px-4 py-2 rounded dark:bg-gray-300 dark:text-gray-700 bg-gray-300 dark:hover:bg-gray-400 dark:hover:text-gray-800 text-gray-700 hover:bg-gray-400 hover:text-gray-800 transition-colors duration-300 mx-auto block"
            onClick={onClose}
          >
            {language === 'da' ? 'Luk' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 