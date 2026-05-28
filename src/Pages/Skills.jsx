import React from 'react'

function Skills() {
  return (
    <section id="skillsection" className="relative pt-16 bg-gray-900 sec2">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
            <div id="pg3" className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg">
              <blockquote className="relative p-8 mb-4">
                <h4 id="skill" className="text-6xl font-bold text-white">
                  Skillset
                </h4>
                <p id="skillset" className="text-md font-light mt-2 text-white">
                  With skills in over 4 different fields of design,
                  I am the perfect person to hire when it comes to a full fledged project.
                  Whatever your needs are, I can pretty much take on any challenge.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col mt-4 card border-custom">
                  <div className="px-4 py-5 flex-auto">
                    <div className="logo text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-700">
                      <i className="fas fa-sitemap"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold text-white">Web design</h6>
                    <p className="mb-4 text-blueGray-500">
                      Notus JS comes with a huge number of Fully Coded CSS components.
                    </p>
                  </div>
                </div>
                <div className="relative card flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto border-custom">
                    <div className="logo text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-700">
                      <i className="fas fa-drafting-compass"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold text-white">
                      JavaScript Components
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      We also feature many dynamic components for React, NextJS, Vue and Angular.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 px-4 card">
                <div className="relative flex flex-col min-w-0 mt-4 border-custom">
                  <div className="px-4 py-5 flex-auto">
                    <div className="logo text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-700">
                      <i className="fas fa-newspaper"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold text-white">Ethical hacking</h6>
                    <p className="mb-4 text-blueGray-500">
                      This extension also comes with 3 sample pages. They are fully coded so you can start working instantly.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col min-w-0 card border-custom">
                  <div className="px-4 py-5 flex-auto">
                    <div className="logo text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-700">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold text-white">IOT</h6>
                    <p className="mb-4 text-blueGray-500">
                      Built by developers for developers. You will love how easy is to work with Notus JS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative pt-8 pb-6 mt-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Skills