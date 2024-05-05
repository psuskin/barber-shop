import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import styles from './footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLeft}>
                    <div>
                        <h2 className={styles.footerLogo}>BarberShop</h2>
                        <p className={styles.footerDescription}>Providing top-notch grooming services</p>

                        <p>Humburg, Germany, 5893</p>
                        <p>0923673434456</p>
                        <p>BarberShop@gmail.com</p>
                    </div>
                    <div className={styles.socialIcons}>
                        <a href="#" className={styles.icon}><FaFacebook /></a>
                        <a href="#" className={styles.icon}><FaInstagram /></a>
                        <a href="#" className={styles.icon}><FaXTwitter /></a>
                    </div>
                </div>

                <div className={styles.footerRight}>
                    <div className={styles.mapSection}>
                        <iframe
                            className={styles.map}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.034759532077!2d-73.99112148561158!3d40.73787528932278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25896f964c2eb%3A0x3fb19f9e7e93c033!2sBarber%20Shop!5e0!3m2!1sen!2sus!4v1638969833464!5m2!1sen!2sus"
                            allowFullScreen="true"
                            loading="lazy"
                            title="BarberShop Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
