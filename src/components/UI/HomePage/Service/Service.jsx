import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {


    const triggerRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);



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
    }, []);
    // Define the title and description for the section
    const sectionTitle = "Dienstleistung";
    const sectionDescription = "Entdecken Sie unser Angebot an erstklassigen Friseurdienstleistungen";

    return (
        <div className="bg-black">
            <div className="flex h-4 pt-10 lg:h-48 items-center justify-center gap-4">
                <FaArrowDownLong className="mx-auto text-xl mb-2 animate-bounce text-[#D4A745]" />
            </div>
            <div className="container mx-auto flex flex-col justify-center w-full items-start z-10 mt-16 lg:-mt-16 px-4" ref={triggerRef}>
                <h3 className="text-xl lg:text-[1.5rem] font-bold text-[#D4A745]" ref={titleRef}>{sectionTitle}</h3>
                <h1 className="text-2xl lg:text-[2rem] font-semibold text-white" ref={descriptionRef}>{sectionDescription}</h1>
            </div>
            <HorizontalScrollCarousel />
        </div>
    );
};


const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["3%", "-84%"]);



    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-20">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
                <div className="serviceContainer bg-[#F2F5EE] text-gray-700 flex flex-col lg:flex-row justify-between absolute -bottom-2 lg:bottom-10 right-0 lg:right-40 gap-2 lg:gap-4 h-auto lg:h-1/4 w-full lg:w-2/4 items-center p-4 md:p-6 lg:p-10 mx-auto">
                    <div className="flex-1 flex-shrink text-base md:text-lg lg:text-xl font-bold uppercase text-center lg:text-left">
                        Gönnen Sie sich unser Angebot an Schönheitsbehandlungen
                    </div>
                    <div className="flex-1 text-sm md:text-base lg:text-lg font-medium uppercase text-justify mt-4 lg:mt-0">
                        Tauchen Sie ein in eine Welt der Schönheit und Entspannung mit unseren vielfältigen Dienstleistungen, darunter Haarverwandlungen, Spa-Therapien und verjüngende Hautpflegebehandlungen
                    </div>
                </div>

            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[450px] lg:h-[70vh] w-[390px] lg:w-[100vh] overflow-hidden bg-neutral-200"
        >
            <Image
                src={card.url}
                alt={card.alt}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-black/40 to-white/0 p-4 md:p-6 lg:p-8 text-2xl md:text-4xl lg:text-6xl font-black uppercase text-white">
                    {card.title}
                </p>

            </div>
        </div>
    );
};

export default Service;

const cards = [
    {
        url: "/Images/haarwelt.jpg",
        title: "Haarwelt",
        description: "Professional haircuts for men, women, and children.",
        id: 1,
    },
    {
        url: "/Images/hair-spa.jpg",
        title: "Hair SPA",
        description: "Expert beard trimming and grooming services.",
        id: 2,
    },
    {
        url: "/Images/fusspflege1.jpg",
        title: "Med. Fusspflege",
        id: 3,
    },
    {
        url: "/Images/kosmetik.jpg",
        title: "Kosmetik",
        id: 4,
    },
    {
        url: "/Images/asthetische.jpg",
        title: "Ästhetische Behandlung",
        id: 5,
    }
];
