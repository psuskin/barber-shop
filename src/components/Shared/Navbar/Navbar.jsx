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

        <Link href="/" className="text-2xl font-bold text-[#D4A745]">Barber Shop</Link>

        <ul className="flex space-x-6">
          <NavItem href="/services">Services</NavItem>
          <NavItem href="/gallery">Gallery</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </ul>
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
