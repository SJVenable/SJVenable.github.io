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

  return (
    <div className={styles.container} >
        <div className={styles.textbox}>
            <h1>Mr Samuel J Venable</h1>
        </div>
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