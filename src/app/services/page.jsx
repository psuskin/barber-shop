import ServiceAnimation from '@/components/UI/ServiceAnimation/ServiceAnimation';
import ImageReveal from '@/components/utils/ImageReveal';

import Image from 'next/image';
import React from 'react';
import { generatePageMetadata } from '../seo';

export const metadata = generatePageMetadata({
    title: "Dienstleistungen",
    description:
        "Entdecken Sie die umfassenden Dienstleistungen von Hannis Friseursalon in Hamburg, einschließlich professioneller Haarschnitte, Haarspa, medizinischer Fußpflege, Kosmetik und ästhetischer Behandlungen. Unser erfahrenes Team bietet Ihnen erstklassige Pflege und ein unvergleichliches Schönheitserlebnis.",
});


const services = [
    {
        image: "/Images/haarwelt2.jpg",
        title: "Haarwelt",
        description: "Professionelle Haarschnitte für Männer, Frauen und Kinder.",
    },
    {
        image: "/Images/hair-spa.jpg",
        title: "Hair SPA",
        description: "Entspannende Haarspa-Behandlungen für gesundes Haar.",
    },
    {
        image: "/Images/fusspflege2.jpg",
        title: "Med. Fusspflege",
        description: "Medizinische Fußpflege und Pediküre.",
    },
    {
        image: "/Images/kosmetik.jpg",
        title: "Kosmetik",
        description: "Professionelle Make-up-Dienstleistungen für alle Anlässe.",
    },
    {
        image: "/Images/asthetische.jpg",
        title: "Ästhetische Behandlung",
        description: "Ästhetische Behandlungen zur Verjüngung.",
    },
];

const ServicePage = () => {


    return (
        <section className="mb-40">
            <div className="relative h-96 w-full">
                <Image
                    fill
                    src="/Images/titlepicture.jpg"
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
            <div className="flex flex-col lg:flex-row justify-around items-center w-11/12 md:w-4/5 h-auto lg:h-[600px] mx-auto mb-24 space-y-10 lg:space-y-0 mt-20">
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
                    <div className="relative w-72 h-96 md:w-64 md:h-[500px] lg:w-[400px] lg:h-[600px]">
                        <ImageReveal
                            src="/Images/service2.jpg"
                            alt="Image 1"
                            width={400}
                            height={600}
                        />
                    </div>
                    <ServiceAnimation />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 pt-20 mx-auto w-full">
                {services.map((service, index) => (
                    <div key={index} className="relative overflow-hidden group w-80 h-80">
                        <Image
                            src={service.image}
                            alt={service.title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500 transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-20 transition-opacity duration-500 flex flex-col justify-center items-center text-center">
                            <h3 className="text-white text-lg font-semibold">{service.title}</h3>
                            <p className="text-white text-sm mt-2 px-4">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default ServicePage;