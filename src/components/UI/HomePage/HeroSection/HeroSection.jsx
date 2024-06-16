"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./heroSection.module.css";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";

const HeroSection = () => {
    const videoRef = useRef(null);
    const containerRef = useRef();
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);

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
        const lenis = new Lenis();
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.videoContainer} ref={containerRef}>
                <video
                    ref={videoRef}
                    className={styles.video}
                    autoPlay
                    loop
                    muted
                    preload="metadata"
                    poster="/Images/poster.jpg"
                >
                    <source src="/Video/video-header.webm" type="video/webm" />
                    <source src="/Video/video-header.mp4" type="video/mp4" />
                </video>
                <h2 className={styles.welcomeTitle}>Willkommen im Hannis Friseursalon</h2>
                <h1 className={styles.title}>Exzellenz in Schönheit</h1>
            </div>
            <div className={styles.blur}></div>
            <button onClick={toggleMuteUnmute} className={styles.muteBtn} aria-label="Toggle Mute">
                {isMuted ? (
                    <Image src="/mute.svg" alt="Mute" width="20" height="20" />
                ) : (
                    <Image src="/unmute.svg" alt="Unmute" width="20" height="20" />
                )}
            </button>


            <button onClick={togglePlayPause} className={styles.playPauseBtn}>
                {isPlaying ? (
                    <Image src="/pause.svg" alt="Mute" width="20" height="20" />
                ) : (
                    <Image src="/play.svg" alt="Mute" width="20" height="20" />
                )}
            </button>
        </div>
    );
};

export default HeroSection;