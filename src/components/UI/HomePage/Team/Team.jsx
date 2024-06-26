"use client"

import React, { useEffect, useState } from 'react';
import styles from "./team.module.css"
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const teamMembers = [
  {
    picture: "/Images/haircut1.jpg",
    fullName: "Karim Ahmed",
    designation: "Master Friseur / Gründer",
    bio: "Mit einer Leidenschaft für das Friseurhandwerk und einem scharfen Auge für Details ist Karim die treibende Kraft hinter unserem Salon. Als Master Friseur spezialisiert er sich auf klassische Schnitte und moderne Styles, sodass jeder Kunde den Salon selbstbewusst und erfrischt verlässt. Vertrauen Sie Karim für einen Haarschnitt, der Ihre Erwartungen übertrifft.",
  },
  // {
  //   picture: "/Images/.jpg",
  //   fullName: "Noah Schmidt",
  //   designation: "Friseur / Geschäftsleiter",
  //   bio: "Noah bringt als talentierter Friseur und Geschäftsleiter eine einzigartige Kombination aus Können und Führung in unseren Salon. Mit ihrer Expertise im Haarschnitt und der erfolgreichen Führung eines Unternehmens stellt sie sicher, dass jeder Kunde erstklassigen Service erhält und den Salon in Bestform verlässt.",
  // },
  {
    picture: "/Images/works.jpg",
    fullName: "Rahim Müller",
    designation: "Friseur / Style Spezialist",
    bio: "Rahim ist nicht nur ein Friseur; er ist ein Style Spezialist, der sich dafür einsetzt, dass die Kunden ihren gewünschten Look erreichen. Ob klassischer Herrenschnitt oder trendiger Fade, Rahims Liebe zum Detail und sein Streben nach Perfektion sorgen dafür, dass jeder Haarschnitt perfekt angepasst ist.",
  },
  {
    picture: "/Images/haarwelt2.jpg",
    fullName: "Klaus Meyer",
    designation: "Friseur / Marketing Direktor",
    bio: "Klaus Meyer ist mehr als nur ein Friseur; er ist der kreative Kopf hinter den Marketingaktivitäten unseres Salons. Mit seinem innovativen Ansatz und seiner Leidenschaft fürs Friseurhandwerk stellt er sicher, dass unser Salon die erste Anlaufstelle für qualitativ hochwertige Schnitte und außergewöhnlichen Service ist. Erleben Sie heute den Unterschied von Klaus Meyer.",
  },
];


const Team = () => {


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
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);



  return (
    <section className="light bg-white text-zinc-900 overflow-hidden mt-10 mb-10">
      <div className="mb-8 lg:mb-14 container mx-auto px-2">
        <h3 className='text-[#D4A745] text-xl lg:text-[2rem] font-Dancing pb-2'>Unser Team</h3>
        <h1 className='text-2xl lg:text-[2rem] font-semibold'>Lernen Sie unsere erfahrenen Styler kennen</h1>
      </div>
      <div className='bg-orange-100'>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:order-2">
              <div className="min-h-[250px] w-full md:w-[50vw] h-full relative">
                <Image
                  src={picture}
                  alt={fullName}
                  fill
                  objectFit="cover"
                  className={styles.teamImage}
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading='eager'
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 relative px-4">
              <div className="pt-12 pb-28 md:py-24 lg:py-48 lg:pr-24">
                <h4 className="font-medium text-2xl mb-1">{fullName}</h4>
                <p className="mb-6">{designation}</p>
                <p className="opacity-50 mb-0 leading-7">{bio}</p>
              </div>
              <div className="absolute w-24 text-right right-[13%] -bottom-6 lg:bottom-0 text-[150px] text-[#dbac47] font-Dancing">
                {index + 1}
              </div>
              <div className="-mt-10 -translate-y-7">
                <button
                  className="w-10 h-10 text-[12px] bg-transparent rounded-full border border-[#FFD571] inline-flex justify-center items-center transition duration-300 hover:bg-[#FFD571] mr-3"
                  onClick={() => handleControl("prev")}
                >
                  <FaChevronLeft className='text-[#D4A745]' />
                </button>
                <button
                  className="w-10 h-10 text-[12px] bg-transparent rounded-full border border-[#FFD571] inline-flex justify-center items-center transition duration-300 hover:bg-[#FFD571] "
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
