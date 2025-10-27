"use client";
import { motion } from "motion/react";

const ConsultationHeader = ({ isInView }: { isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="text-center mb-8"
    >
      <h2 className="text-2xl font-bold">فرم دریافت مشاوره</h2>
      <p className="text-gray-600 mt-2">
        برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید؟ فرم زیر را تکمیل کنید
        تا مشاوران ما به صورت کاملاً رایگان شما را راهنمایی کنند.
      </p>
    </motion.div>
  );
};

export default ConsultationHeader;
