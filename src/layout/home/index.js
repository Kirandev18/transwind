import React from 'react'
import "./index.css"
import Sec1 from './homesec1'
import Sec2 from './homesec2'
import Sec3 from './homesec3'
import Sec4 from './section4'
import Products from './Products'
import Happyclient from './happyclients'
import Fade from 'react-reveal/Fade';


const Index = () => {
    return ( <div>
        <Fade bottom>
        <Sec1/>
        <Sec3 /> 
        <Sec2 />
        <Sec4  />
        <Products />
        <Happyclient />
        </Fade>
    </div>
    )
}

export default Index