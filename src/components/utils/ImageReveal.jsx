import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from './ImageReveal.module.css';

const ImageReveal = ({ src, alt, width, height }) => {
    const overlayControls = useAnimation();
    const imageControls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView) {
            overlayControls.start({
                width: 0,
                transition: { duration: 1.4, ease: "easeInOut" },
            });
            imageControls.start({
                scale: 1,
                transition: { duration: 1.4, ease: "easeInOut" },
            });
        }
    }, [overlayControls, imageControls, inView]);

    return (
        <div className={styles.imgContainer} ref={ref}>
            <motion.div
                className={styles.imgOverlay}
                initial={{ width: '100%' }}
                animate={overlayControls}
            />
            <motion.div
                className={styles.imgWrapper}
                initial={{ scale: 1.4 }}
                animate={imageControls}
            >
                <Image className={styles.img} src={src} alt={alt} height={height} width={width} objectFit="cover" />
            </motion.div>
        </div>
    );
};

export default ImageReveal;
