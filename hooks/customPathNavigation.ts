"use client";

import { usePathname, useRouter } from "next-intl/navigation";

export const useCustomPathNavigation = ({
  customPath,
}: {
  customPath: string;
}) => {
  const router = useRouter();
  // Este pathname de 'next-intl/navigation' ya no incluye el idioma (ej. /home)
  const pathname = usePathname();

  const handleNavigate = () => {
    // router.push de next-intl se encarga de mantener el idioma
    router.push(customPath);
  };

  return { handleNavigate };
};
