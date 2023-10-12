import React from 'react';
import '../../App.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade} from 'swiper';
import Footer from '../Footer';
import './Testimonials.css'
import user1 from '../../images/karl.jpg'
import user2 from '../../images/outmane.jpg'
import user3 from '../../images/nicolas.png'
import user4 from '../../images/pol.jpg'
import user5 from '../../images/marcel.jpg'
import user6 from '../../images/niffi.jpg'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import translate from './../../Translation/Team.json'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

const Testimonials = () => {
  return (
      <div className='testimonials' id='testimonials'>
          <div className='container'>
              <h2>DynaFood Team</h2>
              <span className='line'></span>
              <div className='content'>
                  <div className='card'>
                      <img src={user2} alt='user1'class="user1"/>
                      <p><span>Outmane</span></p>
                      <p>{translate["Outmane"][localStorage.getItem("lang")]}</p>
                      <p>{translate["FrontEnd"][localStorage.getItem("lang")]}</p>
                  </div>
                  <div className='card'>
                      <img src={user1} alt='user1' class="user1"/>
                      <p><span>Karl</span></p>
                      <p>{translate["Karl"][localStorage.getItem("lang")]}</p>
                      <p>{translate["BackEndLead"][localStorage.getItem("lang")]}</p>
                  </div>
                  <div className='card'>
                      <img src={user5} alt='user1'class="user1"/>
                      <p><span>Marcel</span></p>
                      <p>{translate["Marcel"][localStorage.getItem("lang")]}</p>
                      <p>{translate["BackEnd"][localStorage.getItem("lang")]}</p>
                  </div>
                </div>
                <div className='content'>
                  <div className='card'>
                      <img src={user6} alt='user1' class="user1"/>
                      <p><span>Niffi</span></p>
                      <p>{translate["Niffi"][localStorage.getItem("lang")]}</p>
                      <p>{translate["FrontEndLead"][localStorage.getItem("lang")]}</p>
                  </div>
                  <div className='card'>
                      <img src={user4} alt='user1' class="user1"/>
                      <p><span>Pol</span></p>
                      <p>{translate["Pol"][localStorage.getItem("lang")]}</p>
                      <p>{translate["BackEnd"][localStorage.getItem("lang")]}</p>
                  </div>
                  <div className='card'>
                      <img src={user3} alt='user1' class="user1"/>
                      <p><span>Jurdyc</span></p>
                      <p>{translate["Jurdyc"][localStorage.getItem("lang")]}</p>
                      <p>{translate["FrontProd"][localStorage.getItem("lang")]}</p>
                  </div>
              </div>
          </div>
      </div>
  )
}


export default function Team() {
  return (
    <>
      <Testimonials />
      <Footer />
    </>
  );
}