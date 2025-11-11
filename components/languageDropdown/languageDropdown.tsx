"use client";

import { usePathname, useRouter } from "next-intl/navigation";
import { IoGlobeOutline } from "react-icons/io5";
import { useState } from "react";

export const LanguageDropdown = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const changeLocale = (locale: string) => {
    router.push(pathname, { locale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center gap-x-2 rounded-lg bg-primary-lightBlue p-3 text-white transition hover:bg-primary-lightRed"
      >
        <IoGlobeOutline className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg">
          <div className="py-1">
            <button
              onClick={() => changeLocale("en")}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              English (EN)
            </button>

            <button
              onClick={() => changeLocale("es")}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              Español (ES)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
