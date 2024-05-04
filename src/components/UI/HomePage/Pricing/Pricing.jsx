import styles from './pricing.module.css'

const Pricing = () => {

    const priceItems = [
        { title: "Basic Haircut", price: "$25" },
        { title: "Scissor Cut", price: "$30" },
        { title: "Scissor Cut", price: "$30" },
        { title: "Scissor Cut", price: "$30" },
        { title: "Scissor Cut", price: "$30" },
        { title: "Scissor Cut", price: "$30" },

    ];
    return (
        <div className={styles.pricingContainer}>
            <div className={styles.textContainer}>
                <h3>Pricing</h3>
                <h1>Quality services at unbeatable prices</h1>
            </div>
            {priceItems.map((item, index) => (
                <div key={index} className={styles.priceItem}>
                    <p className={styles.priceTitle}>{item.title}</p>
                    <p className={styles.price}>{item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Pricing;