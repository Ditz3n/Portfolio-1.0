import { useLanguage } from '../../context/LanguageContext';
import reactLogo from '../../assets/logos/react_logo.png';
import cssLogo from '../../assets/logos/css_logo.png';
import htmlLogo from '../../assets/logos/html_logo.png';
import javaScriptLogo from '../../assets/logos/javascript_logo.png';
import typescriptLogo from '../../assets/logos/typescript_logo.png';
import csharpLogo from '../../assets/logos/c_sharp_logo.png';
import cppLogo from '../../assets/logos/cpp_logo.png';
import pythonLogo from '../../assets/logos/python_logo.png';
import mongodbLogo from '../../assets/logos/mongodb_logo.png';

const ProgrammingLanguages = () => {
  const { language } = useLanguage();

  const languages = [
    { name: 'React/React Native', logoUrl: reactLogo },
    { name: 'CSS', logoUrl: cssLogo },
    { name: 'HTML', logoUrl: htmlLogo },
    { name: 'JavaScript', logoUrl: javaScriptLogo },
    { name: 'TypeScript', logoUrl: typescriptLogo },
    { name: 'C#', logoUrl: csharpLogo },
    { name: 'C++', logoUrl: cppLogo },
    { name: 'Python', logoUrl: pythonLogo },
    { name: 'MongoDB', logoUrl: mongodbLogo },
  ];

  return (
    <div>
      <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800 dark:text-white">
        {language === 'da' ? 'Programmeringssprog' : 'Programming Languages'}
      </h3>
      
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-[350px] sm:max-w-[450px] lg+:max-w-[700px] transition-all duration-300">
        {language === 'da' 
          ? 'Herunder kan du se de programmeringssprog og teknologier, som jeg har erfaring med gennem min uddannelse og personlige projekter.'
          : 'Below you can see the programming languages and technologies that I have experience with through my education and personal projects.'}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-[350px] sm:max-w-[450px] lg+:max-w-[700px]">
        {languages.map((lang) => (
          <div key={lang.name} className="relative group rounded-lg p-[2px] bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae] hover:scale-105 transition-transform duration-200">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 h-full transition-colors duration-200">
              <div className="flex flex-col items-center space-y-3">
                <img src={lang.logoUrl} alt={lang.name} className="h-12 sm:h-16 w-auto object-contain" />
                <span className="text-sm sm:text-base text-gray-800 dark:text-gray-200 text-center">{lang.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammingLanguages; 