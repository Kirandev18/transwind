import React from 'react'
import { Link } from 'gatsby'
const header = () => {
  return (
    <div className='bg-[#F9FBFD] hidden sm:block'>
<div className='w-full max-w-xl  mx-auto  lg:max-w-screen-xl'>
<div class="navbar ">
  <div class="flex-1">
   
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About Us</Link></li>
      <li tabindex="0">
        <a>
        Products 
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-[#F9FBFD] z-50">
          <li><a>LV Coil Winding Machine</a></li>
          <li><a>HV Coil Winding Machine</a></li>
          <li><a>LV Foil Winding Machine</a></li>
          <li><a>HV Foil Winding Machine</a></li>
          <li><a>Special Purpose Machine</a></li>
          <li><a>Accessories</a></li>
        </ul>
      </li>
      
      <li><a>Blogs</a></li>
      <li><Link to="/contactus"><a>Contacts</a></Link></li>
    </ul>
  </div>
</div>

</div>
    </div>
  )
}

export default header