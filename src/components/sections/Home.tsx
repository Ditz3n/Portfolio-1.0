import { useLanguage } from '../../context/LanguageContext'
import AnimatedText from '../AnimatedText'

export default function Home() {
  const { language } = useLanguage()

  return (
    <section id="home" className="h-[100dvh] flex items-center justify-center px-8 sm:justify-start sm:px-16 md:px-24 lg:px-32 transition-all duration-300">
      <div className="text-left max-w-3xl transition-all duration-300">
        <AnimatedText className="text-gray-800 dark:text-white font-bold text-3xl sm:text-4xl lg+:text-5xl mb-4 transition-all duration-300">
          {language === 'da' ? 'Velkommen! Jeg hedder' : 'Hey there! My name is'}
        </AnimatedText>
        <h1 className="leading-tight font-bold mb-6">
          <div className="bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae] text-transparent bg-clip-text">
            <span className="text-7xl sm:text-8xl lg+:text-[10rem] block transition-all duration-300">Mads</span>
            <span className="text-7xl sm:text-8xl lg+:text-[10rem] block transition-all duration-300">Villadsen.</span>
          </div>
        </h1>
        <div className="text-gray-800 dark:text-white font-bold text-2xl sm:text-3xl lg+:text-4xl space-y-2">
          <AnimatedText className="block transition-all duration-300">
            {language === 'da' ? 'Softwareingenørstuderende' : 'Software Engineering Student'}
          </AnimatedText>
          <AnimatedText className="block transition-all duration-300">
            {language === 'da' ? 'hos AU University' : 'at AU University'}
          </AnimatedText>
        </div>
      </div>
    </section>
  )
} 