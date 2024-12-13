import { useLanguage } from '../../context/LanguageContext'
import AnimatedText from '../AnimatedText'

export default function Home() {
  const { language } = useLanguage()

  return (
    <section className="flex items-center justify-center min-h-screen px-8 sm:px-16 md:px-24 lg:px-32 transition-all duration-300 pt-12 sm:pt-16">
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">Welcome</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          This is your home section.
        </p>
      </div>
    </section>
  )
} 