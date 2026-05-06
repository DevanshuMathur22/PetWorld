import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import a from "../assets/images/a.jpg";
import b from "../assets/images/b.jpg";
import c from "../assets/images/c.jpg";
import d from "../assets/images/d.jpg";
import e from "../assets/images/e.jpg";
import f from "../assets/images/f.jpg";
import g from "../assets/images/g.jpg";

const images = [a, b, c, d, e, f, g];

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 
               bg-white/70 hover:bg-white text-black p-1 md:p-2 rounded-full 
               shadow-lg cursor-pointer transition"
    onClick={onClick}
  >
    <ChevronRight size={20} className="md:w-6 md:h-6" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 
               bg-white/70 hover:bg-white text-black p-1 md:p-2 rounded-full 
               shadow-lg cursor-pointer transition"
    onClick={onClick}
  >
    <ChevronLeft size={20} className="md:w-6 md:h-6" />
  </div>
);

const Gallerytwo = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // Mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section
      id="Gallery"
      className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-[95%] md:w-[90%] lg:w-[85%] relative">
        <Slider {...settings}>
          {images.map((img, i) => (
            <div key={i} className="px-2 md:px-3">
              <div
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-out transform hover:scale-105 hover:rotate-1" >
                <img
                  src={img}
                  alt="animal"
                  className="w-full h-[40vh] sm:h-[45vh] md:h-[60vh] lg:h-[75vh] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"/>
                <div
                  className="absolute inset-0 bg-black/30 opacity-0 
                             group-hover:opacity-100 transition-opacity 
                             duration-500 flex items-center justify-center"
                >
                  <p className="text-white text-base sm:text-lg md:text-xl font-semibold text-center">
                    Beautiful Creature 🐾
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallerytwo;
