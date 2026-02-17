import React from 'react';
import styles from './heroStyle.module.css';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      {/* <h1 className="heading">Hero</h1> */}

      <div className={styles.heroBody}>
        <div className={styles.textWrapper}>
          <h1 id="hero" className="heading blue">Hey, It's Thu!</h1>
          <p>
            Aspiring software engineer.
            <br></br>
            Ivy-league educated.
          </p>
        </div>
        <div className={styles.image}>fjoiesfeji</div>
      </div>
    </div>
  );
};

export default Hero;
