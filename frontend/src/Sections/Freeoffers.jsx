import React, {useEffect, useState} from 'react';
import Cards from './Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";


function Freeoffers() {
  const [event, setEvent]=useState([])
  useEffect(()=>{
    const getEvent=async()=>{
      try {
        const res = await axios.get("https://localhost:4001/user/events");
        const data= res.data.filter((data) => data.category === "Free");
        console.log(res.data)
        setEvent (data);
      } catch (error) {
        console.log(error) 
      }
    }
    getEvent();
  }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
    <>
    <div className="max-w-screen-2xl md:min-w-screen container mx-auto md:px-20 px-4">
        <div>
        <h1 className="dont-semibold text-xl pb-5 text-orange-500">Free expert advices</h1>
        <p>Stuck on your event planning? Get instant advice from experienced event managers! Join our FREE chat and ask all your questions. Our experts are here to help you plan a flawless event.</p>
        </div>
    <div>
    <Slider {...settings}>
        {event.map((item)=>(
            <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freeoffers;
 