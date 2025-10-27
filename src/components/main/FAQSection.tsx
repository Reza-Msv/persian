"use client";

import { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { useInView, motion } from "motion/react";
import { faqData } from "@/constant/mockData";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      ref={ref}
      className="max-w-[1265px] mx-auto p-8 bg-white rounded-2xl border border-gray-200 mt-20 my-16"
    >
      <div className="md:flex md:gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0 flex flex-col gap-2"
        >
          <h2 className="text-3xl font-bold mb-4">FAQ</h2>
          <h2 className="mb-2 text-3xl font-bold">
            سوالات متداولی که از ما می‌پرسید
          </h2>
          <p className="text-gray-700 text-xl leading-12">
            سوالات متداولی که ممکن است نیاز شما نیز باشند <br />
            در اینجا پاسخ داده شده اند.
          </p>
        </motion.div>

        <div className=" md:w-2/3 space-y-6">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-start px-6 py-5 text-right focus:outline-none hover:bg-gray-100 transition text-lg"
              >
                <span className="whitespace-normal">{item.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 cursor-pointer mt-1" />
                ) : (
                  <Plus className="w-5 h-5 cursor-pointer mt-1" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-700 border-t border-gray-200">
                  {item.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
