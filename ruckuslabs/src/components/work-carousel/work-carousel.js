import * as React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './work-carousel.css';

export default function WorkCarousel(props) {

  return (
    <Swiper
      className={props.className}
      slidesPerView={props.slidesPerView || 'auto'}
      spaceBetween={25}
      centeredSlides={props.centeredSlide || true}
    >
      {props.items.map((item) => (
        <SwiperSlide>
          {item.link ?
            <a href={item.link}>
              <figure className="frame"
                style={{
                  backgroundImage: `url(${item.hero})`
                }}>
              </figure>
              {item.tags && item.tags.map((tag) => (
                <h4 className="tag">{tag}</h4>
              ))}
              <h3 className="external-link">{item.title}</h3>
              <p>{item.description}</p>
            </a>
            :
            <>
              <figure className="frame"
                style={{
                  backgroundImage: `url(${item.hero})`
                }}>
              </figure>
              {item.tags && item.tags.map((tag) => (
                <h4 className="tag">{tag}</h4>
              ))}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </>
          }
        </SwiperSlide>
      ))
      }
    </Swiper >
  );
};