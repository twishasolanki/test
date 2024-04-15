import React from 'react'

export default function Home() {
    return (
        <div >

            <div className="flex md:flex-row flex-col mb-4 p-10 bg-gray-100 mt-5">
                <div className="w-1/2  ">

                    <div style={{ backgroundImage: 'url("https://demo.webtend.net/html/wellern/assets/images/hero/hero-three-man.png")', backgroundRepeat: 'no-repeat', height: '100%', marginLeft: '20%' }} className='flex mx-auto justify-center items-center'>

                        <a href="#" className="block p-6 bg-white border border-gray-200 rounded-xl shadow hover:bg-gray-100 -mt-96 ms-72">
                            <img src='assets/hero-chart.png' />
                            <p className=" text-gray-700 dark:text-gray-400 text-center font-bold">95% Success <br />Results</p>
                        </a>
                        <a href="#" className=" p-3 bg-white border border-gray-200 rounded-full shadow hover:bg-gray-100 flex mt-32">
                            <img src='assets/icon1.png' />
                            <p className=" text-gray-700 dark:text-gray-400 w-52 text-center mt-2 font-bold">Experience Advisor</p>
                        </a>

                    </div>
                </div>
                <div className="md:w-1/2 md:p-44 ">
                    <p className='md:text-4xl text-2xl font-bold'><span className='text-blue-600'>2563+</span> Students</p>
                    <p className='md:text-5xl text-3xl mt-5 font-bold text-gray-800'>We’re Best Online Education Partners University 2022</p>
                    <div className='flex '>
                        <p className='text-2xl mt-8 font-bold text-blue-600'>Experts Advisors</p>
                        <p className='text-2xl mt-8 ms-12 font-bold text-blue-600'>538+ Courses</p>
                    </div>
                    <div className='flex '>
                        <button type="button" className="flex focus:outline-none text-white bg-green-700 hover:bg-blue-800  focus:ring-4 focus:ring-green-300  font-medium rounded-lg text-sm px-10 py-5 mt-10 mb-2 ">GET STARTED
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2 font-bold" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </button>
                        <button type="button" className="flex focus:outline-none text-white bg-blue-800 hover:bg-green-700 ms-10  focus:ring-4 focus:ring-green-300  font-medium rounded-lg text-sm px-10 py-5 mt-10 mb-2 ">OUR SERVICE
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2 font-bold" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex md:flex-row flex-col mb-4 ">
                <div class="md:w-1/2 md:p-28">
                    <p className='text-3xl text-blue-700 font-bold'>Why Learn Us</p>
                    <p className='text-4xl font-bold mt-5 '>Experience To Online Learning Center</p>
                </div>
                <div class="md:w-1/2 md:p-40 md:mt-0 mt-5">
                    Sit amet consectetur adipiscing sed eiusmod tempor indunt ut labore et dolore magna aliquaes ipsum suspendisse ultrice gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis dolorem fugiat voluptas nulla pariatur.
                </div>
            </div>

            <div class="flex md:flex-row flex-col md:ms-0 ms-32">
                <div class="md:w-1/4 ">
                    <a href="#" class="block max-w-sm p-12 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <img src='assets/feature-five-icon1.png'/>
                          <p class="font-bold mt-3 text-2xl">Exclusive Courses</p>
                          <p className='mt-3 '>Sit amet consectetur adiisc elit sed dseiusmod temorse incididunt labore dolore</p>
                          <button type='button' className='bg-green-100 w-full mt-5'>Read More</button>
                    </a>
                </div>
                <div class="md:w-1/4 mt-5">
                    <a href="#" class="block max-w-sm p-12 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <img src='assets/feature-five-icon2.png'/>
                          <p class="font-bold mt-3 text-2xl">Exclusive Courses</p>
                          <p className='mt-3 '>Sit amet consectetur adiisc elit sed dseiusmod temorse incididunt labore dolore</p>
                          <button type='button' className='bg-green-100 w-full mt-5'>Read More</button>
                    </a>
                </div>
                <div class="md:w-1/4 ">
                    <a href="#" class="block max-w-sm p-12 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <img src='assets/feature-five-icon2.png'/>
                          <p class="font-bold mt-3 text-2xl">Exclusive Courses</p>
                          <p className='mt-3 '>Sit amet consectetur adiisc elit sed dseiusmod temorse incididunt labore dolore</p>
                          <button type='button' className='bg-green-100 w-full mt-5'>Read More</button>
                    </a>
                </div>
                <div class="md:w-1/4 mt-5">
                    <a href="#" class="block max-w-sm p-12 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <img src='assets/feature-five-icon1.png'/>
                          <p class="font-bold mt-3 text-2xl">Exclusive Courses</p>
                          <p className='mt-3 '>Sit amet consectetur adiisc elit sed dseiusmod temorse incididunt labore dolore</p>
                          <button type='button' className='bg-green-100 w-full mt-5'>Read More</button>
                    </a>
                </div>
              
            </div>


        </div>
    )
}
