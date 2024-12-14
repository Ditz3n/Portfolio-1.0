import React, { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

interface Course {
  id: string
  name: string
  semester: number
  ects: number
  completed: boolean
}

const Education = ({ courses, completedECTS, totalECTS, progressPercentage }: {
  courses: Course[],
  completedECTS: number,
  totalECTS: number,
  progressPercentage: number
}) => {
  const { language } = useLanguage()
  
  // Tilføj tilstand til at holde styr på åbne semestre
  const [openSemesters, setOpenSemesters] = useState<number[]>([])

  // Add semester titles
  const semesterTitles = {
    da: ['1. semester', '2. semester', '3. semester', '4. semester', '5. semester', '6. semester', '7. semester'],
    en: ['1st semester', '2nd semester', '3rd semester', '4th semester', '5th semester', '6th semester', '7th semester']
  }

  // Helper function to group courses by semester
  const groupedCourses = courses.reduce((acc, course) => {
    if (!acc[course.semester]) {
      acc[course.semester] = [];
    }
    acc[course.semester].push(course);
    return acc;
  }, {} as Record<number, Course[]>);

  // Toggle function for opening/closing semesters
  const toggleSemester = (semesterNum: number) => {
    setOpenSemesters(prev => 
      prev.includes(semesterNum)
        ? prev.filter(num => num !== semesterNum)
        : [...prev, semesterNum]
    )
  }

  return (
    <div>
      <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800 dark:text-white">
        {language === 'da' ? 'Uddannelse' : 'Education'}
      </h3>
      
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-[350px] sm:max-w-[450px] lg+:max-w-[700px] transition-all duration-300">
        {language === 'da' 
          ? 'Nedenfor kan du se min nuværende progression gennem min diplomingeniøruddannelse i softwareteknologi ved Aarhus Universitet. Grønne felter indikerer beståede kurser.'
          : 'Below you can see my current progress through my Bachelor of Engineering degree in Software Technology at Aarhus University. Green fields indicate completed courses.'}
      </p>
      
      <div className="overflow-x-auto transition-all duration-300">
        <div className="w-full max-w-[350px] sm:max-w-[450px] lg+:max-w-[700px] transition-all duration-300 space-y-4">
          {Object.entries(groupedCourses).map(([semester, semesterCourses]) => {
            const semesterNum = Number(semester)
            const isOpen = openSemesters.includes(semesterNum) // Check if the semester is open
            return (
              <div key={semester} className="relative rounded-lg overflow-hidden p-[1px] bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae]">
                <div className="bg-white dark:bg-[#1a1a1a] rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSemester(semesterNum)} // Toggle semester on click
                    className="w-full px-4 py-4 flex items-center justify-between text-left bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {language === 'da' 
                          ? semesterTitles.da[semesterNum - 1] 
                          : semesterTitles.en[semesterNum - 1]
                        }
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-500">
                        ({semesterCourses.reduce((acc, course) => acc + course.ects, 0)} ECTS)
                      </span>
                    </div>
                  </button>
                  
                  {isOpen && ( // Only show the courses if the semester is open
                    <div className="border-t border-gray-200/50 dark:border-gray-700/50">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th className="py-2 sm:py-4 px-2 sm:px-4 text-left text-[10px] sm:text-sm text-gray-600 dark:text-gray-400">
                              {language === 'da' ? 'ID' : 'ID'}
                            </th>
                            <th className="py-2 sm:py-4 px-2 sm:px-4 text-left text-[10px] sm:text-sm text-gray-600 dark:text-gray-400">
                              {language === 'da' ? 'Navn' : 'Name'}
                            </th>
                            <th className="py-2 sm:py-4 px-2 sm:px-4 text-right text-[10px] sm:text-sm text-gray-600 dark:text-gray-400">ECTS</th>
                            <th className="py-2 sm:py-4 px-2 sm:px-4 text-center text-[10px] sm:text-sm text-gray-600 dark:text-gray-400">
                              {language === 'da' ? 'Status' : 'Status'}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {semesterCourses.map((course) => (
                            <tr 
                              key={course.id}
                              className={`border-b border-gray-200 dark:border-gray-700 transition-all duration-300
                                ${course.completed ? 'bg-green-50 dark:bg-green-900/10' : ''}`}
                            >
                              <td className="py-2 sm:py-4 px-2 sm:px-4 text-[10px] sm:text-sm text-gray-800 dark:text-gray-200">{course.id}</td>
                              <td className="py-2 sm:py-4 px-2 sm:px-4 text-[10px] sm:text-sm text-gray-800 dark:text-gray-200 break-words">{course.name}</td>
                              <td className="py-2 sm:py-4 px-2 sm:px-4 text-[10px] sm:text-sm text-right text-gray-800 dark:text-gray-200">{course.ects}</td>
                              <td className="py-2 sm:py-4 px-2 sm:px-4 text-center">
                                {course.completed && (
                                  <CheckCircleIcon className="w-3 h-3 sm:w-5 sm:h-5 text-green-500 mx-auto" />
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )
          })}

          {/* Progress bar */}
          <div className="mt-8 space-y-2">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold">
                {language === 'da' ? 'Samlet progression' : 'Total progress'}
              </span>
              <span>
                {completedECTS} / {totalECTS} ECTS ({Math.round(progressPercentage)}%)
              </span>
            </div>
            <div className="h-4 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden p-[1px]">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae] transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education 