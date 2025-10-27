import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ConsultationFormData } from "./ConsultationForm";

interface Props {
  register: UseFormRegister<ConsultationFormData>;
  errors: FieldErrors<ConsultationFormData>;
}

const serviceOptions = [
  "خدمات سئو",
  "طراحی وب سایت",
  "اتوماسیون و بازاریابی",
  "کمپین‌های بازاریابی و تبلیغاتی",
  "خدمات تولید محتوا",
];

const ConsultationServices = ({ register, errors }: Props) => (
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
);

export default ConsultationServices;
