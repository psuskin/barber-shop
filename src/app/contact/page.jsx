import Head from 'next/head';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <>
            <div className="min-h-screen bg-white mb-40">
                <div className="relative h-96 w-full">
                    <Image
                        fill
                        src="/Images/ff.jpg"
                        alt="Contact Banner"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white">
                            <h2 className="text-4xl font-Dancing font-bold">Kontakt</h2>
                            <div className="mt-4 border-t border-yellow-200"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:space-x-8 lg:p-8 p-4 container lg:w-3/5 mx-auto mt-36">
                    <div className="bg-yellow-50 p-8 lg:w-1/3">
                        <h3 className="text-2xl font-semibold text-[#D4A745]">Kontakt Informationen</h3>
                        <ul className="mt-4 space-y-4">
                            <li className="flex items-center text-gray-700">
                                <svg className="w-6 h-6 text-[#D4A745] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a4 4 0 004.22 0L21 8M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m16 0l-7.89 5.26a4 4 0 01-4.22 0L3 12"></path>
                                </svg>
                                Telefon: +1 203-123-0545606
                            </li>
                            <li className="flex items-center text-gray-700">
                                <svg className="w-6 h-6 text-[#D4A745] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2M21 8a4 4 0 10-8 0 4 4 0 008 0zM3 8a4 4 0 118 0 4 4 0 01-8 0z"></path>
                                </svg>
                                Adresse: 515 West Ave Norwalk, CT 06850
                            </li>
                            <li className="flex items-center text-gray-700">
                                <svg className="w-6 h-6 text-[#D4A745] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m4-4v8m6-4H4"></path>
                                </svg>
                                E-Mail: info@demo.com
                            </li>
                            <li className="flex items-center text-gray-700">
                                <svg className="w-6 h-6 text-[#D4A745] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12v2a2 2 0 002 2h4a2 2 0 002-2v-2M8 12V8a4 4 0 018 0v4m-8 0H7m1 0H5m1 0h8"></path>
                                </svg>
                                Mo-Fr: 08.00 - 19.00
                                <br />
                                Sonntag: Geschlossen
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white lg:p-8 lg:w-2/3 w-full">
                        <h3 className="text-2xl font-semibold text-[#D4A745]">Kontaktformular</h3>
                        <form className="mt-6 space-y-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="full-name" className="sr-only">
                                        Vollständiger Name
                                    </label>
                                    <input
                                        id="full-name"
                                        name="full-name"
                                        type="text"
                                        required
                                        className="appearance-none h-16 relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 text-lg focus:outline-none focus:ring-[#D4A745] focus:border-[#D4A745] sm:text-sm"
                                        placeholder="Vollständiger Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        E-Mail
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="appearance-none h-16 relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 text-lg focus:outline-none focus:ring-[#D4A745] focus:border-[#D4A745] sm:text-sm"
                                        placeholder="E-Mail"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Nachricht
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="appearance-none h-full lg:h-40 relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 text-lg focus:outline-none focus:ring-[#D4A745] focus:border-[#D4A745] sm:text-sm"
                                    placeholder="Nachricht"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="group relative lg:w-1/4 flex justify-center py-4 px-4 border border-transparent text-sm font-medium text-white bg-[#D4A745] hover:bg-[#b89334] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4A745]"
                                >
                                    Nachricht Senden
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;
