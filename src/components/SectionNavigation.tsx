import { useLanguage } from '../context/LanguageContext'
import { useActiveSection } from '../hooks/useActiveSection'

export default function SectionNavigation() {
  const { language } = useLanguage()
  const activeSection = useActiveSection()

  const navItems = {
    da: ['OM MIG', 'ERFARING', 'PROJEKTER', 'KONTAKT'],
    en: ['ABOUT', 'EXPERIENCE', 'PROJECTS', 'CONTACT']
  }

  const sectionIds = ['about', 'experience', 'projects', 'contact']

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Adjusted to account for mobile navigation height
      const offset = window.innerWidth < 768 ? 80 : 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  }

  const renderNavLinks = (items: string[]) => (
    items.map((text, i) => (
      <a
        key={i}
        onClick={() => handleScroll(sectionIds[i])}
        className={`text-sm tracking-widest uppercase transition-all duration-200 relative
          ${activeSection === sectionIds[i]
            ? 'text-[#77a1d3] dark:text-[#FF4E50] md:translate-x-[-20px]' 
            : 'text-gray-500 dark:text-gray-400 hover:text-[#77a1d3] dark:hover:text-[#FF4E50]'
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
      <nav className="invisible md:visible fixed right-20 top-1/2 -translate-y-1/2 opacity-0 md:opacity-100 transition-all duration-300 z-10">
        <div className="flex flex-col items-end gap-8">
          {renderNavLinks(navItems[language])}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="visible md:invisible fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1a1a1a] z-40 py-7 opacity-100 md:opacity-0 transition-all duration-300 md:pointer-events-none shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-4 place-items-center max-w-md mx-auto px-8">
          {renderNavLinks(navItems[language])}
        </div>
      </nav>
    </>
  )
} 