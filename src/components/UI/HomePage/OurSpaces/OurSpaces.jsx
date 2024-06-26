import Image from 'next/image';



const OurSpaces = () => {

    return (
        <section className="mt-20 h-auto md:h-screen">
            <div className="container mx-auto px-2">
                <h2 className="text-xl lg:text-2xl font-bold text-center text-gray-900 mb-4">Unsere Schönheitssalon-Räume</h2>

                <div className="w-full h-full mx-auto py-10 lg:py-10 relative">
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="flex flex-1 flex-col gap-2">
                            <div className="flex flex-1 flex-col relative group">
                                <div className="relative w-full h-full">
                                    <Image src="/Images/room1.jpg" alt="Raum 1" width={800} height={600} className="object-cover w-full h-full group-hover:blur-sm transition duration-300" />
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-15 text-white text-center p-2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                    <h3 className="text-lg font-bold">Exklusiver Haarstylingbereich</h3>
                                    <p className="text-sm">Unser exklusiver Haarstylingbereich bietet eine luxuriöse Umgebung mit modernen Einrichtungen und stilvollem Design..</p>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-row gap-2">
                                <div className="flex flex-1 flex-col relative group">
                                    <div className="relative w-full h-full">
                                        <Image src="/Images/room2.jpg" alt="Raum 2" width={800} height={600} className="object-cover w-full h-full group-hover:blur-sm transition duration-300" />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-15 text-white text-center p-2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                        <h3 className="text-lg font-bold">Luxuriöser Kosmetikbereich</h3>
                                        <p className="text-sm hidden md:block">Unser eleganter Kosmetikbereich bietet eine luxuriöse Umgebung für Ihre Schönheitsbehandlungen. Genießen Sie professionelle Pflege und Behandlung in einem stilvollen Ambiente.</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col relative group">
                                    <div className="relative w-full h-full">
                                        <Image src="/Images/room3.jpg" alt="Raum 3" width={800} height={600} className="object-cover w-full h-full group-hover:blur-sm transition duration-300" />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-15 text-white text-center p-2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                        <h3 className="text-lg font-bold">Stilvolles Haarstyling</h3>
                                        <p className="text-sm hidden md:block">Unser eleganter Haarstylingbereich bietet modernste Einrichtungen und eine entspannende Atmosphäre für erstklassige Haarpflege und -styling. Genießen Sie die Aussicht durch große Fenster, während unsere Experten sich um Ihr Haar kümmern..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                            <div className="flex flex-1 flex-row gap-2">
                                <div className="flex flex-1 flex-col relative group">
                                    <div className="relative w-full h-full">
                                        <Image src="/Images/room9.jpg" alt="Raum 4" width={800} height={600} className="object-cover w-full h-full group-hover:blur-sm transition duration-300" />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-15 text-white text-center p-2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                        <h3 className="text-lg font-bold">Einladender Wartebereich</h3>
                                        <p className="text-sm hidden md:block">Unser stilvoller Wartebereich bietet eine ruhige und komfortable Umgebung, in der Sie sich vor Ihrer Behandlung entspannen können.</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col relative group">
                                    <div className="relative w-full h-full">
                                        <Image src="/Images/room5.jpg" alt="Raum 5" width={800} height={600} className="object-cover w-full h-full group-hover:blur-sm transition duration-300" />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-15 text-white text-center p-2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                        <h3 className="text-lg font-bold">Entspannender Hair SPA Bereich</h3>
                                        <p className="text-sm hidden md:block">Unser Hair SPA Bereich bietet eine beruhigende Atmosphäre mit modernen Waschstationen und einer grünen Wand, die zur Entspannung und Revitalisierung Ihres Haares beiträgt. Genießen Sie eine luxuriöse Pflege in einem stilvollen Ambiente.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col relative group">
                                <div className="relative w-full h-full">
                                    <Image src="/Images/room.jpg" alt="Raum 6" width={800} height={600} className="object-cover w-full h-full group-hover:blur-sm transition duration-300" />
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-15 text-white p-2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-center">
                                    <h3 className="text-lg font-bold">Medizinische Fußpflege</h3>
                                    <p className="text-sm ">Unser spezialisierter Raum für medizinische Fußpflege bietet eine ruhige und sterile Umgebung, um Ihre Füße professionell zu pflegen und zu behandeln. Genießen Sie eine hochwertige Behandlung durch zertifizierte Fachkräfte, die Ihre Fußgesundheit und Ihr Wohlbefinden fördern.</p>
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