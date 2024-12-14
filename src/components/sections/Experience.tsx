import React from 'react'
import { useLanguage } from '../../context/LanguageContext'
import ProgrammingLanguages from '../ProgrammingLanguages'
import Education from './Education'
import Tools from './Tools'

export default function Experience() {
  const { language } = useLanguage()

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-8 sm:justify-start sm:px-16 md:px-24 lg:px-32 transition-all duration-300 pt-16">
      <div className="text-left max-w-3xl transition-all duration-300">
        <h2 className="text-5xl sm:text-6xl font-bold mb-12 text-gray-800 dark:text-white">
          {language === 'da' ? 'Erfaring' : 'Experience'}
        </h2>

        <div className="space-y-16">
          {/* Education Section */}
          <Education />
          
          {/* Programming Languages Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800 dark:text-white">
              {language === 'da' ? 'Programmeringssprog' : 'Programming Languages'}
            </h3>
            <ProgrammingLanguages />
          </div>

          {/* Tools Section */}
          <Tools />
        </div>
      </div>
    </section>
  )
} 