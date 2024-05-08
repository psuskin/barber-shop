import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import classNames from "classnames";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const reviewList = [
    {
        author: {
            fullName: "Ankita Nath",
            picture: "/Images/review2.jpg",
            designation: "Founder / CEO",
        },
        rating: 3.5,
        description:
            "I had a fantastic experience at your barbershop. The staff was friendly and professional, and I received an excellent haircut that perfectly suited my style. I highly recommend your services to anyone looking for a top-notch barber.",
    },
    {
        author: {
            fullName: "Raima Sen",
            picture: "/Images/review3.jpg",
            designation: "Founder / CEO",
        },
        rating: 4,
        description:
            "I've been a regular customer at your barbershop for years, and I'm always impressed with the quality of service I receive. The barbers are skilled and attentive, and I always leave feeling confident and refreshed. Keep up the great work!",
    },
    {
        author: {
            fullName: "Rashid Sheikh",
            picture: "/Images/review4.jpg",
            designation: "Founder / CEO",
        },
        rating: 5,
        description:
            "I recently visited your barbershop for the first time, and I couldn't be happier with the results. The barber listened to my preferences and delivered exactly what I was looking for. I'll definitely be returning and recommending your shop to others.",
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
                    <FaStar key={i} className="text-yellow-200 dark:text-opacity-20" />
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

    const triggerRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef();
    const { scrollYProgress } = useScroll({ target: imageRef });
    const y = useTransform(scrollYProgress, [0, 1], [-40, 10]);


    useEffect(() => {
        gsap.fromTo(
            [titleRef.current, descriptionRef.current],
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top 60%',
                    end: 'bottom 90%',
                    scrub: 1
                },
            }
        );
    }, [])
    return (
        <section className="light relative md:py-12 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white z-[1]" ref={triggerRef}>
            <div className="my-4 mb-10 lg:mb-20 space-y-2 lg:space-y-4 container mx-auto px-2">
                <h3 className='text-[#D4A745] text-xl lg:text-[1.5rem] uppercase font-semibold' ref={titleRef}>Meet Our Skilled Barbers</h3>
                <h1 className='text-2xl lg:text-[2rem] uppercase font-semibold' ref={descriptionRef}>Quality Services at Unbeatable Prices</h1>
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
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-3xl"
                                    />
                                </motion.div>
                            </div>
                            <div className="md:w-1/2 relative">
                                <div className="absolute -top-[10%] md:top-0 right-0 left-0 md:-left-[20%] bottom-0 bg-gray-700 dark:bg-gray-800 -z-[1] rounded-xl"></div>
                                <div className="flex flex-col justify-center h-full mb-10 md:mb-0 text-white">
                                    <div className="p-6 lg:py-16 mb-6">
                                        <h4 className="text-2xl font-bold mb-4">
                                            {author.fullName}
                                        </h4>
                                        <Rating rating={rating} showLabel={false} />
                                        <p className="opacity-70">{description}</p>
                                    </div>
                                    <div className="px-6 lg:px-12 text-end">
                                        <button
                                            className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200 mr-3"
                                            onClick={() => handleControl("prev")}
                                        >
                                            <FaChevronLeft />
                                        </button>
                                        <button
                                            className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200"
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
