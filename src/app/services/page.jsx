import ServiceAnimation from '@/components/UI/ServiceAnimation/ServiceAnimation';
import ImageReveal from '@/components/utils/ImageReveal';

import Image from 'next/image';
import React from 'react';
import { generatePageMetadata } from '../seo';

import PropTypes from "prop-types";

export const metadata = generatePageMetadata({
    title: "Dienstleistungen",
    description:
        "Entdecken Sie die umfassenden Dienstleistungen von Hannis Friseursalon in Hamburg, einschließlich professioneller Haarschnitte, Haarspa, medizinischer Fußpflege, Kosmetik und ästhetischer Behandlungen. Unser erfahrenes Team bietet Ihnen erstklassige Pflege und ein unvergleichliches Schönheitserlebnis.",
});

const services = [
    {
        image: "/Images/haarwelt2.jpg",
        title: "Haarwelt",
        description: "Professionelle Haarschnitte für Männer, Frauen und Kinder. Unsere erfahrenen Friseure bieten eine Vielzahl von Schnitttechniken und Stilen an, um sicherzustellen, dass Sie genau den Look erhalten, den Sie sich wünschen. Egal, ob Sie eine klassische Frisur, einen trendigen Haarschnitt oder eine individuelle Haarfarbe wünschen, wir sind hier, um Ihre Haarträume wahr werden zu lassen."
    },
    {
        image: "/Images/hair-spa.jpg",
        title: "Hair SPA",
        description: "Entspannende Haarspa-Behandlungen für gesundes Haar. Gönnen Sie sich eine Auszeit und verwöhnen Sie Ihr Haar mit unseren luxuriösen Haarspa-Behandlungen. Unsere Experten verwenden hochwertige Produkte und Techniken, um Ihr Haar zu revitalisieren, zu pflegen und zu stärken. Genießen Sie eine entspannende Kopfmassage, eine tiefenwirksame Haarkur und vieles mehr, um Ihr Haar gesund und strahlend aussehen zu lassen."
    },
    {
        image: "/Images/fusspflege2.jpg",
        title: "Med. Fusspflege",
        description: "Medizinische Fußpflege und Pediküre. Unsere medizinische Fußpflege bietet Ihnen professionelle Behandlungen für gesunde und schöne Füße. Unsere ausgebildeten Fußpflegerinnen kümmern sich um Ihre Füße und bieten Ihnen eine Vielzahl von Dienstleistungen wie Nagelpflege, Hornhautentfernung, Fußmassage und vieles mehr. Verabschieden Sie sich von müden und schmerzenden Füßen und gönnen Sie sich eine entspannende und pflegende Fußbehandlung."
    },
    {
        image: "/Images/kosmetik.jpg",
        title: "Kosmetik",
        description: "Professionelle Make-up-Dienstleistungen für alle Anlässe. Unser erfahrenes Kosmetikteam steht Ihnen zur Verfügung, um Ihnen bei der Gestaltung Ihres perfekten Looks zu helfen. Egal, ob Sie ein natürliches Tages-Make-up, ein glamouröses Abend-Make-up oder ein spezielles Make-up für besondere Anlässe wünschen, wir verwenden hochwertige Produkte und Techniken, um Ihre natürliche Schönheit hervorzuheben und Ihre individuellen Bedürfnisse zu erfüllen."
    },
    {
        image: "/Images/asthetische.jpg",
        title: "Ästhetische Behandlung",
        description: "Ästhetische Behandlungen zur Verjüngung. Entdecken Sie unsere breite Palette an ästhetischen Behandlungen, die darauf abzielen, Ihre Haut zu verjüngen und Ihr Aussehen zu verbessern. Von Faltenbehandlungen und Hautstraffung bis hin zu Gesichtsbehandlungen und Hautpflege bieten wir maßgeschneiderte Lösungen, um Ihre Schönheit zu verbessern und Ihr Selbstvertrauen zu stärken. Lassen Sie sich von unseren Experten beraten und genießen Sie eine individuelle Behandlung, die auf Ihre Bedürfnisse zugeschnitten ist."
    },
];

const StoryItem = ({ item, index }) => {
    const { title, description, image } = item;

    return (
        <>
            <div className={`col-span-12 md:col-span-5 ${index % 2 === 0 ? "order-1 md:order-2 md:col-start-7" : "order-2 md:order-1 md:col-start-2"} flex justify-center`}>
                <div className={`flex flex-col justify-center ${index % 2 === 0 ? "lg:pl-14" : "lg:pr-14"} p-4`}>
                    <h4 className="text-2xl font-bold mb-4 text-center md:text-left">{title}</h4>
                    <p className="text-[16px] leading-relaxed text-justify opacity-70 mb-0 md:pr-6" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        {description}
                    </p>
                </div>
            </div>
            <div className={`${index % 2 === 0 ? "order-1 md:col-start-2" : "order-1 md:order-2 md:col-start-7"} col-span-12 md:col-span-5 mb-6 md:mb-0 mt-6 md:mt-0 flex justify-center`}>
                <div className="relative overflow-hidden group w-80 h-80">
                    <Image
                        src={image}
                        alt="Services"
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 transform group-hover:scale-105"
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
                        <a className="relative z-10" href="#service0">Mehr erfahren</a>
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
                {services.map((item, i) => (
                    <section className="grid justify-center items-center w-full" key={i} id={`service${i}`}>
                        <StoryItem item={item} index={i} />
                    </section>
                ))}
            </div>
        </section>
    );
};

export default ServicePage;