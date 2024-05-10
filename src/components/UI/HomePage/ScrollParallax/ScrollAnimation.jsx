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
    const descriptionRef = useRef(null);


    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            [titleRef.current, descriptionRef.current],
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top 50%',
                    end: 'bottom 60%',
                    scrub: 1
                },
            }
        );

        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: '20vw',
            },
            {
                translateX: '-170vw',
                ease: 'none',
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top top',
                    end: '1500 top',
                    scrub: 1,
                    pin: true,
                },
            }
        );

        return () => {
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
                        <p className={styles.description} ref={descriptionRef}>A Range of premium Barber Services</p>
                    </div>

                    <div className={styles.serviceContainer}>
                        <h1 className={styles.serviceTitle}>A Range of premium Barber Services</h1>
                        <p className={styles.serviceDescription}>Detailed descriptions of all the services you offer, such as haircuts, beard trims, hot towel shaves Pricing for each service.
                            Option to book appointments directly from the services page</p>
                    </div>

                    <div ref={sectionRef} className={styles.scrollSectionInner}>
                        <div className={styles.scrollSection}>
                            <div className={styles.cardSection}>
                                <h1 className={styles.imageTitle}>Styles</h1>
                                <Image className={styles.image} src="/Images/10.jpg" alt='Images' width={300} height={400} />
                            </div>
                        </div>
                        <div className={styles.scrollSection}>
                            <div className={styles.cardSection}>
                                <h1 className={styles.imageTitle}>Barber Spa</h1>
                                <Image className={styles.image} src="/Images/11.jpg" alt='Images' width={300} height={400} />
                            </div>
                        </div>
                        <div className={styles.scrollSection}>
                            <div className={styles.cardSection}>
                                <h1 className={styles.imageTitle}>Shaves</h1>
                                <Image className={styles.image} src="/Images/3.jpg" alt='Images' width={300} height={400} />
                            </div>
                        </div>
                        <div className={styles.scrollSection}>
                            <div className={styles.cardSection}>
                                <h1 className={styles.imageTitle}>Hair Cuts</h1>
                                <Image className={styles.image} src="/Images/11.jpg" alt='Images' width={300} height={400} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default ScrollAnimation;