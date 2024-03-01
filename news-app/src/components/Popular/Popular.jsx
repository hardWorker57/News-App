import React from "react";
import s from "./Popular.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation} from "swiper/modules";
import SwiperNavButtons from "../SwiperNavButtons";
import { MdAddBox } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";


import "swiper/scss";
import "swiper/scss/navigation";
import { Link } from "react-router-dom";

function Popular({ data }) {
  return (
    <div className={s.Popular}>
      <Swiper modules={[Navigation, Autoplay]}
          slidesPerView={4}
          // navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        >
      <div className='section_header'>
        <div className="section_title">Popular Posts </div>
          <SwiperNavButtons/>
      </div>
      
      <div className={s.popular_posts}>
          <div className="wrap">
            {data.map((data, i) => (
              <SwiperSlide>
                <Link to={`article/${data ? data.title : ''}`} key={i}>
                  <div className={s.article} >
                    <img src={data.urlToImage} alt="No image" />
                    <h5>{data.title}</h5>
                    <p className={s.desc}>{data.description}</p>
                    <div className="article_author">
                      <div className="author_img"><IoMdPerson /></div>
                      <div className="author_data">
                        <h5>{data.author ? data.author : data.source.name}</h5>
                      </div>
                      <MdAddBox />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </div>
      </div>
      </Swiper>
    </div>
  );
}

export default Popular;
