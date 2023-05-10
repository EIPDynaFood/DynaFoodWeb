import React from 'react';
import '../../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade} from 'swiper';
import Footer from '../Footer';
import './Testimonials.css'
import user1 from '../../images/newmeow.png'
import user2 from '../../images/newmeow1.png'
import user3 from '../../images/newmeow2.png'
import user4 from '../../images/newmeow3.png'
import user5 from '../../images/newmeow4.png'
import user6 from '../../images/newmeow5.png'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

const Testimonials = () => {
  return (
      <div className='testimonials' id='testimonials'>
          <div className='container'>
              <h2>DynaFood Team</h2>
              <span className='line'></span>
              <div className='content'>
                  <div className='card'>
                      <img src={user2} alt='user1'/>
                      <p><span>Outmane</span></p>
                      <p>I am a 4th Year Student of Epitech Berlin & Ambassador in South Korea, Sky League Chung-ang University. I am currently doing front-end and studying CS & electrical engineering</p>
                      <p>FrontEnd</p>
                  </div>
                  <div className='card'>
                      <img src={user1} alt='user1'/>
                      <p><span>Karl</span></p>
                      <p>I am a 4th Year Student of Epitech Berlin and did my exchange year together with Niffi in Jönköping, Sweden. I am the Backend-Lead of the Team, database-manager and the go to supporter for backend.</p>
                      <p>BackEnd Lead</p>
                  </div>
                  <div className='card'>
                      <img src={user5} alt='user1'/>
                      <p><span>Marcel</span></p>
                      <p>I am a Tek4 student at Epitech Berlin and I am currently doing my year abroad in the UK. At DynaFood I am mostly working in the backend.</p>
                      <p>BackEnd</p>
                  </div>
                </div>
                <div className='content'>
                  <div className='card'>
                      <img src={user6} alt='user1'/>
                      <p><span>Niffi</span></p>
                      <p>I am a Tek4 Student of Epitech Berlin and did my exchange in Jönköping in Sweden. I am the Frontend-Lead of DynaFood and take care about the meetings and other organizational things.</p>
                      <p>FrontEnd Lead</p>
                  </div>
                  <div className='card'>
                      <img src={user4} alt='user1'/>
                      <p><span>Poul</span></p>
                      <p>I am a Tek4 student at Epitech Paris, currently in Berlin for my year abroad. I am working on the backend part of the project</p>
                      <p>BackEnd</p>
                  </div>
                  <div className='card'>
                      <img src={user3} alt='user1'/>
                      <p><span>Jurdyc</span></p>
                      <p>I am a Tek 4 Student of Epitech Berlin. My exchange year was in Daegu, South Korea. I am focusing on front-end, styling and testing for the front-end.</p>
                      <p>FrontEnd & Project Owner</p>
                  </div>
              </div>
          </div>
      </div>
  )
}

/*const data = [
  {
    id: 1,
    img: '../../../public/logo_frame.png',
    username: 'Outmane',
    story: 'I am a 4th Year Student of Epitech Berlin & Ambassador in South Korea, Sky League Chung-ang University. I am currently doing front-end and studying CS & electrical engineering'
  },
  {
    id: 2,
    img: '../../../public/logo_frame.png',
    username: 'Karl',
    story: 'I am a 4th Year Student of Epitech Berlin and did my exchange year together with Niffi in Jönköping, Sweden. I am the Backend-Lead of the Team, database-manager and the go to supporter for backend.'
  },
  {
    id: 3,
    img: '../../../public/logo_frame.png',
    username: 'Marcel',
    story: 'I am a Tek4 student at Epitech Berlin and I am currently doing my year abroad in the UK. At DynaFood I am mostly working in the backend.'
  },
  {
    id: 4,
    img: '../../../public/logo_frame.png',
    username: 'Niffi',
    story: 'I am a Tek4 Student of Epitech Berlin and did my exchange in Jönköping in Sweden. I am the Frontend-Lead of DynaFood and take care about the meetings and other organizational things.'
  },
  {
    id: 5,
    img: '../../../public/logo_frame.png',
    username: 'Poul',
    story: 'I am a Tek4 student at Epitech Paris, currently in Berlin for my year abroad. I am working on the backend part of the project'
  },
  {
    id: 6,
    img: '../../../public/logo_frame.png',
    username: 'Niklas',
    story: 'I am a Tek 4 Student of Epitech Berlin. My exchange year was in Daegu, South Korea. I am focusing on front-end, styling and testing for the front-end.'
  },
];*/

export default function Team() {
  return (
    <>
      <Testimonials />
      <Footer />
    </>
  );
}


/*
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

              <h5>{user.username}</h5>
              <p className="user-story"> "<i>{user.story}</i>" </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>*/
///// makes me crash, dunno why ??
/*<div className="user-image">
                <img src={user.img} alt="" className="user-photo"/>
              </div>*/
