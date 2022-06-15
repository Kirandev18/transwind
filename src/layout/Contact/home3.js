import React from 'react'
import Email from '../../images/pngs/mail.png'

const home3 = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      
      <div className="grid gap-12 row-gap-8 lg:grid-cols-4 py-5 px-4 border-2 border-[#8F0106]">
        <div className="flex border-r-4 border-[#8F0106]">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 ">
              <img src={Email} className=" w-8" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 text-[#8F0106] font-semibold leading-5">For sales& Marketing:</h6>
            <p className="text-sm text-gray-900">
            marketing@transwindtech.com
            </p>
          </div>
        </div>
        <div className="flex border-r-4 border-[#8F0106]">
          <div className="mr-4">
          <div className="flex items-center justify-center w-10 h-10 mb-3 ">
              <img src={Email} className=" w-8" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 text-[#8F0106] font-semibold leading-5">For Services:</h6>
            <p className="text-sm text-gray-900">
            service@transwindtech.com
            </p>
          </div>
        </div>
        <div className="flex border-r-4 border-[#8F0106]">
          <div className="mr-4">
          <div className="flex items-center justify-center w-10 h-10 mb-3 ">
              <img src={Email} className=" w-8" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 text-[#8F0106] font-semibold leading-5">For purchase:</h6>
            <p className="text-sm text-gray-900">
            purchase@transwindtech.com
            </p>
          </div>
        </div>
        <div className="flex ">
          <div className="mr-4">
          <div className="flex items-center justify-center w-10 h-10 mb-3 ">
              <img src={Email} className=" w-8" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 text-[#8F0106] font-semibold leading-5">For General info & carrier:</h6>
            <p className="text-sm text-gray-900">
            info@transwindtech.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home3