// Purchase4Less images
import purchase4less1 from '../../assets/project/purchase4less/purchase4less1.png'
import purchase4less2 from '../../assets/project/purchase4less/purchase4less2.png'
import purchase4less3 from '../../assets/project/purchase4less/purchase4less3.png'
import purchase4less4 from '../../assets/project/purchase4less/purchase4less4.png'
import purchase4less5 from '../../assets/project/purchase4less/purchase4less5.png'
import purchase4less6 from '../../assets/project/purchase4less/purchase4less6.png'
import purchase4less7 from '../../assets/project/purchase4less/purchase4less7.png'
import purchase4less8 from '../../assets/project/purchase4less/purchase4less8.png'
import purchase4less9 from '../../assets/project/purchase4less/purchase4less9.png'

// Electronic Car images & video
import electroniccar1 from '../../assets/project/electronic_car/electronic_car1.png'
import electroniccar2 from '../../assets/project/electronic_car/electronic_car2.png'
import electroniccar3 from '../../assets/project/electronic_car/electronic_car3.png'
import electroniccar4 from '../../assets/project/electronic_car/electronic_car4.png'
import electroniccar5 from '../../assets/project/electronic_car/electronic_car5.png'
import electroniccar6 from '../../assets/project/electronic_car/electronic_car6.png'
import electroniccar7 from '../../assets/project/electronic_car/electronic_car7.mp4'

// Electronic Roulette images
import russianRoulette1 from '../../assets/project/electronic_russian_roulette/electronic_russian_roulette1.png'
import russianRoulette2 from '../../assets/project/electronic_russian_roulette/electronic_russian_roulette2.png'
import russianRoulette3 from '../../assets/project/electronic_russian_roulette/electronic_russian_roulette3.png'
import russianRoulette4 from '../../assets/project/electronic_russian_roulette/electronic_russian_roulette4.png'
import russianRoulette5 from '../../assets/project/electronic_russian_roulette/electronic_russian_roulette5.png'
import russianRoulette6 from '../../assets/project/electronic_russian_roulette/electronic_russian_roulette6.png'

// Portfolio 1.0 images
import portfolio1 from '../../assets/project/portfolio/portfolio1.png'
import portfolio2 from '../../assets/project/portfolio/portfolio2.png'
import portfolio3 from '../../assets/project/portfolio/portfolio3.png'
import portfolio4 from '../../assets/project/portfolio/portfolio4.png'
import portfolio5 from '../../assets/project/portfolio/portfolio5.png'

// useLanguage.ts to manage English or Danish language
import { useLanguage } from '../../context/LanguageContext'

// Project interface
interface Project {
  title: { en: string, da: string };
  description: { en: string; da: string };
  images: string[];
  video?: string;
  languages: string[];
}

// ProjectsProps interface
interface ProjectsProps {
  openModal: (project: Project, initialIndex: number) => void;
}

// Projects component (The different projects I have worked on)
const projectsData: Project[] = [
  {
    title: {
      da: 'Purchase4Less',
      en: 'Purchase4Less',
    },
    description: {
      en: 'Purchase4Less is an e-commerce platform that allows users to find the best deals.',
      da: 'Purchase4Less er en e-handelsplatform, der giver brugerne mulighed for at finde de bedste tilbud.',
    },
    images: [purchase4less1, purchase4less2, purchase4less3, purchase4less4, purchase4less5, purchase4less6, purchase4less7, purchase4less8, purchase4less9],
    languages: ['react', 'typescript', 'css', 'sql', 'clerk'],
  },
  {
    title: {
      da: 'Elektronisk Roulette',
      en: 'Electronic Roulette',
    },
    description: {
      en: 'Electronic Roulette is an online game with a physical board, where players bet on a number or color.',
      da: 'Elektronisk Roulette er et online spil med en fysisk spilleplade, hvor spillere better på et tal eller farve.',
    },
    images: [russianRoulette1, russianRoulette2, russianRoulette3, russianRoulette4, russianRoulette5, russianRoulette6],
    languages: ['c', 'cpp', 'react', 'css'],
  },
  {
    title: {
      en: 'Elektronic Car',
      da: 'Electronisk Bil',
    },
    description: {
      en: 'Electronic Car is a project where I created a car that can be controlled with a remote control.',
      da: 'Elektronisk Bil er et projekt, hvor jeg har skabt en bil, der kan styres med en fjernbetjening.',
    },
    images: [electroniccar1, electroniccar2, electroniccar3, electroniccar4, electroniccar5, electroniccar6, electroniccar7],
    languages: ['c'],
  },
  {
    title: {
      da: 'Portfolio 1.0',
      en: 'Portfolio 1.0',
    },
    description: {
      en: 'Portfolio 1.0 is a website that showcases my projects and skills in a single page.',
      da: 'Portfolio 1.0 er en hjemmeside, der viser mine projekter og færdigheder samlet på en side.',
    },
    images: [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5],
    languages: [ 'react', 'typescript', 'css', ],
  },
];

const Projects = ({ openModal }: ProjectsProps) => {
  const { language } = useLanguage();

  return (
    <section id="projects" className="flex items-center justify-center px-8 sm:justify-start sm:px-16 md:px-24 lg:px-32 transition-all duration-300 pt-8 pb-16">
      <div className="text-left max-w-3xl transition-all duration-300">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-gray-800 dark:text-white">
          {language === 'da' ? 'Projekter' : 'Projects'}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-[350px] sm:max-w-[450px] lg+:max-w-[700px] transition-all duration-300">
          {language === 'da' 
            ? 'Herunder kan du se nogle af de projekter, jeg har arbejdet på. Klik på et projekt for at se flere detaljer om det enkelte projekt.'
            : 'Below you can see some of the projects I have worked on. Click on a project to see more details about it.'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 w-full max-w-[450px] lg+:max-w-[700px]">
          {projectsData.map((project, index) => (
            <div key={index} className="relative group rounded-lg p-[2px] bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae] dark:from-[#FF4E50] dark:to-[#F9D423] hover:scale-105 transition-transform duration-200" onClick={() => openModal(project, 0)}>
              <div className="bg-gray-50 dark:bg-[#222222] rounded-lg p-2 h-full transition-colors duration-200">
                <img src={project.images[0]} alt={project.title[language]} className="h-24 w-full object-cover rounded-md" />
                <h3 className="text-lg font-semibold mt-2 text-gray-800 dark:text-gray-200 text-center">{project.title[language]}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;