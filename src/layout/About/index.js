import React from 'react'
import About1 from './about1'
import Abouttwo from './about2'
import Aboutthree from './about3'
import Aboutfour from './about4'
import Faq from './Faq'

const Index = () => {
  return (
    <div>
        <About1 />
        
        <Aboutthree />
        <Abouttwo />
        {/* <div className='bg-blue-50'>
          <Aboutfour />
        </div> */}
        <Faq />
    </div>
  )
}

export default Index