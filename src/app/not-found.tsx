import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
      <h1 className="text-7xl font-extrabold text-purple-700 mb-4">۴۰۴</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        صفحه مورد نظر پیدا نشد!
      </h2>
      <p className="text-gray-600 mb-8">
        ممکن است آدرس را اشتباه وارد کرده باشید یا صفحه حذف شده باشد.
      </p>

      <Link
        href="/"
        className="flex items-center gap-2 bg-purple-700 text-white px-6 py-3 rounded-xl hover:bg-purple-800 transition-all"
      >
        <Home className="w-5 h-5" />
        بازگشت به خانه
      </Link>
    </div>
  );
}