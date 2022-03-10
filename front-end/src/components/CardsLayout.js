import React from 'react'

export default function CardsLayout(props) {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Welcome to my <br /> awesome <span className="text-blue-500">Blog</span></h1>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            {props.children}
            </div>
        </div>
    </section>
  )
}
