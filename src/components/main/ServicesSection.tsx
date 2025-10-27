"use client";

import { services } from "@/constant/mockData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const ServicesSection = () => {
  return (
    <div className="relative mb-4">
      <div
        className="h-[240px] text-white"
        style={{
          background: "linear-gradient(to bottom, #43217C,#7A3DE2)",
        }}
      >
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-center py-9"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها
        </motion.h1>
      </div>

      <div className="relative -mt-32 px-4 max-w-[1300px] mx-auto">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
          <button className="swiper-button-prev bg-white p-2 rounded-full shadow-lg">
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
          <button className="swiper-button-next bg-white p-2 rounded-full shadow-lg">
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>

        <Swiper
          spaceBetween={20}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <motion.div
                className="bg-white rounded-2xl p-6 flex flex-col items-center border-2 border-gray-200 text-center h-[270px]"
                initial={{ scale: 0.8, opacity: 0 }} 
                whileInView={{ scale: 1, opacity: 1 }} 
                viewport={{ once: true, amount: 0.3 }} 
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <service.icon className="w-16 h-16 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 overflow-y-auto">{service.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesSection;