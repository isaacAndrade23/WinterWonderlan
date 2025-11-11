"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { LanguageDropdown } from "../languageDropdown/languageDropdown";
import { useCustomPathNavigation } from "../../hooks/customPathNavigation";
import { IoCall } from "react-icons/io5";
import { usePathname } from "next-intl/navigation";

export const HomeNavBarNoLinksWinter = () => {
  const pathname = usePathname();

  const { handleNavigate: handleNavigateHome } = useCustomPathNavigation({
    customPath: "/home",
  });

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="container mx-auto flex h-full w-full items-center justify-between">
        <div className="flex items-center">
          <div
            onClick={handleNavigateHome}
            className="flex h-full w-[8rem] cursor-pointer items-center md:w-[8rem]"
          >
            <Image
              src="/logos/logo-winter.png"
              alt="logo"
              width={160}
              height={160}
              className="h-auto w-auto rounded-full object-contain"
            />
          </div>
        </div>

        <div className="align-center flex w-auto justify-center gap-x-4">
          <div className="align-end relative z-40 flex w-full justify-center gap-x-4">
            <LanguageDropdown />
          </div>

          {pathname === "/get-in-contact" && (
            <Link
              id="tel-home"
              className="w-full md:w-1/2"
              href="tel:+1-800-435-2997"
            >
              <button className="flex items-center justify-center rounded-lg bg-primary-lightBlue p-3 text-white transition hover:bg-primary-lightRed md:block">
                <IoCall />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
