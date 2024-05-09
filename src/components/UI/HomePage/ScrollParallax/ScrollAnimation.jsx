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

        // <div className="scrollSectionOuter relative bg-black mb-10" ref={triggerRef}>
        //     <div className="textContainer top-[10%] left-[10%] md:w-2/5 md:text-left md:top-5 md:left-0">
        //         <h1 className="title text-white text-2xl md:text-3xl font-bold uppercase" ref={titleRef}>Our Service</h1>
        //         <p className="description text-white text-3xl md:text-4xl font-semibold uppercase leading-tight" ref={descriptionRef}>A Range of premium Barber Services</p>
        //     </div>

        //     <div className="serviceContainer bottom-[10%] right-[6%] md:w-2/5 md:text-right md:bottom-[5%] md:right-[0%] md:bg-beige md:p-10">
        //         <h1 className="serviceTitle text-black text-2xl md:text-3xl font-bold uppercase md:text-left md:mb-5">A Range of premium Barber Services</h1>
        //         <p className="serviceDescription text-black text-sm md:text-base font-semibold text-justify">Detailed descriptions of all the services you offer, such as haircuts, beard trims, hot towel shaves Pricing for each service. Option to book appointments directly from the services page</p>
        //     </div>

        //     <div className="scrollSectionInner h-screen md:h-auto w-full md:w-[200vw]" ref={sectionRef}>
        //         <div className="scrollSection h-screen w-4/5 flex justify-center items-center">
        //             <div className="cardSection relative">
        //                 <h1 className="imageTitle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold uppercase z-10">Styles</h1>
        //                 <Image className="image w-full h-3/4 object-cover filter brightness-80" src="/Images/10.jpg" alt='Images' width={300} height={400} />
        //             </div>
        //         </div>
        //         <div className="scrollSection h-screen w-4/5 flex justify-center items-center">
        //             <div className="cardSection relative">
        //                 <h1 className="imageTitle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold uppercase z-10">Barber Spa</h1>
        //                 <Image className="image w-full h-[70vh] object-cover filter brightness-75" src="/Images/11.jpg" alt='Images' width={300} height={400} />
        //             </div>
        //         </div>
        //         <div className="scrollSection h-screen w-4/5 flex justify-center items-center">
        //             <div className="cardSection relative">
        //                 <h1 className="imageTitle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold uppercase z-10">Shaves</h1>
        //                 <Image className="image w-full h-3/4 object-cover filter brightness-80" src="/Images/3.jpg" alt='Images' width={300} height={400} />
        //             </div>
        //         </div>
        //         <div className="scrollSection h-screen w-4/5 flex justify-center items-center">
        //             <div className="cardSection relative">
        //                 <h1 className="imageTitle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold uppercase z-10">Hair Cuts</h1>
        //                 <Image className="image w-full h-3/4 object-cover filter brightness-80" src="/Images/11.jpg" alt='Images' width={300} height={400} />
        //             </div>
        //         </div>
        //     </div>
        // </div>

    );
};

export default ScrollAnimation;