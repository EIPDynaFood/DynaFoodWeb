import React from 'react';
import '../../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade} from 'swiper';
import Footer from '../Footer';

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

const data = [
  {
    id: 1,
    img: '../../../public/logo_frame.png',
    username: 'Outmane',
    story: 'Frontend, Epitech Berlin'
  },
  {
    id: 2,
    img: '../../../public/logo_frame.png',
    username: 'Karl',
    story: 'Backend, Epitech Berlin'
  },
  {
    id: 3,
    img: '../../../public/logo_frame.png',
    username: 'Marcel',
    story: 'Backend, Epitech Berlin'
  },
  {
    id: 4,
    img: '../../../public/logo_frame.png',
    username: 'Niffi',
    story: 'Frontend, Epitech Berlin'
  },
  {
    id: 5,
    img: '../../../public/logo_frame.png',
    username: 'Paul',
    story: 'Something, Epitech Berlin'
  },
  {
    id: 6,
    img: '../../../public/logo_frame.png',
    username: 'Niklas',
    story: 'Alert button, Epitech Berlin'
  },
];

export default function Team() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        { data.map( user => (
          <SwiperSlide key={user.id} className="slide">
            <div className="slide-content">
              <div className="user-image">
                <img src={user.img} alt="" className="user-photo"/>
              </div>
              <h5>{user.username}</h5>
              <p className="user-story"> "<i>{user.story}</i>" </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Footer />
    </>
  );
}