import { UseFormRegister } from "react-hook-form";
import { ConsultationFormData } from "./ConsultationForm";

const ConsultationTextarea = ({
  register,
}: {
  register: UseFormRegister<ConsultationFormData>;
}) => (
  <textarea
    placeholder="در مورد درخواست خود بنویسید (اختیاری)"
    className="w-full border rounded-xl px-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-purple-500"
    rows={5}
    {...register("message")}
  ></textarea>
);

export default ConsultationTextarea;
