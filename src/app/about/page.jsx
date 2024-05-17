"use client"
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import styles from "../../components/UI/HomePage/AboutUs/aboutus.module.css"
import Lenis from "@studio-freight/lenis";
const stories = [
    {
        title: "Die Reise zu Schönheit und Entspannung",
        description:
            "In unserem Schönheitssalon glauben wir an die transformative Kraft von Entspannung und Selbstpflege. Unsere Reise begann mit einer Leidenschaft für Schönheit und dem Engagement, unseren Kunden eine Oase der Ruhe zu bieten. Durch jahrelange Hingabe haben wir eine Umgebung geschaffen, in der die sanftesten Berührungen, die geschicktesten Hände und die hochwertigsten Produkte zusammenkommen, um ein unvergleichliches Erlebnis von Komfort und Erholung zu schaffen.",
        image: "/Images/about.jpg"
    },
    {
        title: "Ihr Weg zur Eleganz",
        description:
            "In unserem Salon bemühen wir uns, Ihre Schönheit und Ihr Wohlbefinden bei jedem Besuch zu steigern. Unser Team erfahrener Fachleute bietet individuelle Dienstleistungen, die auf Ihre einzigartigen Bedürfnisse zugeschnitten sind. Ob Sie eine revitalisierende Gesichtsbehandlung, eine entspannende Massage oder eine atemberaubende neue Frisur suchen, wir bieten eine ruhige und einladende Atmosphäre, in der Sie sich entspannen und verwöhnen lassen können. Unser Engagement für Exzellenz stellt sicher, dass jeder Moment, den Sie bei uns verbringen, ein Schritt in Richtung Ihres persönlichen Paradieses aus Eleganz und Gelassenheit ist.",
        image: "/Images/aboutUs.jpg"
    }
];

const StoryItem = ({ item, index }) => {
    const { title, description, image } = item;

    useEffect(() => {
        const lenis = new Lenis()
        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])
    return (
        <>
            <div

                className={`col-span-12 md:col-span-5 ${index % 2 === 0
                    ? "order-1 md:order-2 md:col-start-7"
                    : "order-2 md:order-1 md:col-start-2"
                    }`}
            >
                <div
                    className={`flex flex-col justify-center ${index % 2 === 0 ? "lg:pl-14" : "lg:pr-14"
                        }`}
                >
                    <h4 className="text-2xl font-bold mb-4">{title}</h4>
                    <p className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
                        {description}
                    </p>
                </div>
            </div>
            <div
                className={`${index % 2 === 0
                    ? "order-1 md:col-start-2"
                    : "order-1 md:order-2 md:col-start-7"
                    } col-span-12 md:col-span-5  mb-6 md:mb-0 mt-6 md:mt-0`}
            >
                <div>
                    <Image
                        src={image}
                        alt=""
                        width={500}
                        height={600}
                    />
                </div>
            </div>
        </>
    );
};

StoryItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

