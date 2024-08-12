import Link from 'next/link';
import { FaFacebook, FaInstagram, FaMap, FaTiktok } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="lg:grid lg:grid-cols-5 bg-gray-200">
            <div className="relative block lg:col-span-2 lg:h-full">
                <div className="mapSection h-full">
                    <iframe
                        className="map h-full w-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.0491540611692!2d9.9193!3d53.556889999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4163bcb2de2e4fc7%3A0x62d619db6e9d58ce!2sHannis%20hairdressing%20and%20beauty%20salon!5e0!3m2!1sen!2sbd!4v1719252264566!5m2!1sen!2sbd"
                        allowFullScreen={true}
                        loading="lazy"
                        title="BarberShop Location"
                    ></iframe>

                </div>
            </div>

            <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8 lg:pr-20">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <p>
                            <span className="text-xs uppercase tracking-wide text-gray-500"> Kontaktieren Sie uns </span>

                            <Link href="#">
                                <span className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
                                    Termin buchen
                                </span>
                            </Link>
                        </p>

                        <ul className="mt-8 space-y-1 text-base text-gray-700">
                            <li className="flex items-center text-gray-700">
                                Di-Fr: 09:00 - 19:00
                                <br />
                                Samstag: 09:00 - 18:00
                                <br />
                                Sonntag: Geschlossen
                                <br />
                                Montag: Geschlossen
                            </li>
                        </ul>

                        <ul className="mt-8 flex gap-6">
                            <li>
                                <Link href="https://www.instagram.com/hannis_beautysalon?igsh=NnE0c3dsY3hydmZy" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className='w-8 h-8 text-gray-700 transition hover:opacity-75' />
                                </Link>
                            </li>

                            <li>
                                <Link href="https://www.tiktok.com/@hannishamburg?_t=8m7cTJlc6ML&_r=1" target="_blank" rel="noopener noreferrer">
                                    <FaTiktok className='w-8 h-8 text-gray-700 transition hover:opacity-75' />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <p className="font-medium text-lg text-gray-900">Dienstleistung</p>
                            <ul className="mt-6 space-y-4 text-base">
                                <li>
                                    <Link href="/services">
                                        <span className="text-gray-700 transition hover:opacity-75"> Haarwelt </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <span className="text-gray-700 transition hover:opacity-75"> Hair SPA </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <span className="text-gray-700 transition hover:opacity-75"> Med. Fusspflege </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <span className="text-gray-700 transition hover:opacity-75"> Kosmetik </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <span className="text-gray-700 transition hover:opacity-75"> Ästhetische Behandlung </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-lg text-gray-900">Über Uns</p>
                            <ul className="mt-6 space-y-4 text-base">
                                <li>
                                    <Link href="/about">
                                        <span className="text-gray-700 transition hover:opacity-75"> Unsere Geschichte </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <span className="text-gray-700 transition hover:opacity-75"> Das Team </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <span className="text-gray-700 transition hover:opacity-75"> Unsere Werte </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <span className="text-gray-700 transition hover:opacity-75"> Impressum </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-100 pt-12">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap gap-4 text-xs">
                            <li>
                                <Link href="#">
                                    <span className="text-gray-500 transition hover:opacity-75"> Cookies </span>
                                </Link>
                            </li>
                        </ul>

                        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                            &copy; 2024. HANNIS FRISEURSALON. Alle Rechte vorbehalten.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
