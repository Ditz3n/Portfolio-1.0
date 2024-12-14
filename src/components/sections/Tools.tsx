import { useLanguage } from '../../context/LanguageContext'

const Tools = () => {
  const { language } = useLanguage()

  // Liste over værktøjer
  const tools = [
    { name: 'Visual Studio Code', description: 'A popular code editor.' },
    { name: 'IntelliJ IDEA', description: 'An IDE for Java development.' },
    { name: 'Postman', description: 'A tool for API testing.' },
    { name: 'Figma', description: 'A design tool for UI/UX.' },
    { name: 'Git', description: 'Version control system.' },
    { name: 'Docker', description: 'Containerization platform.' },
    { name: 'ChatGPT', description: 'AI language model for assistance.' },
    // Tilføj flere værktøjer efter behov
  ]

  return (
    <div>
      <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800 dark:text-white">
        {language === 'da' ? 'Værktøjer' : 'Tools'}
      </h3>
      
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-[350px] sm:max-w-[450px] lg+:max-w-[700px] transition-all duration-300">
        {language === 'da' 
          ? 'Herunder kan du se de værktøjer og IDE\'er, jeg har erfaring med.'
          : 'Below you can see the tools and IDEs I have experience with.'}
      </p>

      <ul className="list-disc pl-5 space-y-2">
        {tools.map((tool, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300">
            <strong>{tool.name}:</strong> {tool.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tools 