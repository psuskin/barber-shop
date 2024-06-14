'use client'

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";


const ServiceAnimation = () => {

    const imageRef = useRef();
    const { scrollYProgress } = useScroll({ target: imageRef });
    const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

    

    return (

        <motion.div className="absolute bottom-4 -left-8 md:-left-28 w-40 h-40 md:w-80 md:h-72" style={{ y }}>
            <Image
                ref={imageRef}
                src="/Images/works.jpg"
                alt="Image 2"
                layout="responsive"
                width={200}
                height={200}
                objectFit="cover"
                className="rounded-lg shadow-xl hidden md:block"
            />
        </motion.div>

    );
};

export default ServiceAnimation;