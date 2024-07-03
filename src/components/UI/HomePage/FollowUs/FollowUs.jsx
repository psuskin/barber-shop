"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';


const images = [
    { src: '/Images/service1.jpg', alt: 'Image 1', link: 'https://www.instagram.com/hannis_beautysalon?igsh=NnE0c3dsY3hydmZy' },
    { src: '/Images/fusspflege1.jpg', alt: 'Image 2', link: 'https://www.instagram.com/hannis_beautysalon?igsh=NnE0c3dsY3hydmZy' },
    { src: '/Images/haircut1.jpg', alt: 'Image 3', link: 'https://www.instagram.com/hannis_beautysalon?igsh=NnE0c3dsY3hydmZy' },
    { src: '/Images/asthetische.jpg', alt: 'Image 4', link: 'https://www.instagram.com/hannis_beautysalon?igsh=NnE0c3dsY3hydmZy' },
    { src: '/Images/room1.jpg', alt: 'Image 5', link: 'https://www.instagram.com/hannis_beautysalon?igsh=NnE0c3dsY3hydmZy' },
    { src: '/Images/room3.jpg', alt: 'Image 6', link: 'https://www.instagram.com/hannis_beautysalon?igsh=NnE0c3dsY3hydmZy' },
];

const FollowUsSection = () => {


    return (
        <section className="py-16 bg-gray-100 h-[70vh]">
            <div className="text-center mb-8">
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
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
