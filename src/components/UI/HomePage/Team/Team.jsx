import React from 'react';
import styles from "./team.module.css"
import Image from 'next/image';

const Team = () => {
  return (
    <div className={styles.teamContainer}>
      <div className={styles.textContainer}>
        <h3>Meet Our Skilled Barbers</h3>
        <h1>Quality Services at Unbeatable Prices</h1>
      </div>
      {/* <div className={styles.imageContainer}>
        <div className={styles.barberCard}>
          <div className={styles.barberImage}>
            <Image src="/Images/barber.jpg" alt="Barber 1" width={400} height={400} />
          </div>
          <div className={styles.barberInfo}>
            <h2 className={styles.barberName}>John Doe</h2>
            <p className={styles.barberDescription}>John is a master barber with over 10 years of experience. He specializes in classic cuts and modern styles.</p>
          </div>
        </div>
        <div className={styles.barberCard}>
          <div className={styles.barberImage}>
            <Image src="/Images/barber.jpg" alt="Barber 2" width={400} height={400} />
          </div>
          <div className={styles.barberInfo}>
            <h2 className={styles.barberName}>Jane Smith</h2>
            <p className={styles.barberDescription}>Jane is a skilled barber who loves creating unique looks for her clients. Shes passionate about her work and always stays updated with the latest trends.</p>
          </div>
        </div>
        <div className={styles.barberCard}>
          <div className={styles.barberImage}>
            <Image src="/Images/barber.jpg" alt="Barber 2" width={400} height={400} />
          </div>
          <div className={styles.barberInfo}>
            <h2 className={styles.barberName}>Jane Smith</h2>
            <p className={styles.barberDescription}>Jane is a skilled barber who loves creating unique looks for her clients. Shes passionate about her work and always stays updated with the latest trends.</p>
          </div>
        </div>
      </div> */}
      {/* Add more barber cards as needed */}
    </div>
  );
};

export default Team;
