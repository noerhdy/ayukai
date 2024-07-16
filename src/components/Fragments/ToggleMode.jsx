import React, { useState, useEffect } from "react";
import { useTheme } from "../theme-provider"; // Pastikan Anda memiliki provider tema
import { Sun, Moon } from "lucide-react";

const AmPm = ({ onToggle }) => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(theme === "dark");

  useEffect(() => {
    // Saat komponen dimuat, cek nilai penyimpanan lokal
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsChecked(storedTheme === "dark");
      setTheme(storedTheme); // Update theme context
    }
    const storedAmPm = localStorage.getItem("amPm");
    if (storedAmPm) {
      onToggle(storedAmPm === "pm");
    }
  }, [setTheme, onToggle]);

  const handleCheckboxChange = () => {
    const newCheckedStatus = !isChecked;
    setIsChecked(newCheckedStatus);
    const newTheme = newCheckedStatus ? "dark" : "light";

    setTheme(newTheme);
    // Simpan status tema ke penyimpanan lokal
    localStorage.setItem("theme", newTheme);

    // Toggle AM/PM
    const newAmPmStatus = !isChecked;
    onToggle(newAmPmStatus);
    localStorage.setItem("amPm", newAmPmStatus ? "pm" : "am");
  };

  return (
    <label className="group relative inline-flex cursor-pointer select-none items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden" // Ini agar checkbox tidak terlihat
      />
      <span
        className={`mr-1 flex h-[25px] w-[45px] items-center rounded-full p-1 duration-200  ${
          isChecked
            ? "border-zinc-800 group-hover:border-zinc-600 border-2 "
            : "border-zinc-300 group-hover:border-zinc-400 border-2 "
        }`}
      >
        <span
          className={`dot h-[18px] w-[18px] rounded-full  duration-200 ${
            isChecked ? "" : "translate-x-4"
          }`}
        >
          {isChecked ? (
            <Moon
              className="text-zinc-800 group-hover:text-zinc-400"
              size={18}
            />
          ) : (
            <Sun
              className="text-zinc-300 group-hover:text-zinc-800"
              size={18}
            />
          )}
        </span>
      </span>
      {/* <span className="label flex items-center text-md font-medium">
        <span className="pl-1 text-sm">
          {isChecked ? (
            <p className="text-zinc-500 group-hover:text-[#fdb969] duration-200">
              PM
            </p>
          ) : (
            <p className="text-zinc-500 group-hover:text-[#fdb969] duration-200">
              AM
            </p>
          )}
        </span>
      </span> */}
    </label>
  );
};

export default AmPm;
