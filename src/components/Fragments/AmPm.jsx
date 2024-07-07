import React, { useState, useEffect } from "react";
import { useTheme } from "../theme-provider"; // Pastikan Anda memiliki provider tema

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
    <>
      <label className="group relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="hidden" // Ini agar checkbox tidak terlihat
        />
        <span
          className={`slider mr-1 flex h-[15px] w-[29px] items-center rounded-full p-1 duration-200 ${
            isChecked
              ? "bg-neutral-400 group-hover:bg-white duration-200"
              : "bg-zinc-400 group-hover:bg-black duration-200"
          }`}
        >
          <span
            className={`dot h-[9px] w-[9px] rounded-full bg-zinc-50 dark:bg-neutral-950 duration-200 ${
              isChecked ? "" : "translate-x-3"
            }`}
          ></span>
        </span>
        <span className="label flex items-center text-md font-medium">
          <span className="pl-1 text-sm">
            {" "}
            {isChecked ? (
              <p className="text-zinc-500 group-hover:text-[#fdb969] duration-200">
                PM
              </p>
            ) : (
              <p className="text-zinc-500 group-hover:text-[#fdb969] duration-200">
                AM
              </p>
            )}{" "}
          </span>
        </span>
      </label>
    </>
  );
};

export default AmPm;
