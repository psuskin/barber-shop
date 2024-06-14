'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './style.module.css'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';
import AboutUs from '../AboutUs/AboutUs';

const images = [
    "haircut1.jpg",
    "haircut2.jpg",
    "haircut3.jpg",
    "haircut4.jpg",
    "works.jpg",
    "haircut4.jpg",
    "fusspflege2.jpg",
    "service2.jpg",
    "service1.jpg",
    "room6.jpg",
    "kosmetik.jpg",
    "room1.jpg",
]

const Gallery = () => {

    const gallery = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start']
    })
    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

    useEffect(() => {
        const lenis = new Lenis()

        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight })
        }

        window.addEventListener("resize", resize)
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])

    return (
        <main className={styles.main}>
            <div className={styles.spacer}>
                <AboutUs />
            </div>
            <div ref={gallery} className={styles.gallery}>
                <Column images={[images[0], images[1], images[2]]} y={y} />
                <Column images={[images[3], images[4], images[5]]} y={y2} />
                <Column images={[images[6], images[7], images[8]]} y={y3} />
                <Column images={[images[9], images[10], images[11]]} y={y4} />
            </div>
            {/* <div className={styles.spacer}>
            </div> */}
        </main>
    )
}

const Column = ({ images, y }) => {
    return (
        <motion.div
            className={styles.column}
            style={{ y }}
        >
            {
                images.map((src, i) => {
                    return <div key={i} className={styles.imageContainer}>
                        <Image
                            src={`/Images/${src}`}
                            alt='image'
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading='eager'
                        />
                    </div>
                })
            }
        </motion.div>
    )
}

export default Gallery;