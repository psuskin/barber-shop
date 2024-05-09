import Image from "next/image";
import styles from "./aboutus.module.css"
import { FaArrowDownLong } from "react-icons/fa6";


const AboutUs = () => {
    return (
        <section className=" light bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden relative mt-20">
            <div className="container mx-auto mb-4 px-4">
                <h3 className="uppercase text-xl lg:text-[1.5rem] font-bold text-[#D4A745]">About Us</h3>
                <h1 className="text-2xl lg:text-[2rem] font-semibold uppercase tracking-wide leading-tight">Experience the difference at our barber shop</h1>
            </div>
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 md:col-span-1">
                        <div className="md:p-12">
                            <Image
                                src="/Images/9.jpg"
                                alt=""
                                width={500}
                                height={600}
                            />
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 flex flex-col justify-center py-12">
                        <h2 className={`${styles.title } text-[42px] font-normal leading-[52px] z-[1] md:text-6xl md:leading-10 relative after:bottom-2.5 after:-translate-x-1/2 mb-12`}>
                            Our <span className="text-[#D4A745]">Story</span>
                        </h2>

                        <div>
                            <p className="text-2xl leading-7 font-normal opacity-70 mb-4 mb-md-2">
                                At our barber shop,
                            </p>

                            <p className="text-2xl leading-7 font-normal opacity-70 md:pr-2 text-justify">
                                we dont just cut hair; we craft experiences. Step into our haven of style and tradition, where every visit is an opportunity to indulge in a moment of self-care and transformation. Our skilled barbers are more than just professionals; theyre artisans, dedicated to mastering their craft and creating personalized looks that reflect your unique personality. From classic cuts to modern styles, we pride ourselves on delivering exceptional service and attention to detail. But were more than just a barbershop; were a community hub, where friends gather, stories are shared, and memories are made. Join us, and experience the difference at our barber shop
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-6 lg:mt-20 mb-4">

                <h1 className="text-3xl text-center">Scroll</h1> < FaArrowDownLong className="text-4xl font-thin text-[#D4A745]" />
            </div>
        </section>
    );
};

export default AboutUs;