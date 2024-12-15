import { useLanguage } from '../context/LanguageContext'
import { useActiveSection } from '../hooks/useActiveSection'

export default function SectionNavigation() {
  const { language } = useLanguage()
  const activeSection = useActiveSection()

  const navItems = {
    da: ['OM MIG', 'ERFARING', 'PROJEKTER'],
    en: ['ABOUT', 'EXPERIENCE', 'PROJECTS']
  }

  const sectionIds = ['about', 'experience', 'projects']

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const renderNavLinks = (items: string[]) => (
    items.map((text, i) => (
      <a
        key={i}
        onClick={() => handleScroll(sectionIds[i])}
        className={`text-sm tracking-widest uppercase transition-all duration-200 relative
          ${activeSection === sectionIds[i]
            ? 'text-[#FF4E50] dark:text-[#FF4E50] md:translate-x-[-20px]' 
            : 'text-gray-500 dark:text-gray-400 hover:text-[#FF4E50] dark:hover:text-[#FF4E50]'
          }
          ${activeSection === sectionIds[i] ? 'md:after:content-[""] md:after:absolute md:after:right-[-30px] md:after:top-1/2 md:after:-translate-y-1/2 md:after:w-[20px] md:after:h-[2px] md:after:bg-[#79cbca] dark:md:after:bg-[#FF4E50]' : ''}
        `}
      >
        {text}
      </a>
    ))
  )

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="invisible md:visible fixed right-20 top-1/2 -translate-y-1/2 opacity-0 md:opacity-100 transition-all duration-300">
        <div className="flex flex-col items-end gap-8">
          {renderNavLinks(navItems[language])}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="visible md:invisible fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1a1a1a] z-50 py-6 opacity-100 md:opacity-0 transition-all duration-300 md:pointer-events-none">
        <div className="grid grid-cols-3 place-items-center max-w-md mx-auto px-8">
          {renderNavLinks(navItems[language])}
        </div>
      </nav>
    </>
  )
} 