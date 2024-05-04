
// "use client"
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from 'framer-motion';
// import Button from "@/components/Header/Button";
// import Nav from "@/components/Header/Nav";
// import styles from '../../Header/style.module.css';

// const menu = {
//   open: {
//     width: "480px",
//     height: "90vh",
//     top: "-25px",
//     right: "-25px",
//     transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
//   },
//   closed: {
//     width: "100px",
//     height: "40px",
//     top: "0px",
//     right: "0px",
//     transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
//   }
// }

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const [isActive, setIsActive] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;
//     setShow(currentScrollY > lastScrollY);
//     setLastScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <nav className={`fixed w-full text-white z-10 transition-transform duration-300 transform ${show ? '-translate-y-full' : 'translate-y-0'}`}>
//       <div className="container mx-auto py-4 flex justify-between items-center">

//         <Link href="/" className="text-2xl font-bold text-[#D4A745]">Barber Shop</Link>

//         <motion.div
//           className={styles.menu}
//           variants={menu}
//           animate={isActive ? "open" : "closed"}
//           initial="closed"
//         >
//           <AnimatePresence>
//             {isActive && <Nav />}
//           </AnimatePresence>
//         </motion.div>
//         <Button className={styles.button} isActive={isActive} toggleMenu={() => { setIsActive(!isActive) }} />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShow(currentScrollY > lastScrollY);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full text-white z-10 transition-transform duration-300 transform ${show ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="container mx-auto py-4 flex justify-between items-center">

        <ul className="flex space-x-6">
          <NavItem href="/services">Services</NavItem>
          <NavItem href="/gallery">Gallery</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </ul>
        <Link href="/" className="text-2xl font-bold text-[#D4A745]">Barber Shop</Link>


        <p>Conatct Us</p>
      </div>
    </nav>
  );
};

const NavItem = ({ href, children }) => {
  return (
    <li>
      <Link href={href} className="hover:text-gray-300">{children}</Link>
    </li>
  );
};

export default Navbar;