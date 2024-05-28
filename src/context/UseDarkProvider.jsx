import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
const darkContext = createContext(null);

function UseDarkProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const mode = localStorage.getItem("darkMode");

    return mode === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <darkContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </darkContext.Provider>
  );
}

export function useDarkContext() {
  const x = useContext(darkContext);
  return x;
}

export default UseDarkProvider;
