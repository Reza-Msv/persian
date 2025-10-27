import { User, Mail, Phone } from "lucide-react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ConsultationFormData } from "./ConsultationForm";

interface Props {
  register: UseFormRegister<ConsultationFormData>;
  errors: FieldErrors<ConsultationFormData>;
}

const inputFields = [
  { type: "text", placeholder: "نام و نام خانوادگی", icon: User, name: "name" },
  { type: "email", placeholder: "ایمیل", icon: Mail, name: "email" },
  { type: "text", placeholder: "شماره تماس", icon: Phone, name: "phone" },
];

const ConsultationInputs = ({ register, errors }: Props) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {inputFields.map(({ type, placeholder, icon: Icon, name }) => (
      <div key={name} className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className={`peer w-full border rounded-xl pr-10 pl-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            errors[name as keyof ConsultationFormData] ? "border-red-500" : ""
          }`}
          {...register(name as keyof ConsultationFormData)}
        />
        <div className="absolute right-3 top-3 pointer-events-none">
          <Icon className="text-red-500" />
        </div>
        {errors[name as keyof ConsultationFormData] && (
          <p className="text-red-500 text-sm mt-2">
            {errors[name as keyof ConsultationFormData]?.message as string}
          </p>
        )}
      </div>
    ))}
  </div>
);

export default ConsultationInputs;
