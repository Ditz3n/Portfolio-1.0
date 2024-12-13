import { useLanguage } from '../context/LanguageContext'

// Import logos
import reactLogo from '../assets/logos/react_logo.png'
import cssLogo from '../assets/logos/css_logo.png'
import htmlLogo from '../assets/logos/html_logo.png'
import csharpLogo from '../assets/logos/c_sharp_logo.png'
import cppLogo from '../assets/logos/cpp_logo.png'
import pythonLogo from '../assets/logos/python_logo.png'

interface Language {
  name: string
  logoUrl: string
}

export default function ProgrammingLanguages() {
  const { language } = useLanguage()
  
  const languages: Language[] = [
    { 
      name: 'React/React Native',
      logoUrl: reactLogo,
    },
    { 
      name: 'CSS',
      logoUrl: cssLogo,
    },
    { 
      name: 'HTML',
      logoUrl: htmlLogo,
    },
    { 
      name: 'C#',
      logoUrl: csharpLogo,
    },
    { 
      name: 'C++',
      logoUrl: cppLogo,
    },
    { 
      name: 'Python',
      logoUrl: pythonLogo,
    }
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-[350px] sm:max-w-[450px] lg+:max-w-[700px]">
      {languages.map((lang) => (
        <div 
        key={lang.name}
        className="relative group rounded-lg p-[2px] bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae] hover:scale-105 transition-transform duration-200"
      >
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 h-full transition-colors duration-200">
          <div className="flex flex-col items-center space-y-3">
            <img 
              src={lang.logoUrl} 
              alt={lang.name} 
              className="h-12 sm:h-16 w-auto object-contain"
            />
            <span className="text-sm sm:text-base text-gray-800 dark:text-gray-200 text-center">
              {lang.name}
            </span>
          </div>
        </div>
      </div>
      
      ))}
    </div>
  )
} 