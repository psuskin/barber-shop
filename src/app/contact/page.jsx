import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-3xl md:text-4xl font-semibold mb-6 mt-36">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                {/* Contact Information */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                    <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className="text-gray-500 mr-2" />
                        <p>123 Beauty Avenue, City, Country</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaPhoneAlt className="text-gray-500 mr-2" />
                        <p>(123) 456-7890</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaEnvelope className="text-gray-500 mr-2" />
                        <p>info@beautysalon.com</p>
                    </div>
                </div>
                {/* Contact Form */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
                    <form>
                        <div className="mb-4">
                            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            <textarea rows="4" placeholder="Your Message" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"></textarea>
                        </div>
                        <button type="submit" className="bg-[#D4A745] text-white px-6 py-3 rounded hover:bg-[#c59e49e5] transition-colors">Send Message</button>
                    </form>
                </div>
            </div>
            {/* Social Media Links */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors"><FaInstagram className="text-2xl" /></a>
                    <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors"><FaFacebook className="text-2xl" /></a>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
