import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';


const OurSpaces = () => {

    return (
        <section className="mt-20 h-auto md:h-screen">
            <div className="container mx-auto px-4">
                <h2 className="text-xl lg:text-2xl font-bold text-center text-gray-900 mb-4">Unsere Schönheitssalon-Räume</h2>

                <div className="w-full h-full mx-auto px-4 py-10 lg:py-10 relative">
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="flex flex-1 flex-col gap-2">
                            <div className="flex flex-1 flex-col relative group">
                                <div className="relative w-full h-full">
                                    <Image src="/Images/room1.jpg" alt="Raum 1" width={800} height={600} className="object-cover w-full h-full group-hover:blur-sm transition duration-300" />
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-15 text-white p-2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                    <h3 className="text-lg font-bold">Entspannungsraum</h3>
                                    <p className="text-sm">Genießen Sie unsere entspannenden Massagen.</p>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-row gap-2">
                                <div className="flex flex-1 flex-col relative group">
                                    <div className="relative w-full h-full">
                                        <Image src="/Images/room2.jpg" alt="Raum 2" width={800} height={600} className="object-cover w-full h-full group-hover:blur-sm transition duration-300" />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-15 text-white p-2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                        <h3 className="text-lg font-bold">Kosmetikraum</h3>
                                        <p className="text-sm">Professionelle Hautpflegebehandlungen.</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col relative group">
                                    <div className="relative w-full h-full">
                                        <Image src="/Images/room3.jpg" alt="Raum 3" width={800} height={600} className="object-cover w-full h-full group-hover:blur-sm transition duration-300" />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-15 text-white p-2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                        <h3 className="text-lg font-bold">Maniküreraum</h3>
                                        <p className="text-sm">Perfekte Pflege für Ihre Nägel.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                            <div className="flex flex-1 flex-row gap-2">
                                <div className="flex flex-1 flex-col relative group">
                                    <div className="relative w-full h-full">
                                        <Image src="/Images/room4.jpg" alt="Raum 4" width={800} height={600} className="object-cover w-full h-full group-hover:blur-sm transition duration-300" />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-15 text-white p-2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                        <h3 className="text-lg font-bold">Friseursalon</h3>
                                        <p className="text-sm">Modische Haarschnitte und Stylings.</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col relative group">
                                    <div className="relative w-full h-full">
                                        <Image src="/Images/room5.jpg" alt="Raum 5" width={800} height={600} className="object-cover w-full h-full group-hover:blur-sm transition duration-300" />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-15 text-white p-2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                        <h3 className="text-lg font-bold">Spa-Bereich</h3>
                                        <p className="text-sm">Luxuriöse Spa-Erlebnisse.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col relative group">
                                <div className="relative w-full h-full">
                                    <Image src="/Images/room.jpg" alt="Raum 6" width={800} height={600} className="object-cover w-full h-full group-hover:blur-sm transition duration-300" />
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-15 text-white p-2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                    <h3 className="text-lg font-bold">Make-up Studio</h3>
                                    <p className="text-sm">Professionelles Make-up für jeden Anlass.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurSpaces;