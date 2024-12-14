import purchase4less from '../../assets/project/purchase4less.png'

interface Project {
  title: string;
  imageUrl: string;
  description: { en: string; da: string };
}

interface ProjectsProps {
  openModal: (project: Project) => void;
}

const projectsData: Project[] = [
  {
    title: 'Purchase4Less',
    imageUrl: purchase4less,
    description: {
      en: 'Purchase4Less is an e-commerce platform that allows users to find the best deals on various products.',
      da: 'Purchase4Less er en e-handelsplatform, der giver brugerne mulighed for at finde de bedste tilbud på forskellige produkter.',
    },
  },
  /* {
    title: 'Projekt 2',
    imageUrl: '/path/to/image2.jpg',
    description: {
      en: 'Description for Projekt 2.',
      da: 'Beskrivelse for Projekt 2.',
    },
  },
  {
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
        <h2 className="text-5xl sm:text-6xl font-bold mb-12 text-gray-800 dark:text-white">
          Mine Projekter
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-[350px] sm:max-w-[450px] lg+:max-w-[700px] transition-all duration-300">
          Her kan du finde information om mine projekter, som jeg har arbejdet på gennem min uddannelse og personlige projekter.
        </p>
        <div className="grid grid-cols-2 gap-4 w-full max-w-[700px]">
          {projectsData.map((project, index) => (
            <div key={index} className="relative group rounded-lg p-[2px] bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae] hover:scale-105 transition-transform duration-200" onClick={() => openModal(project)}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 h-full transition-colors duration-200">
                <img src={project.imageUrl} alt={project.title} className="h-32 w-full object-cover rounded-t-lg" />
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