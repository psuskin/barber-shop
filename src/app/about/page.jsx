import PropTypes from "prop-types";
import Image from "next/image";
import styles from "../../components/UI/HomePage/AboutUs/aboutus.module.css";
import ImageReveal from "@/components/utils/ImageReveal";
import { generatePageMetadata } from "../seo";


export const metadata = generatePageMetadata({
    title: "Über Uns",
    description:
        "Erfahren Sie mehr über Hannis Friseursalon, Ihre Anlaufstelle für professionelle Haarpflege, medizinische Fußpflege, Kosmetik und ästhetische Behandlungen in Hamburg. Unser engagiertes Team bietet Ihnen erstklassigen Service in einer entspannten Atmosphäre.",
})

const stories = [
    {
        title: "Vielfalt an Dienstleistungen",
        description:
            "Wir bieten ein breites Spektrum an Dienstleistungen an, um Ihre Schönheit und Ihr Wohlbefinden zu fördern. Neben professionellen Haarschnitten für Männer und Frauen, umfasst unser Angebot medizinische Fußpflege, die von geschulten Experten durchgeführt wird. Unsere Schönheitsdienstleistungen wie Haarentfernung und Wimpernverlängerungen sind darauf ausgelegt, Ihr Aussehen zu perfektionieren. Jedes Familienmitglied bringt seine Expertise ein, um Ihnen die bestmögliche Behandlung zu bieten.",
        image: "/Images/works1.jpg"
    },
    {
        title: "Räume für besondere Anlässe",
        description:
            "Unser Salon bietet nicht nur erstklassige Dienstleistungen, sondern auch spezielle Räume für besondere Anlässe. Ob Hochzeiten, Jubiläen oder andere Feierlichkeiten – wir sorgen dafür, dass Sie an Ihrem besonderen Tag strahlen. Unsere gemütlichen und stilvollen Räumlichkeiten schaffen eine entspannte Atmosphäre, in der Sie sich rundum wohlfühlen können. Bei Hannis Beautysalon steht Qualität und Individualität an erster Stelle, damit Ihr Besuch bei uns zu einem unvergesslichen Erlebnis wird.",
        image: "/Images/aboutus2.jpg"
    }
];

const StoryItem = ({ item, index }) => {
    const { title, description, image } = item;



    return (
        <>
            <div className={`col-span-12 md:col-span-5 ${index % 2 === 0 ? "order-1 md:order-2 md:col-start-7" : "order-2 md:order-1 md:col-start-2"}`}>
                <div className={`flex flex-col justify-center ${index % 2 === 0 ? "lg:pl-14" : "lg:pr-14"}`}>
                    <h4 className="text-2xl font-bold mb-4">{title}</h4>
                    <p className="text-[16px] leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
                        {description}
                    </p>
                </div>
            </div>
            <div className={`${index % 2 === 0 ? "order-1 md:col-start-2" : "order-1 md:order-2 md:col-start-7"} col-span-12 md:col-span-5  mb-6 md:mb-0 mt-6 md:mt-0`}>
                <div>
                    <ImageReveal
                        src={image}
                        alt="About Us"
                        width={400}
                        height={500}
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
        <>
            <div className="relative h-96 w-full">
                <Image
                    fill
                    src="/Images/titlepicture.jpg"
                    alt="About Us Banner"
                    className="object-cover w-full h-full"
                />


                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h2 className="text-4xl font-extrabold font-Dancing">Über Uns</h2>
                        <div className="mt-4 border-t border-yellow-200"></div>
                    </div>
                </div>
            </div>
            <section className="container mx-auto py-14 md:py-24 bg-white text-zinc-900 ">
                <div className="container px-4 mt-20">
                    <div className="grid grid-cols-12 justify-center text-center mb-12">
                        <div className="col-span-12 md:col-span-8 md:col-start-3">
                            <h2 className={`${styles.title} text-[42px] font-normal leading-[52px] z-[1] md:text-6xl md:leading-10 relative after:bottom-2.5 after:-translate-x-1/2 mb-12`}>
                                Unsere Familie, <span className="text-[#D4A745]">Ihre Schönheit </span>
                            </h2>
                            <p className="text-xl opacity-80 mb-4">
                                Hannis Beautysalon ist ein familiengeführtes Unternehmen, das sich seit Jahren der Schönheit und Pflege widmet. Unser Team besteht aus erfahrenen Fachkräften, die leidenschaftlich für Ihr Wohlbefinden arbeiten. Der Familienvater ist ein Meister im Bereich der Männerhaarschnitte und sorgt für zeitgemäße und klassische Styles. Unsere Gründerin und ihr talentierter Sohn kümmert sich um die Haarpflege und Schönheit der Damen. Bei uns stehen Sie und Ihre Wünsche im Mittelpunkt, denn Ihre Zufriedenheit ist unser größtes Anliegen.
                            </p>
                        </div>
                    </div>

                    {stories.map((item, i) => (
                        <div className="grid grid-cols-12 justify-center items-center mt-12" key={i}>
                            <StoryItem item={item} index={i} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default About;






