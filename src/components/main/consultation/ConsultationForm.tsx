"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRef } from "react";
import { useInView, motion } from "motion/react";
import ConsultationInputs from "./ConsultationInputs";
import ConsultationServices from "./ConsultationServices";
import ConsultationTextarea from "./ConsultationTextarea";
import ConsultationHeader from "./ConsultationHeader";

const consultationSchema = z.object({
  name: z.string().min(2, "نام و نام خانوادگی را وارد کنید"),
  email: z.string().email("ایمیل معتبر وارد کنید"),
  phone: z.string().min(5, "شماره تماس معتبر وارد کنید"),
  services: z.array(z.string()).min(1, "یک سرویس را انتخاب کنید"),
  message: z.string().optional(),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;

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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="max-w-[1265px] mx-auto p-8 bg-white rounded-2xl shadow-lg mt-[100px] my-5"
    >
      <ConsultationHeader isInView={isInView} />

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="space-y-6"
        dir="rtl"
      >
        <ConsultationInputs register={register} errors={errors} />
        <ConsultationServices register={register} errors={errors} />
        <ConsultationTextarea register={register} />

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
