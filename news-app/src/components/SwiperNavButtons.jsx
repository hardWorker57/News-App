import React from "react";
import { useSwiper } from "swiper/react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="swiper_nav_btns">
            <button onClick={() => swiper.slidePrev()}><FaChevronLeft /></button>
            <button onClick={() => swiper.slideNext()}><FaChevronRight /></button>
        </div>
    );
};

export default SwiperNavButtons;
