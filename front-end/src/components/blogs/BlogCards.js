import React from 'react'
import BlogList from './BlogList'

export default function BlogCards({image, title, description}) {
  return (
    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" 
                    src={image} 
                    alt="blog" 
                    />
            </div>
                    
        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
            {title}
        </h1>

        <p className="text-gray-500 dark:text-gray-300">
            {description}
        </p>

        <a href={BlogList} className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
            <span className="mx-1">read more</span>
                <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
  )
}
