import Image from "next/image";
import styles from "./aboutus.module.css"
import { FaArrowDownLong } from "react-icons/fa6";
import { FaAlignRight, FaChevronRight, FaLink } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import ImageReveal from "@/components/utils/ImageReveal";


const AboutUs = () => {
    const [hovered, setHovered] = useState(false)
    return (
        <section className=" light bg-white text-zinc-900  overflow-hidden relative">
            <div className="container mx-auto mb-4 px-4">
                <h3 className="text-xl lg:text-[2rem] font-bold text-[#D4A745] font-Dancing">Über Uns</h3>
                <h1 className="text-2xl lg:text-[2rem] font-semibold tracking-wide leading-tight">Erlebe eine besondere Schönheitsreise in unserem Salon</h1>
            </div>
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 md:col-span-1">
                        <div className="md:p-12">
                            {/* <Image
                                src="/Images/about.jpg"
                                alt=""
                                width={500}
                                height={600}
                            /> */}
                            <ImageReveal
                                src="/Images/haarwelt3.jpg"
                                alt="Image About"
                                width={600}
                                height={700}
                            />
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 flex flex-col justify-center py-12">
                        <h2 className={`${styles.title} text-[42px] font-normal leading-[52px] z-[1] md:text-6xl md:leading-10 relative after:bottom-2.5 after:-translate-x-1/2 mb-12`}>
                            Unsere <span className="text-[#D4A745]">Geschichte</span>
                        </h2>

                        <div>
                            <p className="text-2xl leading-7 font-normal opacity-70 mb-4 mb-md-2">
                                AIn unserem Schönheitssalon,
                            </p>

                            <p className="text-2xl leading-7 font-normal opacity-70 md:pr-2 text-justify">
                                geht es nicht nur um Dienstleistungen; wir gestalten Erlebnisse. Betreten Sie unser Refugium aus Stil und Eleganz, wo jeder Termin eine Einladung ist, sich zu verwöhnen und Transformation zu umarmen. Unsere erfahrenen Stylisten sind mehr als nur Fachleute; sie sind Künstler, die sich der Meisterung ihres Handwerks widmen und individuelle Looks kreieren, die Ihre Persönlichkeit feiern. Von zeitlosen Stilen bis hin zu modernen Trends legen wir Wert auf außergewöhnlichen Service und akribische Liebe zum Detail. Doch wir sind mehr als nur ein Salon; wir sind ein Treffpunkt der Gemeinschaft, wo Freunde zusammenkommen, Geschichten ausgetauscht werden und Erinnerungen entstehen. Begleiten Sie uns und heben Sie Ihre Schönheitserfahrung auf ein neues Niveau.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Link href="/about"
                className="overflow-hidden bg-gradient-to-r bg-[#D4A745] text-white font-semibold py-2 px-6 transform transition-transform duration-300 absolute bottom-20 right-4 lg:bottom-60 lg:right-48 mr-4 mt-4"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <span className="flex items-center justify-center">
                    <span>Mehr über uns erfahren</span>
                    <FaChevronRight
                        className={`h-5 w-5 ml-2 transform transition-transform duration-300 ${hovered ? 'translate-x-3' : ''}`}
                    />
                </span>
            </Link>


            <div className="flex justify-center items-center gap-4 mt-6 lg:mt-20 mb-4">

                {/* <h1 className="text-3xl text-center">Scroll</h1>  */}
                < FaArrowDownLong className="text-4xl animate-bounce font-thin text-[#D4A745]" />
            </div>
        </section>
    );
};

export default AboutUs;