"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from "./heroSection.module.css"
import { useScroll, useTransform, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
const HeroSection = () => {
    const titleRef = useRef(null);
    const videoRef = useRef(null);
    const container = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);

    // const { scrollYProgress } = useScroll();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const x = useTransform(scrollYProgress, [0, 1], [0, -700]);


    const togglePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMuteUnmute = () => {
        const video = videoRef.current;
        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

    useEffect(() => {
        const lenis = new Lenis()
        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])


    return (
        <div className={styles.container} ref={container}>
            <div className={styles.videoContainer}>
                <video
                    ref={videoRef}
                    className={styles.video}
                    autoPlay
                    loop
                    muted
                >
                    <source src="/Video/barberShop1.mp4" type="video/mp4" />
                </video>
                <h1 className={styles.welcomeTitle}>Welcome</h1>
                <motion.h1 style={{ x }} className={styles.title}>Your Hairdresser</motion.h1>

            </div>
            <div className={styles.blur}></div>
            <button
                onClick={toggleMuteUnmute}
                className={styles.muteBtn}
            >
                {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="9" width="7" height="6" rx="1"></rect>
                        <path d="M14 9l6 6m0-6l-6 6"></path>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="9" width="7" height="6" rx="1"></rect>
                        <path d="M14 9v6"></path>
                        <path d="M17 9.5v5"></path>
                        <path d="M21 10v4"></path>
                    </svg>
                )}
            </button>

            <button
                onClick={togglePlayPause}
                className={styles.playPauseBtn}
            >
                {isPlaying ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        className="w-5 h-5 text-inherit"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        className="w-5 h-5 text-inherit"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default HeroSection;
