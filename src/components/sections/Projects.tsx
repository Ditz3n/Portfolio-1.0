import purchase4less from '../../assets/project/purchase4less/purchase4less1.png'
import purchase4less2 from '../../assets/project/purchase4less/purchase4less2.png'
import purchase4less3 from '../../assets/project/purchase4less/purchase4less3.png'
import russianRoulette1 from '../../assets/project/electronic_russian_roulette/electronic_russian_roulette1.png'
import russianRoulette2 from '../../assets/project/electronic_russian_roulette/electronic_russian_roulette2.png'
import russianRoulette3 from '../../assets/project/electronic_russian_roulette/electronic_russian_roulette3.png'
import russianRoulette4 from '../../assets/project/electronic_russian_roulette/electronic_russian_roulette4.png'
import russianRoulette5 from '../../assets/project/electronic_russian_roulette/electronic_russian_roulette5.png'

interface Project {
  title: string;
  description: { en: string; da: string };
  images: string[];
}

interface ProjectsProps {
  openModal: (project: Project, initialIndex: number) => void;
}

const projectsData: Project[] = [
  {
    title: 'Purchase4Less',
    description: {
      en: 'Purchase4Less is an e-commerce platform that allows users to find the best deals on various products.',
      da: 'Purchase4Less er en e-handelsplatform, der giver brugerne mulighed for at finde de bedste tilbud på forskellige produkter.',
    },
    images: [purchase4less, purchase4less2, purchase4less3],
  },
  {
    title: 'Elektronisk Russisk Roulette',
    description: {
      en: 'Electronic Russian Roulette is an online game with a physical board, where players bet on a number or color.',
      da: 'Elektronisk Russisk Roulette er et online spil med en fysisk spilleplade, hvor spillere better på et tal eller farve.',
    },
    images: [russianRoulette1, russianRoulette2, russianRoulette3, russianRoulette4, russianRoulette5],
  },
  /* {
    title: 'Projekt 3',
    imageUrl: '/path/to/image3.jpg',
    description: {
      en: 'Description for Projekt 3.',
      da: 'Beskrivelse for Projekt 3.',
    },
  }, */
];

const Projects = ({ openModal }: ProjectsProps) => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-8 sm:justify-start sm:px-16 md:px-24 lg:px-32 transition-all duration-300 pt-16">
      <div className="text-left max-w-3xl transition-all duration-300">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-gray-800 dark:text-white">
          Projekter
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-[350px] sm:max-w-[450px] lg+:max-w-[700px]transition-all duration-300">
          Her kan du finde information om mine projekter, som jeg har arbejdet på gennem min uddannelse og personlige projekter.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full max-w-[450px]">
          {projectsData.map((project, index) => (
            <div key={index} className="relative group rounded-lg p-[2px] bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae] hover:scale-105 transition-transform duration-200" onClick={() => openModal(project, 0)}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 h-full transition-colors duration-200">
                <img src={project.images[0]} alt={project.title} className="h-32 w-full object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold mt-2 text-gray-800 dark:text-gray-200 text-center">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};








export default Projects; 