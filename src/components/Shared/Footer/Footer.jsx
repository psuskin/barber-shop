import Link from 'next/link';
import { FaFacebook, FaInstagram, FaMap, FaTiktok } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="lg:grid lg:grid-cols-5 bg-gray-200">
            <div className="relative block lg:col-span-2 lg:h-full">
                <div className="mapSection h-full">
                    <iframe
                        className="map h-full w-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.034759532077!2d-73.99112148561158!3d40.73787528932278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25896f964c2eb%3A0x3fb19f9e7e93c033!2sBarber%20Shop!5e0!3m2!1sen!2sus!4v1638969833464!5m2!1sen!2sus"
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

                        <ul className="mt-8 space-y-1 text-sm text-gray-700">
                            <li>Montag bis Freitag: 9 Uhr - 19 Uhr</li>
                            <li>Samstag: 9 Uhr - 17 Uhr</li>
                            <li>Sonntag: Geschlossen</li>
                        </ul>

                        <ul className="mt-8 flex gap-6">
                            <li>
                                <Link href="#">
                                    <FaFacebook className='w-8 h-8 text-gray-700 transition hover:opacity-75' />
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    <FaInstagram className='w-8 h-8 text-gray-700 transition hover:opacity-75' />
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    <FaTiktok className='w-8 h-8 text-gray-700 transition hover:opacity-75' />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <p className="font-medium text-gray-900">Dienstleistung</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link href="#">
                                        <span className="text-gray-700 transition hover:opacity-75"> Haarwelt </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <span className="text-gray-700 transition hover:opacity-75"> Hair SPA </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <span className="text-gray-700 transition hover:opacity-75"> Med. Fusspflege </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <span className="text-gray-700 transition hover:opacity-75"> Kosmetik </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <span className="text-gray-700 transition hover:opacity-75"> Ästhetische Behandlung </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Über Uns</p>
                            <ul className="mt-6 space-y-4 text-sm">
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
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-100 pt-12">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap gap-4 text-xs">
                            <li>
                                <Link href="#">
                                    <span className="text-gray-500 transition hover:opacity-75"> Allgemeine Geschäftsbedingungen </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className="text-gray-500 transition hover:opacity-75"> Datenschutzerklärung </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className="text-gray-500 transition hover:opacity-75"> Cookies </span>
                                </Link>
                            </li>
                        </ul>

                        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                            &copy; 2024. Friseursalon. Alle Rechte vorbehalten.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
