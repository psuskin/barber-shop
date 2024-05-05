import Image from 'next/image';
import styles from './pricing.module.css'

const Pricing = () => {

    const priceItems = [
        { title: "Basic Haircut", description: "Classic haircut with clippers for a timeless look. Our skilled barbers ensure a clean and stylish cut.", price: "$25" },
        { title: "Scissor Cut", description: "Precision scissor cut for a tailored hairstyle. Let our experts give you the perfect look with precise techniques.", price: "$30" },
        { title: "Beard Trim", description: "Expert beard trim to shape and refine your facial hair. Our barbers will sculpt your beard to complement your features.", price: "$15" },
        { title: "Beard Trim", description: "Expert beard trim to shape and refine your facial hair. Our barbers will sculpt your beard to complement your features.", price: "$15" },
        { title: "Beard Trim", description: "Expert beard trim to shape and refine your facial hair. Our barbers will sculpt your beard to complement your features.", price: "$15" },

    ];
    return (
        <div className={styles.pricingContainer}>
            <div className={styles.priceSection}>
                <div className={styles.textContainer}>
                    <h3>Pricing</h3>
                    <h1>Quality services at unbeatable prices</h1>
                </div>
                <div className={styles.priceItemContainer}>
                    {priceItems.map((item, index) => (
                        <div key={index} className={styles.priceItem}>
                            <div className={styles.priceInfo}>
                                <p className={styles.priceTitle}>{item.title}</p>
                                <p className={styles.priceDescription}>{item.description}</p>
                                <div className={styles.dashedLine}></div>
                            </div>
                            <p className={styles.price}>{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.bannerSection}>
                <div className={styles.bannerImage}>
                    <Image src="/Images/3.jpg" alt="Pricing Banner" fill objectFit="cover" />
                </div>
            </div>
        </div>
    );
};

export default Pricing;