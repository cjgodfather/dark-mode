import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark", 1);
  console.log(darkMode);
  useEffect(() => {
    const bEl = document.querySelector("body");
    if (darkMode === true) {
      bEl.classList.add("dark-mode");
    } else if (darkMode === false) {
      bEl.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
