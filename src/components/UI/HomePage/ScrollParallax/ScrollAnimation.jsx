"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./scrollAnimation.module.css"
import Image from 'next/image';

const ScrollAnimation = () => {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const titleRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "1500 top",
                    scrub: 1,
                    pin: true,
                },
            }
        );
        return () => {
            {/* A return function for killing the animation on component unmount */ }
            pin.kill();
        };
    }, []);

    return (
        <section className={styles.scrollSectionOuter}>
            {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

            {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
            <div ref={triggerRef}>
               <div className={styles.textContainer}>
               <h1 className={styles.title} ref={titleRef}>Our Service</h1>
                <p className={styles.description} >At Precision Cuts Barber Lounge, we take pride in offering a comprehensive range of grooming services tailored to meet your unique needs and preferences. With our skilled team of barbers and stylists, we are committed to providing top-notch services in a welcoming and comfortable environment. Whether you&apos;re looking for a classic haircut, a precision beard trim, or a relaxing hot towel shave, we&apos;ve got you covered</p>
               </div>

                <div ref={sectionRef} className={styles.scrollSectionInner}>
                    <div className={styles.scrollSection}>
                        <div className={styles.cardSection}>
                            <Image className={styles.image} src="/Images/10.jpg" alt='Images' width={300} height={400} />
                        </div>
                    </div>
                    <div className={styles.scrollSection}>
                        <div className={styles.cardSection}>
                            <Image className={styles.image} src="/Images/11.jpg" alt='Images' width={300} height={400} />
                        </div>
                    </div>
                    <div className={styles.scrollSection}>
                        <div className={styles.cardSection}>
                            <Image className={styles.image} src="/Images/3.jpg" alt='Images' width={300} height={400} />
                        </div>
                    </div>
                    <div className={styles.scrollSection}>
                        <div className={styles.cardSection}>
                            <Image className={styles.image} src="/Images/1.jpg" alt='Images' width={300} height={400} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScrollAnimation;