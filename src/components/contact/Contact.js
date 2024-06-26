import React from 'react';
import './contact.css';

const Contact = () => {
  const scrollToTop = () => {
    const scrollDuration = 1000; 
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <p>Copyright  &copy; 2024 Piyush Razdan</p>
        <div className="back-to-top" onClick={scrollToTop}>
          <img src={`${process.env.PUBLIC_URL}/up.png`} alt="Back to top" />
        </div>
        <div className="social-icons">
          <a href="https://github.com/piyushraz" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/github.png`} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/piyushrazdan" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" />
          </a>
          <a href="https://devpost.com/piyushraz" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/devpost.png`} alt="Devpost" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
