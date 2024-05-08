import React, { useEffect, useRef, useState } from 'react';
import styles from "./team.module.css"
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const teamMembers = [
  {
    picture: "/Images/berber.jpg",
    fullName: "Karim Ahmedd",
    designation: "Master Barber / Founder",
    bio: "With a passion for barbering and a keen eye for detail, Karim is the driving force behind our shop. As a master barber, he specializes in classic cuts and modern styles, ensuring every client leaves feeling confident and refreshed. Trust Karim for a haircut that exceeds your expectations.",
  },
  {
    picture: "/Images/barber2.jpg",
    fullName: "Noha Ray",
    designation: "Barber / Business Manager",
    bio: "As both a skilled barber and our business manager, Noha brings a unique blend of talent and leadership to our shop. With her expertise in both cutting hair and running a successful business, she ensures that every client receives top-notch service and leaves looking their best.",
  },
  {
    picture: "/Images/barber3.jpg",
    fullName: "Rahim",
    designation: "Barber / Style Specialist",
    bio: "Rahim is not just a barber; he's a style specialist dedicated to helping clients achieve their desired look. Whether it's a classic gentleman's cut or a trendy fade, Rahim's attention to detail and commitment to excellence ensure that every haircut is tailored to perfection.",
  },
  {
    picture: "/Images/barber.jpg",
    fullName: "Kalam Khan",
    designation: "Barber / Marketing Director",
    bio: "Kalam Khan is more than just a barber; he's the creative mind behind our shop's marketing efforts. With his innovative approach and passion for barbering, he ensures that our shop is the go-to destination for quality cuts and exceptional service. Experience the Kalam Khan difference today.",
  },
];



const Team = () => {

  gsap.registerPlugin(ScrollTrigger);

  const [index, setIndex] = useState(0);
  const { picture, fullName, designation, bio } =
    teamMembers[index];

  const handleControl = (type) => {
    if (type === "prev") {
      setIndex(index <= 0 ? teamMembers.length - 1 : index - 1);
    } else {
      setIndex(index >= teamMembers.length - 1 ? 0 : index + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex >= teamMembers.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const triggerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

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
    <section className="light bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden mt-6 mb-10" ref={triggerRef}>
      <div className="mb-8 lg:mb-14 container mx-auto px-2">
        <h3 className='text-[#D4A745] text-xl lg:text-[1.5rem] uppercase font-semibold pb-2' ref={titleRef}>Meet Our Skilled Barbers</h3>
        <h1 className='text-2xl lg:text-[2rem] uppercase font-semibold' ref={descriptionRef}>Quality Services at Unbeatable Prices</h1>
      </div>
      <div className='bg-orange-100'>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:order-2">
              <div className="min-h-[250px] w-full md:w-[50vw] h-full relative">
                <Image
                  src={picture}
                  alt={fullName}
                  layout="fill"
                  objectFit="cover"
                  className={styles.teamImage}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 relative px-4">
              <div className="pt-12 pb-28 md:py-24 lg:py-48 lg:pr-24">
                <h4 className="font-medium text-2xl mb-1">{fullName}</h4>
                <p className="mb-6">{designation}</p>
                <p className="opacity-50 mb-0 leading-7">{bio}</p>
              </div>
              <div className="absolute w-24 text-right right-[13%] -bottom-6 lg:bottom-0 text-[150px] text-[#dbac47] dark:text-slate-700 font-medium">
                {index + 1}
              </div>
              <div className="-mt-10 -translate-y-7">
                <button
                  className="w-10 h-10 text-[12px] bg-transparent rounded-full border border-[#FFD571] inline-flex justify-center items-center transition duration-300 hover:bg-[#FFD571] dark:hover:bg-slate-700 mr-3"
                  onClick={() => handleControl("prev")}
                >
                  <FaChevronLeft className='text-[#D4A745]' />
                </button>
                <button
                  className="w-10 h-10 text-[12px] bg-transparent rounded-full border border-[#FFD571] inline-flex justify-center items-center transition duration-300 hover:bg-[#FFD571] dark:hover:bg-slate-700"
                  onClick={() => handleControl("next")}
                >
                  <FaChevronRight className='text-[#D4A745]' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
