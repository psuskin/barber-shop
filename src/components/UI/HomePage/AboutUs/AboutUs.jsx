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
                        <h2 className={`${styles.title} text-[42px] font-normal leading-[40px] z-[1] md:text-6xl md:leading-10 relative after:bottom-2.5 after:-translate-x-1/2 mb-12`}>
                            Unsere <span className="text-[#D4A745]">Geschichte</span>
                        </h2>

                        <div>
                            <p className="text-xl leading-7 font-normal opacity-70 mb-4 mb-md-2">
                                Willkommen bei Hannis Beautysalon,
                            </p>

                            <p className="text-xl leading-7 font-normal opacity-70 md:pr-2 text-justify">
                                Einem familiengeführten Unternehmen, das sich der Schönheit und dem Wohlbefinden seiner Kunden verschrieben hat. Seit Generationen teilen wir unsere Leidenschaft und unser Können in der Friseur- und Schönheitsbranche. Der Familienvater, ein erfahrener Friseurmeister, ist spezialisiert auf moderne und klassische Männerhaarschnitte, während seine Frau und unsere Söhne sich liebevoll um die Haarpflege und Schönheit der Damen kümmern.
                            </p>
                            <p className="text-xl leading-7 font-normal opacity-70 md:pr-2 text-justify mt-4">Unser Wissen und unsere Talente haben wir erfolgreich an die nächste Generation weitergegeben, die mit ebenso viel Engagement und Professionalität arbeitet. Uns liegt es am Herzen, Ihnen nicht nur einen erstklassigen Service zu bieten, sondern auch eine persönliche und familiäre Atmosphäre zu schaffen, in der Sie sich wohl und geschätzt fühlen.</p>

                            <p className="text-xl leading-7 font-normal opacity-70 md:pr-2 text-justify mt-4">Neben perfekten Haarschnitten und Stylings bieten wir eine Vielzahl weiterer Dienstleistungen an. Unser Angebot umfasst unter anderem medizinische Fußpflege, professionelle Haarentfernung und beeindruckende Wimpernverlängerungen. Jede Behandlung wird mit größter Sorgfalt und Liebe zum Detail durchgeführt, um Ihre natürlichen Vorzüge zu betonen und Ihr Selbstbewusstsein zu stärken.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Link href="/about"
                className="overflow-hidden bg-gradient-to-r bg-[#D4A745] text-white font-semibold py-2 px-6 transform transition-transform duration-300 absolute bottom-16 right-4 md:bottom-28 md:right-24 mr-4 mt-4"
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