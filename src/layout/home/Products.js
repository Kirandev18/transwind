import React, { Component } from "react";
import Slider from "react-slick";
import Client1 from '../../images/Clients/1.png'
// import Client2 from '../../images/Clients/2.png'
import Client3 from '../../images/Clients/3.png'
import Client4 from '../../images/Clients/4.png'
import Client5 from '../../images/Clients/5.png'
import Client6 from '../../images/Clients/6.png'
import Client7 from '../../images/Clients/7.png'

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      speed: 500,
      slidesToShow: 4,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="px-4 mb-20  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div class="lg:w-1/2  w-full mb-6 lg:mb-0" bis_skin_checked="1">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Clients</h1>
        <div class="h-1 w-20 bg-[#860509] mb-10 rounded" bis_skin_checked="1"></div>
      </div>
        <Slider {...settings}>
          <div>
            <img src={Client1} className=" w-full" />
          </div>
          {/* <div>
          <img src={Client2} className=" w-full"/>
          </div> */}
          <div>
          <img src={Client3} className=" w-full"/>
          </div>
          <div>
          <img src={Client4} className=" w-full"/>
          </div>
          <div>
          <img src={Client5} className=" w-full"/>
          </div>
          <div>
          <img src={Client6} className=" w-full"/>
          </div>
          <div>
          <img src={Client7} className=" w-full"/>
          </div>
          
        </Slider>
      </div>
    );
  }
}