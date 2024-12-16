import React, { useEffect, useState, useCallback, useMemo } from 'react';
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

const getGradientColor = (index: number, total: number, isDarkMode: boolean): string => {
  const startColor = isDarkMode ? { r: 255, g: 78, b: 80 } : { r: 119, g: 161, b: 211 };
  const endColor = isDarkMode ? { r: 249, g: 212, b: 35 } : { r: 230, g: 132, b: 174 };
  const ratio = index / (total - 1);
  return `rgb(${Math.round(startColor.r + (endColor.r - startColor.r) * ratio)}, ${Math.round(startColor.g + (endColor.g - startColor.g) * ratio)}, ${Math.round(startColor.b + (endColor.b - startColor.b) * ratio)})`;
};

const ProjectImage = React.memo(({ src, alt, onClick, isPaused }: { 
  src: string; 
  alt: string; 
  onClick: () => void; 
  isPaused: boolean; 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={onClick}
        onLoad={() => setIsLoading(false)}
        loading="eager"
        style={{ aspectRatio: '4/3' }}
      />
      <div className="absolute top-2 right-2 z-10">
        {isPaused ? (
          <PlayIcon className="w-6 h-6 text-white" />
        ) : (
          <PauseIcon className="w-6 h-6 text-white" />
        )}
      </div>
    </div>
  );
});

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  selectedProject,
  currentImageIndex,
  setCurrentImageIndex,
  isPaused,
  togglePause,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains('dark')
  );
  const { language } = useLanguage();

  const handleDotClick = useCallback((index: number) => {
    setCurrentImageIndex(index);
    if (!isPaused) {
      togglePause();
    }
  }, [isPaused, setCurrentImageIndex, togglePause]);

  useEffect(() => {
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  useEffect(() => {
    if (isOpen && selectedProject) {
      selectedProject.images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [isOpen, selectedProject]);

  const modalContent = useMemo(() => {
    if (!selectedProject) return null;

    return (
      <div
        className="dark:bg-[#1a1a1a] bg-white rounded-lg p-6 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-700 text-center">
          {selectedProject.title}
        </h2>
        <div className="flex items-center justify-center mb-4">
          <div className="animated-gradient-border">
            <ProjectImage
              src={selectedProject.images[currentImageIndex]}
              alt={selectedProject.title}
              onClick={togglePause}
              isPaused={isPaused}
            />
          </div>
        </div>
        <div className="flex justify-center mb-4">
          {selectedProject.images.map((_, index) => {
            const gradientColor = getGradientColor(index, selectedProject.images.length, isDarkMode);
            return (
              <div
                key={index}
                className="w-3 h-3 rounded-full mx-1 cursor-pointer"
                style={{
                  backgroundColor: index === currentImageIndex ? gradientColor : 'rgb(200, 200, 200)',
                }}
                onClick={() => handleDotClick(index)}
              />
            );
          })}
        </div>
        <p className="dark:text-white text-gray-700 text-center">
          {language === 'da' ? selectedProject.description.da : selectedProject.description.en}
        </p>
        <button
          className="mt-4 px-4 py-2 rounded dark:bg-gray-300 dark:text-gray-700 bg-gray-300 text-gray-700 mx-auto block hover:scale-105 transition-transform duration-300"
          onClick={onClose}
        >
          {language === 'da' ? 'Luk' : 'Close'}
        </button>
      </div>
    );
  }, [selectedProject, currentImageIndex, isDarkMode, language, isPaused, handleDotClick, onClose, togglePause]);

  if (!isOpen || !selectedProject) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div className="bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae] dark:from-[#FF4E50] dark:to-[#F9D423] rounded-lg p-[2px] mx-4 sm:mx-0 my-8">
        {modalContent}
      </div>
    </div>
  );
};

export default ProjectModal;