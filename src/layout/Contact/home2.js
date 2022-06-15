import React from 'react'

const hometwo = () => {
  return (
    <section class="bg-white py-10">
            <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <h1 class="text-3xl px-6 font-semibold text-gray-800 capitalize lg:text-4xl  :text-white">Get in touch! We’d love to hear from you</h1>
                
                <div class="mt-2 px-6">
                    <span class="inline-block w-40 h-1 rounded-full bg-[#8B0409]"></span>
                    <span class="inline-block w-3 h-1 ml-1 rounded-full bg-[#8B0409]"></span>
                    <span class="inline-block w-1 h-1 ml-1 rounded-full bg-[#8B0409]"></span>
                </div>
                
                <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
                    <div class="w-full lg:w-1/2 grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-1 px-6">
                        <div class="space-y-3">

                            <h1 class="text-2xl font-semibold text-gray-700 capitalize  :text-white">Call Us </h1>

                            <p class="text-gray-500  :text-gray-300">
                            080-4954599 | 6364321766
                            </p>
                        </div>

                        <div class="space-y-3">

                        <h1 class="text-2xl font-semibold text-gray-700 capitalize  :text-white">EMAIL US</h1>

            <p class="text-gray-500  :text-gray-300">
            Marketing@transwindtech.com
</p>
</div>

                        

    
                    </div>

                    <div class="sm:px-10 lg:flex lg:w-1/2 lg:justify-center">
                       
                    <section class="w-full max-w-2xl py-4 mx-auto px-10 lg:px-20 bg-white rounded-md shadow-md  ">
        <h2 class="text-3xl font-semibold text-center text-gray-800  ">Get in touch</h2>
        <p class="mt-3 text-center text-gray-600  ">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        
        
        <div class="mt-6 ">
            <div class="items-center -mx-2 md:flex">
                <div class="w-full mx-2">
                    <label class="block mb-2 text-sm font-medium text-gray-600  ">Name</label>

                    <input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md     border-gray-600 focus:border-blue-400 focus:ring-blue-300   focus:outline-none focus:ring focus:ring-opacity-40" type="text"/>
                </div>

                <div class="w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600  ">E-mail</label>

                    <input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md     border-gray-600 focus:border-blue-400 focus:ring-blue-300   focus:outline-none focus:ring focus:ring-opacity-40" type="text"/>
                </div>
            </div>

            <div class="w-full mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600  ">Message</label>

                <textarea class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md   border-gray-600 focus:border-blue-400   focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
            </div>

            <div class="flex justify-center mt-6">
                <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Send Message</button>
            </div>
        </div>
    </section>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default hometwo