import React from 'react'
import { useEffect } from 'react';
import './css/services.css'
import  Swiper  from 'swiper';
import {  EffectCoverflow } from 'swiper/modules';

function Services() {
    const scripted = async () => {
        new Swiper(".swiper", {
          modules: [ EffectCoverflow],
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: true
            },
            loop: true,
            // pagination: true,
            pagination: {
              el:  ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              640: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 1
              },
              1024: {
                slidesPerView: 2
              },
              1560: {
                slidesPerView: 3
              }
            }
          });
    }

    useEffect(() => {
        scripted();
    },[]);

  return (
    <main>
  <div>
    <span>discover</span>
    <h1>Our Web Solutions</h1>
    <hr />
    <p>At Sidkein WebHub, we offer a diverse range of web development services tailored to meet the unique needs of businesses and individuals.</p>
    <a href="/service">Explore Our Services</a>
  </div>
  <div className="swiper">
    <div className="swiper-wrapper">
      <div className="swiper-slide swiper-slide--one swiper-slide-active">
        <div className='swiper-text'>
          <h2>Responsive Web Design</h2>
          <p>
          Ensure a seamless user experience across devices with our responsive web design services. Your website will look and function flawlessly on desktops, tablets, and smartphones.
          </p>
          <a href="/service" >explore</a>
        </div>
        
      </div>
      <div className="swiper-slide swiper-slide--two">
        <div className='swiper-text'>
            <h2>Website Maintenance and Support</h2>
            <p>
            Keep your website running smoothly with our maintenance and support services. We offer regular updates, security checks, and prompt assistance to address any issues.
            </p>
            <a href="/service" >explore</a>
          </div>

      </div>

      <div className="swiper-slide swiper-slide--three">

        <div className='swiper-text'>
          <h2>Content Management Systems (CMS)</h2>
          <p>
          Take control of your website's content with our CMS solutions. We provide user-friendly systems that allow you to manage and update your content efficiently, keeping your site fresh and relevant.
          </p>
          <a href="/service">explore</a>
        </div>
      </div>
      <div className="swiper-slide swiper-slide--four swiper-slide-active">
      <div className='swiper-text'>
          <h2>Web Design and Development</h2>
          <p>Transform your online presence with visually stunning and highly functional websites. Our expert team crafts custom designs and ensures seamless development for a user-centric experience.</p>
          <a href="/service" >explore</a>
        </div>
        
      </div>

      <div className="swiper-slide swiper-slide--five">
        <div className='swiper-text'>
          <h2>E-commerce Solutions</h2>
          <p>
          Elevate your online store with our e-commerce expertise. From user-friendly interfaces to secure payment gateways, we create robust and scalable e-commerce platforms that drive sales.
          </p>
          <a href="/service">explore</a>
        </div>
      </div>
      

      
    </div>
   
    <div className="swiper-pagination"></div>
  </div>
  </main>
  
  )
}

export default Services

