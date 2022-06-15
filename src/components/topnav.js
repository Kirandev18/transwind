import React from 'react'
import logo from '../images/Logo1.png'
import { MdOutlineMail } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import { FaMobileAlt } from 'react-icons/fa';
import Mail from '../images/pngs/mail.png'
const Topnav = () => {
  return (
    <div>
    <div className=' w-full max-w-xl mx-auto hidden sm:block  lg:max-w-screen-xl'>
        <div className=' bg-white flex justify-between  px-10 py-5'>
        <div className=' w-80 flex my-auto justify-center align-middle'>
    <img src={logo} className=" h-12 "/>
      </div>

      <div className="flex flex-col items-end justify-end md:flex-row">
        <a href="/" className="mb-4 mr-8">
          <div className="flex items-center justify-center mt-1 mx-auto my-auto ">
          <FaMobileAlt className='h-10 text-black' /> 
          </div>
        </a>
        <div className='mx-auto my-auto pr-8'>
          <h2 className="mb-1 font-sans text-xl font-bold tracking-tight text-[#950C09] sm:text-xl sm:leading-none">
          CALL US
          </h2>
          <p className="text-base text-[#00235A] md:text-lg">
          080-4954599 | 6364321766
          </p>
        </div>

        <a href="/" className="mb-4 mr-8">
          <div className="flex items-center justify-center mt-1 mx-auto my-auto ">
          <img src={Mail} className="h-8 mt-2" />
          </div>
        </a>
        <div className='mx-auto my-auto'>
          <h2 className="mb-1 font-sans text-xl font-bold tracking-tight text-[#950C09] sm:text-xl sm:leading-none">
          EMAIL US
          </h2>
          <p className="text-base text-[#00235A] md:text-lg">
          Marketing@transwindtech.com
          </p>
        </div>
      </div>
            
      </div>
    </div>

{/* Mobile  */}
<div className='block sm:hidden'>
<div class="navbar bg-base-100 px-5">
  <div class="navbar-start">
  <img src={logo} className=" h-8 "/>
  </div>
  <div class="navbar-center">
  
  </div>
  <div class="navbar-end">
  <div class="dropdown  dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Topnav