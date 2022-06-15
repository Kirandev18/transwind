import React from 'react'
import Image1 from '../../images/products/TFW HV-150AUS.jpg'
import Image2 from '../../images/products/TFW-300AUS.jpg'

import Image3 from '../../images/products/TSW-600LV.jpg'
import Image4 from '../../images/products/TTW-400HV.jpg'
import Backgroundimage1 from '../../images/background/Img_JoinUs.png'

const section4 = () => {

 
  return (
    
    // <div style={{ backgroundImage: `url(${Backgroundimage1})`, backgroundRepeat: "no-repeat"}}>
    <div>
     <section class="text-gray-600 body-font px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
  <div class="container px-5 py-24 mx-auto" bis_skin_checked="1">
    <div class="flex flex-wrap w-full mb-20" bis_skin_checked="1">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0" bis_skin_checked="1">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Featured Categories</h1>
        <div class="h-1 w-20 bg-[#860509] rounded" bis_skin_checked="1"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-[#00235A]">We have developed a whole range of machineries for the electrical industry starting from Foil Winding Machines, HV coil winding machines, LV coil winding machines, Linear Winding Machine, Coil Winding Machine, Transformer Winding Machine and Cut To Length Line Machine.</p>
    </div>
    <div class="flex flex-wrap -m-4" bis_skin_checked="1">
      <div class="xl:w-1/4 md:w-1/2 p-4 " bis_skin_checked="1">
        <div class="bg-gray-100 duration-150 hover:-translate-y-2 text-[#00235A] hover:text-white hover:bg-[#860509] p-6 rounded-lg" bis_skin_checked="1">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={Image1} alt="content"/>
          
          <h2 class="text-lg  font-medium title-font mb-4">HV Foil winding Machine</h2>
          <p class="leading-relaxed  text-base">These machine is designed to wind a single Aluminum/ Copper foil with 2 insulation layers. It produces multiple windings on a single mandrel, one winding at a time.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked="1">
        <div class="bg-gray-100 duration-150 hover:-translate-y-2 text-[#00235A] hover:text-white hover:bg-[#860509] p-6 rounded-lg" bis_skin_checked="1">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={Image2} alt="content"/>
          
          <h2 class="text-lg = font-medium title-font mb-4">LV Foil Winding Machine</h2>
          <p class="leading-relaxed text-base">The machine is designed to wind with one or two copper or aluminium foils  for low voltage coils of electric transformers.</p>
        <br/>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked="1">
        <div class="bg-gray-100 duration-150 hover:-translate-y-2 text-[#00235A] hover:text-white hover:bg-[#860509] p-6 rounded-lg" bis_skin_checked="1">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={Image3} alt="content"/>
          
          <h2 class="text-lg  font-medium title-font mb-4"> LV Coil Winding Machines</h2>
          <p class="leading-relaxed text-base">These machines are designed to wind coils to transformer with copper and aluminium wire. A closed loop control system allows us to program various types coils.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked="1">
        <div class="bg-gray-100 duration-150 hover:-translate-y-2 text-[#00235A] hover:text-white hover:bg-[#860509] p-6 rounded-lg" bis_skin_checked="1">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={Image4} alt="content"/>
          
          <h2 class="text-lg font-medium title-font mb-4">HV coil winding machines</h2>
          <p class="leading-relaxed text-base">These machines are designed to wind coils to transformer with copper and aluminium wire and strip. A closed loop control system allows us to program various types coils.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default section4