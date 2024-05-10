import { FaFacebook, FaInstagram, FaMap } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import styles from './footer.module.css';
import Image from 'next/image';

function Footer() {
    return (
        // <footer className="footer bg-black">
        //     <div className="footerContent container mx-auto flex-row lg:flex justify-between p-10">
        //         <div className="footerLeft flex flex-col text-white">
        //             <h2 className="footerLogo text-xl font-bold mb-2">BarberShop</h2>
        //             <p className="footerDescription mb-4">Providing top-notch grooming services</p>
        //             <p className="text-gray-400">Humburg, Germany, 5893</p>
        //             <p className="text-gray-400">0923673434456</p>
        //             <p className="text-gray-400">BarberShop@gmail.com</p>
        //             <div className="socialIcons mt-6 flex gap-6">
        //                 <a href="#" className="icon"><FaFacebook className="text-white text-lg" /></a>
        //                 <a href="#" className="icon"><FaInstagram className="text-white text-lg" /></a>
        //                 <a href="#" className="icon"><FaTwitter className="text-white text-lg" /></a>
        //             </div>
        //         </div>
        //         <div className="footerRight">
        //             <div className="mapSection text-center w-full">
        //                 <h3 className="text-lg font-bold mb-4">BarberShop Location</h3>
        //                 <iframe
        //                     className="map w-full"
        //                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.034759532077!2d-73.99112148561158!3d40.73787528932278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25896f964c2eb%3A0x3fb19f9e7e93c033!2sBarber%20Shop!5e0!3m2!1sen!2sus!4v1638969833464!5m2!1sen!2sus"
        //                     allowFullScreen={true}
        //                     loading="lazy"
        //                     title="BarberShop Location"
        //                 ></iframe>
        //             </div>
        //         </div>
        //     </div>
        // </footer>


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

            <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <p>
                            <span className="text-xs uppercase tracking-wide text-gray-500"> Contact Us </span>

                            <a href="#" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
                                Book an Appointment
                            </a>
                        </p>

                        <ul className="mt-8 space-y-1 text-sm text-gray-700">
                            <li>Monday to Friday: 9am - 7pm</li>
                            <li>Saturday: 9am - 5pm</li>
                            <li>Sunday: Closed</li>
                        </ul>

                        <ul className="mt-8 flex gap-6">
                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Facebook</span>

                                    <FaFacebook className='w-8 h-8' />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Instagram</span>

                                    <FaInstagram className='w-8 h-8' />
                                </a>
                            </li>



                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <p className="font-medium text-gray-900">Services</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Haircuts </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Beard Trims </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Shaves </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Hair Coloring </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Scalp Treatments </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">About Us</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Our Story </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Our Values </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-100 pt-12">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap gap-4 text-xs">
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
                            </li>
                        </ul>

                        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                            &copy; 2024. Barber Shop. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
