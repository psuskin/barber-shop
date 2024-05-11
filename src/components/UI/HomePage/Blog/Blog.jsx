import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { FaClock } from "react-icons/fa";
import styles from "./blog.module.css"
import { motion } from "framer-motion"

const blogs = [
    {
        title: "5 Trendy Hairstyles for Men in 2024",
        description:
            "Explore the latest hairstyles that are trending for men this year, from classic cuts to modern twists.",
        author: "Barber Bob",
        date: "21 Jun, 2024",
        image: "/Images/14.jpg",
    },
    {
        title: "How to Achieve the Perfect Beard Trim",
        description:
            "Learn the secrets to achieving a perfectly groomed beard with our step-by-step guide.",
        author: "Barber Joe",
        date: "21 Jun, 2024",
        image: "/Images/14.jpg",
    },
    {
        title: "Top Shaving Tips for a Smooth Shave",
        description:
            "Discover the best shaving techniques and products to achieve a smooth and comfortable shave every time.",
        author: "Barber Sam",
        date: "21 Jun, 2024",
        image: "/Images/14.jpg",
    },
];


const BlogItem = ({ blog }) => {
    const { title, description, author, date, image } = blog;

    return (
        <article className="shadow-lg bg-white rounded-lg overflow-hidden mt-6 pb-2">
            <Image src={image} alt={title} width={800} height={500} className=" transition-transform duration-300 hover:scale-105" />
            <div className="p-3 pb-8 lg:p-6">
                <h4 className="font-medium text-2xl mb-1">{title}</h4>
                <p className="opacity-80 mb-2 flex">
                    <span className="mr-2">
                        By{" "}
                        <a href="#!" className="text-[#D4A745]">
                            {author}
                        </a>
                    </span>
                    <span className="flex gap-2 items-center">
                        <FaClock className="ml-1" />
                        <span>{date}</span>
                    </span>
                </p>
                <p className="opacity-60 mt-3 mb-6">{description}</p>
                <a
                    href="#!"
                    className="bg-transparent hover:bg-[#D4A745] border border-[#D4A745] hover:text-white py-2 px-5 rounded transition"
                >
                    Read More
                </a>
            </div>
        </article>
    );
};

BlogItem.propTypes = {
    blog: PropTypes.object.isRequired,
};

const FeaturedBlogItem = () => {
    return (
        <article>
            <div className="grid grid-cols-12 items-center gap-6">
                <div className="col-span-12 lg:col-span-7">
                    <Image
                        width={800}
                        height={500}
                        src="/Images/barber10.jpg"
                        alt="Barber Interview"
                        className="max-w-full h-auto rounded-md"
                    />
                </div>
                <div className="col-span-12 lg:col-span-5">
                    <div className="mt-6 lg:mt-0 lg:pl-6">
                        <h4 className="font-medium text-2xl md:text-4xl md:leading-[50px] mb-2">
                            Insights from a Professional Barber
                        </h4>
                        <p className="md:text-lg opacity-80 mt-3 mb-6">
                            Gain valuable insights into the world of professional barbering, including
                            tips for success and challenges faced in the industry. Learn about the
                            latest trends and techniques shaping the barbering landscape.
                        </p>
                        <div className="text-base leading-5 flex items-center">
                            <div className="mr-2">
                                <Image
                                    width={50}
                                    height={50}
                                    src="/Images/barber.jpg"
                                    alt="Barber Alan Bell"
                                    className="h-auto max-w-full rounded-full border border-border"
                                />
                            </div>
                            <div className="opacity-80">
                                <p>
                                    By <b>Alan Bell</b>
                                </p>
                                <p className="text-sm opacity-75">April 25th, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

const Blog = () => {
    return (
        <section className="py-14 md:py-24 text-stone-800 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12 justify-center">
                    <div className="col-span-12 lg:col-span-8 lg:col-end-11 text-left">
                        <div className="flex-none lg:flex items-center gap-2 text-[32px] lg:text-[45px] font-bold">
                            <h1> Barbering Experience with Our Insightful</h1>
                            <motion.p
                                whileInView={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className={styles.title}>Blogs
                            </motion.p>
                        </div>
                        <motion.p
                            whileInView={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 2 }}
                            className="text-lg font-medium transition-opacity duration-500 ease-in-out delay-300 mb-9 text-gray-700">
                            Explore our collection of articles tailored to enhance your understanding
                            of barbering techniques, trends, and industry insights. Learn how to
                            perfect your craft and stay ahead in the world of barbering.
                        </motion.p>
                        <a
                            href="#!"
                            className="bg-[#D4A745] hover:bg-opacity-90 text-white font-bold border border-[#D4A745] py-3 px-7 rounded transition"
                        >
                            Browse All Posts
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-12 items-center mt-12 gap-6 px-0 lg:px-16">
                    <div className="col-span-12">
                        <FeaturedBlogItem />
                    </div>
                    {blogs.map((blog, i) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="col-span-12 md:col-span-6 lg:col-span-4" key={i}>
                            <BlogItem blog={blog} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Blog;