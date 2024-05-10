"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./style.module.css"
import { Link as ScrollLink } from "react-scroll";


const Navbar = () => {

  const [open, setOpen] = useState(false);

  const toggleMenus = () => {
    setOpen((prevOpen) => !prevOpen);
  };

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


  const navLinks = [
    { title: "Service", href: "service" },
    { title: "Gallery", href: "gallery" },
    { title: "About", href: "about" },
    { title: "Contact", href: "contact" },
  ];

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const MobileNavLink = ({ title, href }) => {
    return (
      <motion.div
        variants={mobileLinkVars}
        className="text-5xl uppercase text-black"
      >
        <ScrollLink
          to={href}
          smooth={true}
          duration={800}
          onClick={toggleMenus}
        >
          {title}
        </ScrollLink>
      </motion.div>
    );
  };

  return (
    <div className={`fixed w-full mx-auto text-white z-30 transition-transform duration-300 transform ${show ? '-translate-y-full' : 'translate-y-0'}`}>
      <nav className="sticky-navbar">
        <div className="container mx-auto bg-transparent ">
          <div className="flex justify-between items-center mx-auto w-full py-6 backdrop-blur-md rounded-b-md" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <div>
              <ScrollLink
                to="home"
                className="flex items-center gap-1 font-bold text-gray-100 cursor-pointer pl-8"
                spy={true}
                smooth={true}
                duration={800}
              >
                <h1 className="uppercase text-xl">Barber Shop</h1>
              </ScrollLink>
            </div>
            {/* Primary menu */}
            <div
              // className="hidden lg:flex gap-8 text-lg"
              className={`${styles.content__item} hidden lg:flex gap-8 text-lg pr-8`}

            >
              {navLinks.map((link, index) => (
                <ScrollLink
                  key={index}
                  to={link.href}
                  smooth={true}
                  duration={800}
                  // className="nav-link cursor-pointer text-gray-100 hover:text-gray-200"
                  className={`${styles.linkMneme} ${styles.link}`}
                >
                  {link.title}
                </ScrollLink>
              ))}
            </div>

            {/* Secondary menu */}
            <div className="flex items-center lg:hidden pr-8">
              {open ? (
                <button
                  className="text-gray-100 focus:outline-none"
                  onClick={toggleMenus}
                >
                  <AiOutlineClose className="h-6 w-6" />
                </button>
              ) : (
                <button
                  className="text-gray-100 focus:outline-none"
                  onClick={toggleMenus}
                >
                  <AiOutlineBars className="h-6 w-6" />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-[#D4A745] text-black p-10 z-50"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-3xl text-black uppercase">Barber Shop</h1>
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleMenus}
                >
                  <AiOutlineClose className="h-6 w-6" />
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden" key={index}>
                      <MobileNavLink
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
