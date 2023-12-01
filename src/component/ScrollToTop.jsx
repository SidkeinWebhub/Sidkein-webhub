import React, { useState, useEffect } from 'react';
import { BackTop } from 'antd';
import './css/ScrollToTop.css'
import { UpOutlined } from '@ant-design/icons';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <BackTop visibilityHeight={400} duration={500}>
      <div className={`scroll-to-top ${visible ? 'show' : 'hide'}`}>
        <UpOutlined />
      </div>
    </BackTop>
  )
}

export default ScrollToTop
