"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { User, Mail, Phone } from "lucide-react";
import { useRef } from "react";
import { useInView, motion } from "motion/react";

const consultationSchema = z.object({
  name: z.string().min(2, "نام و نام خانوادگی را وارد کنید"),
  email: z.string().email("ایمیل معتبر وارد کنید"),
  phone: z.string().min(5, "شماره تماس معتبر وارد کنید"),
  services: z.array(z.string()).min(1, "یک سرویس را انتخاب کنید"),
  message: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

const ConsultationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: { services: [] },
  });

  const onSubmit = (data: ConsultationFormData) => {
    console.log("Submitted:", data);
    reset();
    alert("درخواست شما ثبت شد!");
  };

  const serviceOptions = [
    "خدمات سئو",
    "طراحی وب سایت",
    "اتوماسیون و بازاریابی",
    "کمپین‌های بازاریابی و تبلیغاتی",
    "خدمات تولید محتوا",
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="max-w-[1265px] mx-auto p-8 bg-white rounded-2xl shadow-lg mt-[100px] my-5"
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold">فرم دریافت مشاوره</h2>
        <p className="text-gray-600 mt-2">
          برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید؟ فرم زیر را تکمیل کنید
          تا مشاوران ما به صورت کاملان رایگان شمارا راهنمایی کنند.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="space-y-6"
        dir="rtl"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              type: "text",
              placeholder: "نام و نام خانوادگی",
              icon: User,
              name: "name",
            },
            { type: "email", placeholder: "ایمیل", icon: Mail, name: "email" },
            {
              type: "text",
              placeholder: "شماره تماس",
              icon: Phone,
              name: "phone",
            },
          ].map(({ type, placeholder, icon: Icon, name }) => (
            <div key={name} className="relative">
              <input
                type={type}
                placeholder={placeholder}
                className={`peer w-full border rounded-xl pr-10 pl-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors[name as keyof ConsultationFormData]
                    ? "border-red-500"
                    : ""
                }`}
                {...register(name as keyof ConsultationFormData)}
              />
              <div className="absolute right-3 top-3 pointer-events-none">
                <Icon className="text-red-500" />
              </div>
              {errors[name as keyof ConsultationFormData] && (
                <p className="text-red-500 text-sm mt-2">
                  {
                    errors[name as keyof ConsultationFormData]
                      ?.message as string
                  }
                </p>
              )}
            </div>
          ))}
        </div>

        <div>
          <p className="mb-2 text-gray-700 font-medium text-right">
            نوع سرویس‌ها را انتخاب کنید:
          </p>
          <div className="flex flex-wrap gap-6 justify-start">
            {serviceOptions.map((service) => (
              <label
                key={service}
                className="flex items-center gap-3 border rounded-xl px-6 py-3 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  value={service}
                  {...register("services")}
                  className="w-5 h-5 accent-purple-500"
                />
                <span className="text-right">{service}</span>
              </label>
            ))}
          </div>
          {errors.services && (
            <p className="text-red-500 text-sm mt-1 text-right">
              {errors.services.message}
            </p>
          )}
        </div>

        <div>
          <textarea
            placeholder="در مورد درخواست خود بنویسید (اختیاری)"
            className="w-full border rounded-xl px-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={5}
            {...register("message")}
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-[350px] bg-black text-white py-2 rounded-xl hover:bg-purple-700 transition-colors"
          >
            ثبت درخواست
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default ConsultationForm;