import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className="w-20 h-10 rounded-xl cursor-pointer transition-all duration-300 
                 border-2 border-black bg-[#ebe6ef] flex items-center px-2"
      onClick={() => setDarkMode(!darkMode)}
    >
      <div
        className={`w-6 h-6 rounded-full bg-[#f24c00] transition-transform duration-300 ${
          darkMode ? 'translate-x-[40px]' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );
};

export default ThemeToggle;
