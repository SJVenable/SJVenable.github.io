import React, { useEffect, useState } from 'react';
import styles from './SlideshowTitle.module.css';

function SlideshowTitle() {

  const pictures = ['1','2','3'];

  const [source, setSource] = useState('1');

  useEffect(() => {
    const timer = setInterval(() => {
      var index = (pictures.indexOf(source)+1) % pictures.length;
      setSource(pictures[index]);
    }, 3000);
    return () => clearInterval(timer);
  }, [source]);

  useEffect(() => {
    const header = document.getElementById('header');
  }, [])

  return (
    <div className={styles.container} >
      <header className={styles.textbox}>
        <h1 className={styles.title} >Samuel J Venable</h1>
        <h2 className={styles.subheading} >Java Developer</h2>
      </header>
      <div className={styles.slides}>
        {pictures.map((pic, index) => (
          <img 
            key={index}
            className={`slide ${index === source ? 'active' : ''}`}
            src={'../images/pic' + source + '.jpg'}
            style={{opacity: source === pic ? 1 : 0 }}>
          </img>
        ))
        }
      </div>
    </div>
  )
}

export default SlideshowTitle