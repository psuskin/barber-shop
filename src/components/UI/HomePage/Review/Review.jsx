"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import classNames from "classnames";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";

const reviewList = [
    {
        author: {
            fullName: "Claudia Barha",
            picture: "/Images/cloudia.jpg",
        },
        rating: 5,
        description:
            "Super Meisterin. Klasse Ergebnisse und Top Beratung. Ich kann den Salon absolut weiter empfehlen. Sehr professionell, egal was man mit seinen Haaren machen möchte. Habe sowohl meine Haare schneiden lassen als auch meine Haarfarbe verändert. Auch wurden mir schon tolle Hochsteckfrisuren gemacht. Alles hat klasse ausgesehen. 5 Sterne plus 😊",
    },
    {
        author: {
            fullName: "Maik Redmann",
            picture: "/Images/maikredmann.jpg",
        },
        rating: 5,
        description:
            "Bei Hannis fühlt man sich und seine Haare gut aufgehoben 😊 Ein sehr freundliches und kompetentes Team kümmert sich sehr gut um einen.",
    },
    {
        author: {
            fullName: "Inge Schneider",
            picture: "/Images/Inge.jpg",
        },
        rating: 5,
        description:
            "Sehr kompetente Mitarbeiter. Die Farbe die mir emfohlen wurde, passt auch perfekt! Habe viele Komlimete bekommen)) Beim nächsten mal gehe ich sicher wieder hin.Kann ich nur weiter empfehlen!",
    },
];


const Rating = ({ rating, showLabel, className, ...rest }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            const starIndex = i + 1;
            if (starIndex <= Math.floor(rating)) {
                stars.push(
                    <FaStar key={i} className="text-yellow-500" />
                );
            } else if (rating > i && rating < starIndex + 1) {
                stars.push(
                    <FaStarHalfAlt key={i} className="text-yellow-500" />
                );
            } else {
                stars.push(
                    <FaStar key={i} className="text-yellow-200" />
                );
            }
        }
        return stars;
    };

    return (
        <div className={classNames("flex items-center", className)} {...rest}>
            <span className="flex mr-1">{renderStars()}</span>
            {showLabel && <span className="text-gray-500">{rating.toFixed(1)}</span>}
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    showLabel: PropTypes.bool,
    className: PropTypes.string,
};

const Review = () => {
    const [index, setIndex] = useState(0);
    const { author, description, rating } = reviewList[index];

    const handleControl = (type) => {
        if (type === "prev") {
            setIndex(index <= 0 ? reviewList.length - 1 : index - 1);
        } else if (type === "next") {
            setIndex(index >= reviewList.length - 1 ? 0 : index + 1);
        }
    };


    const imageRef = useRef();
    const { scrollYProgress } = useScroll({ target: imageRef });
    const y = useTransform(scrollYProgress, [0, 1], [-40, 10]);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex >= reviewList.length - 1 ? 0 : prevIndex + 1));
        }, 4500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="light relative mb-28 md:py-12 bg-white  text-zinc-900 z-[1] ">
            <div className="my-4 mb-10 lg:mb-20 container mx-auto px-2">
                <h3 className='text-[#D4A745] text-xl lg:text-[2rem] font-semibold font-Dancing'>Kundenstimmen</h3>
                <h1 className='text-2xl lg:text-[2rem] font-semibold'>Was unsere Kunden über uns sagen</h1>
            </div>
            <div className="container px-4 mx-auto">
                <div className="flex justify-center mt-6">
                    <div className="lg:max-w-5xl">
                        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6">
                            <div className="md:w-1/2 md:py-12">
                                <motion.div
                                    className="bg-center bg-no-repeat bg-cover rounded-xl h-full min-h-[450px] object-cover relative" style={{ y }}
                                >
                                    <Image
                                        ref={imageRef}
                                        src={author.picture}
                                        alt={author.fullName}
                                        fill
                                        objectFit="cover"
                                        className="rounded-3xl"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        loading="eager"
                                    />
                                </motion.div>
                            </div>
                            <div className="md:w-1/2 relative">
                                <div className="absolute -top-[10%] md:top-0 right-0 left-0 md:-left-[20%] bottom-0 bg-gray-600 -z-[1] rounded-xl"></div>
                                <div className="flex flex-col justify-center h-full mb-10 md:mb-0 text-white">
                                    <div className="p-6 lg:py-16 mb-6">
                                        <h4 className="text-2xl font-bold mb-4">
                                            {author.fullName}
                                        </h4>
                                        <Rating rating={rating} showLabel={false} />
                                        <p className="opacity-90 mt-4">{description}</p>
                                    </div>
                                    <div className="px-6 lg:px-12 text-end">
                                        <button
                                            className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800  mr-3"
                                            onClick={() => handleControl("prev")}
                                        >
                                            <FaChevronLeft />
                                        </button>
                                        <button
                                            className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 "
                                            onClick={() => handleControl("next")}
                                        >
                                            <FaChevronRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
