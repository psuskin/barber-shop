import Image from 'next/image';
import styles from './pricing.module.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
const Pricing = () => {

    const priceItems = [
        { title: "Basic Haircut", description: "Classic haircut with clippers for a timeless look for fashion. Our skilled barbers ensure a clean and stylish cut and more styles.", price: "$25" },
        { title: "Scissor Cut", description: "Precision scissor cut for a tailored hairstyle. Let our experts give you the perfect look with precise techniques and cuts.", price: "$30" },
        { title: "Beard Trim", description: "Expert beard trim to shape and refine your facial hair. Our barbers will sculpt your beard to complement your features.", price: "$15" },
        { title: "Beard Trim", description: "Expert beard trim to shape and refine your facial hair. Our barbers will sculpt your beard to complement your features.", price: "$15" },
        { title: "Beard Trim", description: "Expert beard trim to shape and refine your facial hair. Our barbers will sculpt your beard to complement your features.", price: "$15" },

    ];

    const triggerRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);

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

        gsap.to(
            imageRef.current,
            {
                filter: 'grayscale(0)',
                scale: 1,
                transformOrigin: '50% 50%',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 60%',
                    end: 'bottom 90%',
                    scrub: 1,
                },
            }
        );

    }, [])


    return (
        <div className="pricingContainer max-h-screen container mx-auto flex relative px-4 mb-10 md:mb-20 lg:mb-20" ref={triggerRef}>
            <div className="priceSection w-full md:w-3/5 mx-auto pr-0 md:pr-24">
                <div className="textContainer w-full">
                    <h3 className="uppercase text-xl lg:text-[1.5rem] font-bold text-[#D4A745]" ref={titleRef}>Pricing</h3>
                    <h1 className="text-2xl lg:text-[2rem] font-semibold uppercase tracking-wide leading-tight" ref={descriptionRef}>Quality services at unbeatable prices</h1>
                </div>
                <div className="priceItemContainer mt-10 w-full">
                    {priceItems.map((item, index) => (
                        <div key={index} className="priceItem mt-4 flex justify-between items-center w-full gap-4">
                            <div className="priceInfo">
                                <p className="priceTitle text-xl mb-2">{item.title}</p>
                                <p className="priceDescription text-base text-gray-600">{item.description}</p>
                                <div className="dashedLine w-full border-b-2 border-gray-700 opacity-20 mt-2"></div>
                            </div>
                            <p className="price text-3xl text-[#D4A745]">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bannerSection w-2/5 relative md:block hidden">
                <div className="bannerImage absolute top-0 right-0 w-full h-full overflow-hidden" ref={triggerRef}>
                    <Image ref={imageRef} src="/Images/barber10.jpg" alt="Pricing Banner" fill objectFit="cover" style={{ transform: 'scale(1.2)', filter: 'grayscale(1)' }} />
                </div>
            </div>
        </div>


    );
};

export default Pricing;