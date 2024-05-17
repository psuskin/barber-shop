import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';


// const categories = [
//     { label: "All", value: "", isActive: false },
//     { label: "Hair", value: "Hair", isActive: true },
//     { label: "Beard", value: "Beard", isActive: false },
//     { label: "Skin Care", value: "Skin Care", isActive: false },
//     { label: "Nail", value: "Nail", isActive: false },
//     { label: "Massage", value: "Massage", isActive: false },
//     { label: "Hair Removal", value: "Hair Removal", isActive: false },
//     { label: "Makeup", value: "Makeup", isActive: false },
// ];


const productsList = [
    {
        image: "/Images/product1.jpg",
        title: "Haircut & Styling",
        categories: ["Hair Services"],
    },
    {
        image: "/Images/product2.jpg",
        title: "Beard Trim",
        categories: ["Beard Services"],
    },
    {
        image: "/Images/product3.jpg",
        title: "Facial Treatment",
        categories: ["Skin Care"],
    },
    {
        image: "/Images/product4.jpg",
        title: "Manicure & Pedicure",
        categories: ["Nail Services"],
    },
    {
        image: "/Images/product5.jpg",
        title: "Spa Massage",
        categories: ["Massage Services"],
    },
    {
        image: "/Images/product8.jpg",
        title: "Waxing",
        categories: ["Hair Removal"],
    },
    {
        image: "/Images/product7.jpg",
        title: "Makeup",
        categories: ["Makeup Services"],
    },
    {
        image: "/Images/product8.jpg",
        title: "Hair Color",
        categories: ["Hair Services"],
    },
];


const Product = () => {


    return (
        <section className="light py-10 lg:py-20 lg:mb-48 mb-0 md:mb-48 bg-gray-100 dark:bg-[#0b1727] text-black text-opacity-80 dark:text-white">
            <div className="container px-4 mx-auto">
                <div className="justify-center mb-6 md:mb-12 space-y-4">
                    <h3 className="text-xl lg:text-[2rem] font-bold text-[#D4A745] font-Dancing">Produkte</h3>
                    <h1 className='text-xl lg:text-[1.5rem] font-semibold'>Entdecken Sie unser exquisites Sortiment an Schönheitsprodukten</h1>
                </div>

                <div className="grid grid-cols-12 gap-2 md:gap-6">
                    {productsList.map((product, i) => (
                        <div
                            className="col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3"
                            key={i}
                        >
                            <div className="rounded-xl overflow-hidden duration-300 relative hover:-translate-y-1">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={400}
                                    height={300}
                                    className="object-cover"
                                />
                                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-xl bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 backdrop-blur scale-90 opacity-0 flex flex-col justify-center items-center transition duration-300 text-center hover:scale-100 hover:opacity-100 p-4">
                                    <h5 className="text-xl font-medium mb-2">
                                        {product.title}
                                    </h5>
                                    <p className="mb-0">{product.categories.join(", ")}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;