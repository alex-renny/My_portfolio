import React from 'react'

function Experience() {
  return (
    <section id="experience" className="bg-gray-900 dark:bg-gray-800">
      <div>
        <div className="py-10 max-w-screen-lg mx-auto">
          <div id="work" className="text-left mb-16 px-4">
            <p className="mt-4 text-sm sm:text-xl leading-7 text-gray-400 font-bold">
              WORK EXPERIENCE
            </p>
            <h3 id="h3" className="text-left text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-white">
              <span className="text-indigo-600"> Projects </span> I have completed<br /> in the past.
            </h3>
          </div>

          <div className="w-full h-full py-20 flex flex-wrap justify-center items-center gap-3">
            <div className="w-[20rem] mx-auto flex flex-col gap-2 px-4 rounded-lg dark:bg-gray-800">
              <div className="w-full h-full text-center flex flex-col gap-4 relative -top-10">
                <h1 className="uppercase text-9xl text-gray-400 font-semibold dark:text-white">
                  01
                </h1>
                <h2 className="text-xl font-serif capitalize font-semibold text-white dark:text-gray-300">
                  <span className="text-green-700">Google,</span> Interaction Designer
                </h2>
                <p className="text-gray-400 dark:text-gray-300 text-left">
                  I currently am the lead designer on the interaction design team for Google Play.
                </p>
              </div>
            </div>
            <div className="w-[20rem] mx-auto flex flex-col gap-2 px-4 rounded-lg dark:bg-gray-800">
              <div className="w-full h-full text-center flex flex-col gap-4 relative -top-10">
                <h1 className="uppercase text-9xl text-gray-400 font-semibold dark:text-white">
                  02
                </h1>
                <h2 className="text-xl font-serif capitalize font-semibold text-white dark:text-gray-300">
                  <span className="text-blue-600">Facebook,</span> Product Designer
                </h2>
                <p className="text-gray-400 dark:text-gray-300 text-left">
                  I've worked on a wide variety of internal tools for facebook over the past 6 years.
                </p>
              </div>
            </div>
            <div className="w-[20rem] mx-auto flex flex-col gap-2 px-4 rounded-lg dark:bg-gray-800">
              <div className="w-full h-full text-center flex flex-col gap-4 relative -top-10">
                <h1 className="uppercase text-9xl text-gray-400 font-semibold dark:text-white">
                  03
                </h1>
                <h2 className="text-1xl font-serif capitalize font-semibold text-white dark:text-gray-300">
                  <span className="text-pink-600">Dribbble,</span> Graphic Designer
                </h2>
                <p className="text-gray-400 dark:text-gray-300 text-left">
                  I started my design career with Dribbble. I was incharge of creating illustrations for the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience