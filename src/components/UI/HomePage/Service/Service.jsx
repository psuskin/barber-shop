import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
    const sectionTitle = "Our Services";
    const sectionDescription = "Explore our range of premium barber services";

    return (
        <div className="bg-black mb-10">
            <div className="flex h-4 pt-10 lg:h-48 items-center justify-center gap-4">
                <span className="font-semibold uppercase text-neutral-500">
                    Scroll
                </span>
                <FaArrowDownLong className="text-xl font-thin text-[#D4A745] opacity-60" />
            </div>
            <div className="container mx-auto flex flex-col justify-center w-full items-start z-10 mt-16 lg:-mt-16 px-4" ref={triggerRef}>

                <h3 className="uppercase text-xl lg:text-[1.5rem] font-bold text-[#D4A745]" ref={titleRef}>{sectionTitle}</h3>
                <h1 className="text-2xl lg:text-[2rem] font-semibold uppercase text-white" ref={descriptionRef}>{sectionDescription}</h1>
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

    const x = useTransform(scrollYProgress, [0, 1], ["3%", "-86%"]);



    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-20">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
                <div className="serviceContainer bg-[#D4A745] text-white flex justify-between absolute -bottom-2 lg:bottom-10 right-0 lg:right-40 gap-2 h-1/4 w-full lg:w-2/4 items-center p-4 md:p-10 container mx-auto">
                    <div className="flex-1 flex-shrink text-lg font-bold uppercase">A Range of premium Barber Services</div>
                    <div className="flex-1 text-sm font-thin uppercase  text-justify">Detailed descriptions of all the services you offer, such as haircuts, beard trims, hot towel shaves Pricing for each service. Option to book appointments directly from the services page</div>
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

            <h1></h1>
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: " brightness(80%)"
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

export default Service;

const cards = [
    {
        url: "/Images/11.jpg",
        title: "Haircuts",
        description: "Professional haircuts for men, women, and children.",
        id: 1,
    },
    {
        url: "/Images/10.jpg",
        title: "Beard Trims",
        description: "Expert beard trimming and grooming services.",
        id: 2,
    },
    {
        url: "/Images/9.jpg",
        title: "Hot Towel Shaves",
        id: 3,
    },
    {
        url: "/Images/12.jpg",
        title: "Facial Treatments",
        id: 4,
    },
    {
        url: "/Images/11.jpg",
        title: "Hair Coloring",
        id: 5,
    },
    {
        url: "/Images/11.jpg",
        title: "Scalp Treatments",
        id: 6,
    }
];
