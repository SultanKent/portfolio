import React, { useEffect, useState } from 'react';
import Menu from '../Menu/Menu';
import './Header.css';

const Header = () => {
  const linkedinUrl = 'https://kz.linkedin.com/in/sultan-kuanishev-864373282';
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Frontender", "Backender", "Freelancer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <div className="Header">
      <div className="Header_main">
        <Menu />
        <div className="Header_title">
          <h1>Kuanishev Sultan<br />I am a <span>{text}</span></h1>
          <p>Hi, I'm Sultan. A passionate Full Stack Developer based in Kazakhstan</p>
          <button className='btn header_btn'>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
            Connect me
          </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;