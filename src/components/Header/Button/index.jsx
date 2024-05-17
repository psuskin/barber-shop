import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './style.module.css';

const Button = ({ isActive, toggleMenu, width, height, primaryColor, secondaryColor, textColor, fontSize }) => {
    return (
        <div
            className={styles.button}
            style={{ width: width, height: height }}
        >
            <motion.div
                className={styles.slider}
                animate={{ top: isActive ? "-100%" : "0%" }}
                transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
            >
                <div
                    className={styles.el}
                    style={{ backgroundColor: primaryColor }}
                    onClick={() => { toggleMenu() }}
                >
                    <PerspectiveText label="Menu" textColor={textColor} fontSize={fontSize} />
                </div>
                <div
                    className={styles.el}
                    style={{ backgroundColor: secondaryColor }}
                    onClick={() => { toggleMenu() }}
                >
                    <PerspectiveText label="Close" textColor={textColor} fontSize={fontSize} />
                </div>
            </motion.div>
        </div>
    );
};

const PerspectiveText = ({ label, textColor, fontSize }) => {
    return (
        <div className={styles.perspectiveText} style={{ color: textColor, fontSize: fontSize }}>
            <p>{label}</p>
            <p>{label}</p>
        </div>
    );
};

Button.propTypes = {
    isActive: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    textColor: PropTypes.string,
    fontSize: PropTypes.string
};

Button.defaultProps = {
    width: '100px',
    height: '40px',
    primaryColor: '#D4A745',
    secondaryColor: 'black',
    textColor: '#fff',
    fontSize: '16px'
};

PerspectiveText.propTypes = {
    label: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    fontSize: PropTypes.string
};

export default Button;
