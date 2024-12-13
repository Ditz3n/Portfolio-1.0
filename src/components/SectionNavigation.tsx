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

  const renderNavLinks = (items: string[]) => (
    items.map((text, i) => (
      <a
        key={i}
        href={`#${sectionIds[i]}`}
        className={`text-sm tracking-widest uppercase transition-colors duration-200
          ${activeSection === sectionIds[i]
            ? 'text-[#79cbca] dark:text-[#79cbca]' 
            : 'text-gray-500 dark:text-gray-400 hover:text-[#79cbca] dark:hover:text-[#79cbca]'
          }`}
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
        <div className="grid grid-cols-3 items-center max-w-md mx-auto px-8 gap-4">
          {renderNavLinks(navItems[language])}
        </div>
      </nav>
    </>
  )
} 