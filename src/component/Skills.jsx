import React from 'react'
import { Carousel } from 'react-carousel3';
import './css/skills.css'

const style = {
  width: 0,
  height: 196,
  background: 'transparent'
};

function Skills() {
  
  return (
    <div
    style={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      background: 'transparent'
    }}
    className="skills"
  >
    <Carousel height={450} width={2080} yOrigin={92} yRadius={258} autoPlay={true} className='skill-carousal' >
      <div key={1} style={style} className='skill-section'>
        <img alt="" src="/assets/images/skill1.png" height={'100%'} className='skill-img'/>
      </div>
      <div key={2} style={style} className='skill-section'>
        <img alt="" src="/assets/images/skill2.png"  height={'100%'} className='skill-img'/>
      </div>
      <div key={3} style={style} className='skill-section'>
        <img alt="" src="/assets/images/skill3.png" height={'100%'} className='skill-img'/>
      </div>
      <div key={4} style={style} className='skill-section'>
        <img alt="" src="/assets/images/skill4.png" height={'100%'} className='skill-img'/>
      </div>
      <div key={5} style={style} className='skill-section'>
        <img alt="" src="/assets/images/skill5.png" height={'100%'} className='skill-img'/>
      </div>
      <div key={6} style={style} className='skill-section'>
        <img alt="" src="/assets/images/skill6.png" height={'100%'} className='skill-img'/>
      </div>
      <div key={7} style={style} className='skill-section'>
        <img alt="" src="/assets/images/skill7.png" height={'100%'} className='skill-img'/>
      </div>
      <div key={8} style={style} className='skill-section'>
        <img alt="" src="/assets/images/skill8.png" height={'100%'} className='skill-img'/>
      </div>
      <div key={9} style={style} className='skill-section'>
        <img alt="" src="/assets/images/skill9.png" height={'100%'} className='skill-img'/>
      </div>
    </Carousel>
  </div>
  )
}

export default Skills
