import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/autoplay';

// import required modules
// @ts-ignore
import { Navigation, Autoplay } from "swiper";
import { TV_SHOW_LIST } from "../utils/Constant";

export default function Slider() {
    return (
        <>
            <Swiper
                modules={[Autoplay]}
                className="mySwiper"
                autoplay={true}
            >

                {TV_SHOW_LIST.map((slider, idx) =><SwiperSlide key={idx}>
                    <img
                        className="object-fill w-full h-[30rem] max-[768px]:h-[24rem]"
                        src={slider}
                        alt={`image slide ${idx+1}`}
                    />
                </SwiperSlide>)}
                {/* <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide> */}
            </Swiper>
        </>
    );
}