import React, { useEffect, useState, useCallback } from "react";
import { throttle } from "lodash";

type OptionType = {
  onScrollEnd?: () => void;
};

type ReturnType = {
  isEnd: boolean;
};

const lockScroll = useCallback(() => {
  document.body.style.overflow = "hidden";
}, []);

const unlockScroll = useCallback(() => {
  document.body.style.overflow = "";
}, []);

const useInfiniteScroll = ({ onScrollEnd }: OptionType): ReturnType => {
  const [isEnd, setIsEnd] = useState(false);

  // throttle 설정
  const handleScroll = throttle(async () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setIsEnd(true);
      lockScroll();
      if (onScrollEnd) await onScrollEnd();
      await unlockScroll();
      await setIsEnd(false);
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isEnd };
};

export default useInfiniteScroll;
