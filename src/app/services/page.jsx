"use client"

import ImageReveal from '@/components/utils/ImageReveal';
import Lenis from '@studio-freight/lenis';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';


const services = [
    {
        image: "/Images/treatment.jpg",
        title: "Haarwelt",
        description: "Professionelle Haarschnitte für Männer, Frauen und Kinder.",
    },
    {
        image: "/Images/hairSpa.jpg",
        title: "Hair SPA",
        description: "Entspannende Haarspa-Behandlungen für gesundes Haar.",
    },
    {
        image: "/Images/feet.jpg",
        title: "Med. Fusspflege",
        description: "Medizinische Fußpflege und Pediküre.",
    },
    {
        image: "/Images/makeup.jpg",
        title: "Kosmetik",
        description: "Professionelle Make-up-Dienstleistungen für alle Anlässe.",
    },
    {
        image: "/Images/treatment.jpg",
        title: "Ästhetische Behandlung",
        description: "Ästhetische Behandlungen zur Verjüngung.",
    },
];

const ServicePage = () => {

    const imageRef = useRef();
    const { scrollYProgress } = useScroll({ target: imageRef });
    const y = useTransform(scrollYProgress, [0, 1], [-80, 50]);


    useEffect(() => {
        const lenis = new Lenis();
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

    }, []);

    return (
        <section className="mb-40">
            <div className="relative h-96 w-full">
                <Image
                    fill
                    src="/Images/ff.jpg"
                    alt="Contact Banner"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h2 className="text-4xl font-Dancing font-bold">Dienstleistungen</h2>
                        <div className="mt-4 border-t border-yellow-200"></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-around items-center w-11/12 lg:w-3/5 h-auto lg:h-[600px] mx-auto mb-24 space-y-10 lg:space-y-0 mt-20 ">
                <div className="text-center space-y-6 lg:w-1/3 px-4 bg-[#f8ebd0] p-20">
                    <h2 className="text-4xl mb-2 font-light">Unsere Dienstleistungen</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Wir wissen, was diesen Sommer angesagt ist! Wir kreieren die perfekte Nagelkunst, die zu Ihren neuen Sommerlooks passt.
                    </p>
                    <button className="relative overflow-hidden bg-[#D4A745] text-white py-3 px-8 transform transition-transform duration-300 group">
                        <span className="absolute inset-0 w-full h-full border-2 border-transparent group-hover:border-white transition-all duration-300"></span>
                        <span className="relative z-10">Mehr erfahren</span>
                    </button>
                </div>

                <div className="relative flex items-center">
                    <div className="relative w-72 h-96 md:w-80 md:h-[500px] lg:w-[400px] lg:h-[600px]">
                        <ImageReveal
                            src="/Images/img-big.jpg"
                            alt="Image 1"
                            width={400}
                            height={600}
                        />
                    </div>
                    <motion.div className="absolute top-60 -left-8 md:-left-16 w-40 h-40 md:w-64 md:h-64" style={{ y }}>
                        <Image
                            ref={imageRef}
                            src="/Images/follow1.jpg"
                            alt="Image 2"
                            layout="responsive"
                            width={200}
                            height={200}
                            objectFit="cover"
                            className="rounded-lg shadow-lg hidden md:block"
                        />
                    </motion.div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-36 w-4/5 mx-auto">
                {services.map((service, index) => (
                    <div key={index} className="relative overflow-hidden group w-80 h-80 mx-auto">
                        <Image
                            src={service.image}
                            alt={service.title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500 transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-20 transition-opacity duration-500 flex flex-col justify-center items-center text-center">
                            <h3 className="text-white text-lg font-semibold">{service.title}</h3>
                            <p className="text-white text-sm mt-2 w-3/5">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicePage;