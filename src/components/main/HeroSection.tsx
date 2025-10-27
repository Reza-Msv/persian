"use client";

import Image from "next/image";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="bg-[#FCFCFC] min-h-[500px] px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-around p-8 gap-10 md:gap-0 w-full mx-auto">
      <div className="flex-1 flex flex-col justify-around gap-5 text-center md:text-right items-center md:items-start">
        <motion.h1
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold text-gray-900"
        >
          کمپین‌های بازاریابی و تبلیغاتی
        </motion.h1>

        <motion.p
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-4 text-gray-700 text-lg md:text-lg max-w-md"
        >
          آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره رایگان ما
          به شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین حالا قدم اول را
          بردارید!
        </motion.p>

        <div className="flex flex-col items-center md:items-start gap-4">
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-gray-500 text-lg md:text-xl"
          >
            جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید
          </motion.span>

          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="bg-[#7A3DE2] text-white text-lg md:text-xl font-bold px-6 py-3 rounded-md hover:bg-[#6829c9] transition"
          >
            دریافت مشاوره
          </motion.button>
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-start">
        <Image
          src="/assets/image/frame.svg"
          width={690}
          height={428}
          alt="frame"
          className="w-[90%] md:w-auto h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
