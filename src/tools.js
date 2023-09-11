import { useEffect, useState } from "react";

export const useModalHook = (defaultValue = false) => {
  const [isOpen, setIsOpen] = useState(defaultValue);
  const toggle = () => {
    setIsOpen((p) => !p);
  };
  const close = () => {
    setIsOpen(false);
  };
  const open = () => {
    setIsOpen(true);
  };
  return { toggle, isOpen, close, open };
};

export const useDimensions = () => {
  const [dimension, setDimension] = useState({ height: 0, width: 0 });
  const { height, width } = dimension;
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const handleResize = () =>
      setDimension({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isFirstRender) return setIsFirstRender(false);

    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, [isFirstRender]);

  const isSmall = width < 768;
  const isMedium = width >= 992;
  const isLarge = width >= 1200;
  const isTabOrPhone = !(isMedium || isLarge);
  const isSmallLaptop = width <= 1100;
  const is1280 = width >= 1280;
  const is1360 = width >= 1360;
  const is1440 = width >= 1440;
  const is1920 = width >= 1920;

  const figmaWidth = (number) => {
    if (is1440) return (number * 1440) / 1440;
    return (number * width) / 1280;
  };
  const figmaHeight = (number) => (number * height) / 720;

  const sidebarWidth = figmaWidth(248);
  const sidebarTotalWidth = sidebarWidth + figmaWidth(16);

  const mainComponentWidth = is1440
    ? 1440 - sidebarTotalWidth
    : width - sidebarTotalWidth;

  const rowWidth = is1440 ? 1440 : width;

  const margin = (width - rowWidth) / 2;

  const sidebarHeight = figmaHeight(616);
  const navbarHeight = 72;
  const burgerHeight = 65;
  const screenHeight = height - navbarHeight;
  const sidebarGap = (screenHeight - sidebarHeight) / 2;
  const screenRealHeight = screenHeight - sidebarGap * 2;

  return {
    burgerHeight,
    sidebarGap,
    navbarHeight,
    screenHeight,
    isSmall,
    isMedium,
    figmaWidth,
    figmaHeight,
    is1440,
    is1920,
    is1280,
    is1360,
    mainComponentWidth,
    margin,
    sidebarTotalWidth,
    sidebarHeight,
    sidebarWidth,
    isLarge,
    isTabOrPhone,
    screenRealHeight,
    isSmallLaptop,
    ...dimension,
  };
};