const About = () => {
    return (
        <section className="container mx-auto py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container px-4 mt-20">
                <div className="grid grid-cols-12 justify-center text-center mb-12">
                    <div className="col-span-12 md:col-span-8 md:col-start-3">
                        <h2 className={`${styles.title} text-[42px] font-normal leading-[52px] z-[1] md:text-6xl md:leading-10 relative after:bottom-2.5 after:-translate-x-1/2 mb-12`}>
                            Unsere <span className="text-[#D4A745]">Geschichte</span>
                        </h2>
                        <p className="text-xl opacity-80 mb-4">
                            Unser Schönheitssalon begann mit einer Leidenschaft für die Verbesserung der natürlichen Schönheit und der Schaffung einer ruhigen Oase für unsere Kunden. Wir sind bestrebt, personalisierte Dienstleistungen anzubieten, die Sie verjüngt und elegant fühlen lassen.
                        </p>
                    </div>
                </div>

                {stories.map((item, i) => (
                    <div
                        className="grid grid-cols-12 justify-center items-center mt-12"
                        key={i}
                    >
                        <StoryItem item={item} index={i + 1} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;






// "use client"

// import React, { useEffect, useRef } from "react";
// import PropTypes from "prop-types";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import styles from "../../components/UI/HomePage/AboutUs/aboutus.module.css";
// import Lenis from "@studio-freight/lenis";

// const stories = [
//     {
//         title: "Die Reise zu Schönheit und Entspannung",
//         description:
//             "In unserem Schönheitssalon glauben wir an die transformative Kraft von Entspannung und Selbstpflege. Unsere Reise begann mit einer Leidenschaft für Schönheit und dem Engagement, unseren Kunden eine Oase der Ruhe zu bieten. Durch jahrelange Hingabe haben wir eine Umgebung geschaffen, in der die sanftesten Berührungen, die geschicktesten Hände und die hochwertigsten Produkte zusammenkommen, um ein unvergleichliches Erlebnis von Komfort und Erholung zu schaffen.",
//         image: "/Images/about.jpg"
//     },
//     {
//         title: "Ihr Weg zur Eleganz",
//         description:
//             "In unserem Salon bemühen wir uns, Ihre Schönheit und Ihr Wohlbefinden bei jedem Besuch zu steigern. Unser Team erfahrener Fachleute bietet individuelle Dienstleistungen, die auf Ihre einzigartigen Bedürfnisse zugeschnitten sind. Ob Sie eine revitalisierende Gesichtsbehandlung, eine entspannende Massage oder eine atemberaubende neue Frisur suchen, wir bieten eine ruhige und einladende Atmosphäre, in der Sie sich entspannen und verwöhnen lassen können. Unser Engagement für Exzellenz stellt sicher, dass jeder Moment, den Sie bei uns verbringen, ein Schritt in Richtung Ihres persönlichen Paradieses aus Eleganz und Gelassenheit ist.",
//         image: "/Images/aboutUs.jpg"
//     }
// ];

// const StoryItem = ({ item, index }) => {
//     const { title, description, image } = item;
//     const ref = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["start end", "end start"]
//     });
//     const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

//     return (
//         <>
//             <motion.div
//                 ref={ref}
//                 className={`col-span-12 md:col-span-5 ${index % 2 === 0
//                     ? "order-1 md:order-2 md:col-start-7"
//                     : "order-2 md:order-1 md:col-start-2"
//                     }`}

//             >
//                 <div className={`flex flex-col justify-center ${index % 2 === 0 ? "lg:pl-14" : "lg:pr-14"}`}>
//                     <h4 className="text-2xl font-bold mb-4">{title}</h4>
//                     <p className="text-lg leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
//                         {description}
//                     </p>
//                 </div>
//             </motion.div>
//             <motion.div
//                 style={{ y }}
//                 className={`${index % 2 === 0
//                     ? "order-1 md:col-start-2"
//                     : "order-1 md:order-2 md:col-start-7"
//                     } col-span-12 md:col-span-5  mb-6 md:mb-0 mt-6 md:mt-0`}

//             >
//                 <div>
//                     <Image
//                         src={image}
//                         alt=""
//                         width={500}
//                         height={600}
//                     />
//                 </div>
//             </motion.div>
//         </>
//     );
// };

// StoryItem.propTypes = {
//     item: PropTypes.object.isRequired,
//     index: PropTypes.number.isRequired,
// };

// const About = () => {

//     useEffect(() => {
//         const lenis = new Lenis()
//         const raf = (time) => {
//             lenis.raf(time)
//             requestAnimationFrame(raf)
//         }
//         requestAnimationFrame(raf)
//     }, [])

//     return (
//         <section className="container mx-auto py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white mb-20">
//             <div className="container px-4 mt-16">
//                 <div className="grid grid-cols-12 justify-center text-center mb-12">
//                     <div className="col-span-12 md:col-span-8 md:col-start-3">
//                         <h2 className={`${styles.title} text-[42px] font-normal leading-[52px] z-[1] md:text-6xl md:leading-10 relative after:bottom-2.5 after:-translate-x-1/2 mb-12`}>
//                             Unsere <span className="text-[#D4A745]">Geschichte</span>
//                         </h2>
//                         <p className="text-xl opacity-80 mb-4">
//                             Unser Schönheitssalon begann mit einer Leidenschaft für die Verbesserung der natürlichen Schönheit und der Schaffung einer ruhigen Oase für unsere Kunden. Wir sind bestrebt, personalisierte Dienstleistungen anzubieten, die Sie verjüngt und elegant fühlen lassen.
//                         </p>
//                     </div>
//                 </div>

//                 {stories.map((item, i) => (
//                     <div
//                         className="grid grid-cols-12 justify-center items-center mt-12"
//                         key={i}
//                     >
//                         <StoryItem item={item} index={i} />
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default About;
