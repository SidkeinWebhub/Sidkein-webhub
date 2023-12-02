import React from 'react'
import { Carousel } from "antd";
import './css/banner2.css'
import "normalize.css";

function Banner2() {
    
  return (
    <>
    {/* <img src="/assets/images/b6.png" width='100% '  height='2900px' alt="" /> */}
    <Carousel autoplay className="carousel">
      <div>
        <img src="/assets/images/bg1.png" height='580px' width='100%' alt="" />
      </div>
      <div>
        <img src="/assets/images/bg2.png" height='580px' width='100%' alt="" />
      </div>
      <div>
        <img src="/assets/images/bg3.png" height='580px' width='100%' alt="" />
      </div>
      <div>
        <img src="/assets/images/bg4.png" height='580px' width='100%' alt="" />
      </div>
      <div>
        <img src="/assets/images/bg5.png" height='580px' width='100%' alt="" />
      </div>
    </Carousel> 
    <main className='service-main'>
      <div className="content">
        <svg viewBox="0 0 1440 4096" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="backers">
            <path d="M-3317 96H387c276.142 0 500 223.858 500 500v1064.51c0 99.41-80.589 180-180 180H434.99c-99.412 0-180.001 80.58-180.001 180V4248" stroke="red" stroke-width="100" stroke-linecap="round"/>
            <path d="M4379 804H1387c-276.14 0-499.997 223.86-499.997 500v356.51c0 99.41-80.589 180-180 180H434.991c-99.411 0-180 80.59-180 180V4248" stroke="red" stroke-width="100" stroke-linecap="round"/>
            <path d="M4423 96H1387.02c-276.14 0-500.001 223.858-500.001 500.001V1660.51c0 99.41-80.589 180-180 180H434.995c-99.411 0-180 80.59-180 180l.001 2227.49" stroke="red" stroke-width="100" stroke-linecap="round"/>
          </g>
          <g className="fillers">
            <path d="M-3317 96H387c276.142 0 500 223.858 500 500v1064.51c0 99.41-80.589 180-180 180H434.99c-99.412 0-180.001 80.58-180.001 180V4248" stroke="red" stroke-width="100" stroke-linecap="round"/>
            <path d="M4379 804H1387c-276.14 0-499.997 223.86-499.997 500v356.51c0 99.41-80.589 180-180 180H434.991c-99.411 0-180 80.59-180 180V4248" stroke="red" stroke-width="100" stroke-linecap="round"/>
            <path d="M4423 96H1387.02c-276.14 0-500.001 223.858-500.001 500.001V1660.51c0 99.41-80.589 180-180 180H434.995c-99.411 0-180 80.59-180 180l.001 2227.49" stroke="red" stroke-width="100" stroke-linecap="round"/>
          </g>
        </svg>
        <section className='service-section mt-5 pt-5 pb-5'>
          <img  src="/assets/images/service1.svg" width='40%' alt="" className='mt-5 ms-5'/>
          <h4>Web Design and Development</h4>
          <p>Immerse your audience in an engaging online experience with our custom web design and development services. From concept to launch, we create websites that reflect your brand identity and captivate your visitors. <br />
          Transform your ideas into captivating online experiences with our custom web design and development services. From sleek aesthetics to seamless functionality, we bring your vision to life.
          </p>
        </section>
        <section className='service-section  pt-5'>
          <img src="/assets/images/service2.svg" width='40%' alt="" className='mt-5 ms-5'/>
          <h4>E-commerce Solutions</h4>
          <p>Boost your online sales with our tailored e-commerce solutions. We build secure and scalable platforms that enhance the shopping experience for your customers, driving conversion and loyalty. <br /> Elevate your e-commerce game with our comprehensive solutions. We design and develop secure, user-friendly online stores that drive sales and provide an exceptional shopping experience.</p>
        </section>
        <section className='service-section'>
          <img src="/assets/images/service3.svg" width='40%' alt="" className='mt-5 ms-5'/>
          <h4>Responsive Development</h4>
          <p>In the age of mobile browsing, responsiveness is paramount. We ensure that your website functions seamlessly across all devices, providing an optimal user experience on desktops, tablets, and smartphones. <br /> Our responsive designs are built on fluid grid systems, allowing content to dynamically adjust to different screen sizes. This ensures that your website layout remains visually pleasing and user-friendly across devices.
          </p>
        </section>
        <section className='service-section pt-5'>
          <img src="/assets/images/service4.svg" width='40%' alt="" className='pt-5 mt-5 me-5'/>
          <h4>Website Maintenance and Support</h4>
          <p>Your website is a dynamic asset that requires regular attention to stay secure, functional, and aligned with the evolving digital landscape. Sidkein WebHub offers comprehensive Website Maintenance and Support services to ensure that your online presence remains not only effective but also optimized for peak performance. <br /> Keep your website secure, up-to-date, and performing optimally with our maintenance and support services. From regular updates to technical support, we've got your website covered.</p>
        </section>
        <section className='service-section'>
          <img src="/assets/images/service5.svg" width='50%' alt="" className='pt-5 mt-5 me-5'/>
          <h4>Content Management Systems (CMS)</h4>
          <p>Take control of your content with an easy-to-use Content Management System. Whether it's updating text, images, or adding new pages, our CMS solutions empower you to manage your website effortlessly. <br /> Take charge of your website content effortlessly with our CMS solutions. We provide intuitive platforms that allow you to manage and update your content with ease, ensuring your website stays dynamic and relevant.</p>
        </section>
      </div>
    </main>
    </>
  )
}

export default Banner2
