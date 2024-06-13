import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { useRef } from 'react';

const images = [
    { src: '/Images/service1.jpg', alt: 'Image 1', link: 'https://www.tiktok.com/@hannishamburg?_t=8m7cTJlc6ML&_r=1' },
    { src: '/Images/fusspflege1.jpg', alt: 'Image 2', link: 'https://www.tiktok.com/@hannishamburg?_t=8m7cTJlc6ML&_r=1' },
    { src: '/Images/haircut1.jpg', alt: 'Image 3', link: 'https://www.tiktok.com/@hannishamburg?_t=8m7cTJlc6ML&_r=1' },
    { src: '/Images/asthetische.jpg', alt: 'Image 4', link: 'https://www.tiktok.com/@hannishamburg?_t=8m7cTJlc6ML&_r=1' },
    { src: '/Images/room1.jpg', alt: 'Image 5', link: 'https://www.tiktok.com/@hannishamburg?_t=8m7cTJlc6ML&_r=1' },
    { src: '/Images/room3.jpg', alt: 'Image 6', link: 'https://www.tiktok.com/@hannishamburg?_t=8m7cTJlc6ML&_r=1' },
];

const FollowUsSection = () => {

    const containerRef = useRef();
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);
    const ys = useTransform(scrollYProgress, [0, 1], [-10, 10]);


    return (
        <section className="py-12 bg-gray-100 h-[90vh]">
            <div className='relative' ref={containerRef}>
                <div className='bg-red-200 absolute h-60 lg:h-80 w-full sm:w-2/4 mx-auto top-0 lg:-top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='relative w-full h-full'>
                        <Image
                            src="/Images/feature.jpg"
                            layout="fill"
                            objectFit="cover"
                            alt="Feature Image"
                        />
                        <div className='absolute inset-y-0 right-0 flex flex-col justify-center text-center p-4 w-2/3 lg:w-1/2' >
                            <motion.h2 className='text-2xl lg:text-5xl opacity-15 font-extrabold font-Dancing tracking-wider' style={{ y: y }}>
                                Strahlen & Erneuern
                            </motion.h2>
                            <motion.h2 className='text-lg lg:text-3xl font-bold -mt-4 text-gray-700 tracking-wide' style={{ y: ys }}>Exklusive Frühlingsaktion</motion.h2>
                            <p className='text-base lg:text-lg'>Entdecken Sie Ihre Schönheit mit 20% Rabatt</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mb-8 mt-60">
                <p className="text-sm uppercase tracking-wide text-gray-600">Stil • Jeden Tag</p>
                <h2 className="text-3xl font-semibold text-gray-900">Folge unserem Instagram</h2>
                <p className="text-gray-500">@hannisfriseursalon</p>
            </div>

            <div className="flex justify-center items-center space-x-4 overflow-x-auto px-4 lg:px-0">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="flex-none w-40 h-56 lg:w-56 lg:h-72 overflow-hidden shadow-lg transform transition-transform duration-300 "
                    >
                        <a href={image.link} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                                <FaInstagram className="text-white text-3xl" />
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>


        </section>
    );
}

export default FollowUsSection;
