import React from 'react'

function Home() {
  return (
    <section id="home" className="relative h-screen parallax-bg flex items-center justify-center text-center px-4">
      <div style={{ fontFamily: 'Poppins, system-ui' }} className="parallax-text text-white font-bold">
        <span id="parallax" className="text-4xl sm:text-8xl">HELLO GUYS</span><br />
        <span id="wel" className="text-4xl sm:text-4xl">Welcome to my portfolio</span><br />
        <a href="#about" className="mt-4 inline-flex items-center justify-center px-6 py-2 text-base sm:text-xl font-bold text-white border border-gray-300 rounded-lg hover:bg-gray-600 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          Download CV
        </a>
      </div>
    </section>
  )
}

export default Home