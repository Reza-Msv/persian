"use client";

import { navLinks } from "@/constant/navlinks";
import LogoSvg from "./LogoSvg";
import { CircleUser, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white w-full px-4 sm:px-6 py-3 sm:py-4 shadow-md relative z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* <button
            className="md:hidden p-2 border border-gray-200 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button> */}
          <LogoSvg />
        </div>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`transition-all duration-200 ${
                  isActive
                    ? "text-black font-bold text-lg lg:text-xl"
                    : "text-gray-500 text-base lg:text-lg hover:text-purple-700"
                }`}
                style={{ fontFamily: "BYekan" }}
              >
                {link.title}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center border border-gray-200 rounded-xl cursor-pointer hover:text-purple-600 transition">
            <Search className="w-5 sm:w-6 h-5 sm:h-6" />
          </div>
          <div className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center border border-gray-200 rounded-xl cursor-pointer hover:text-purple-600 transition">
            <CircleUser className="w-5 sm:w-6 h-5 sm:h-6" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100"
          >
            <nav className="flex flex-col items-center gap-3 py-5">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={`transition-all duration-200 ${
                      isActive
                        ? "text-black font-bold text-sm"
                        : "text-gray-600 text-xs hover:text-purple-700"
                    }`}
                    style={{ fontFamily: "BYekan" }}
                  >
                    {link.title}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;