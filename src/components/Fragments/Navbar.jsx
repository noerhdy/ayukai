import React from "react";
import AmPm from "../Fragments/AmPm";

const Navbar = ({ onToggleAmPm, onShowrealClick }) => {
  return (
    <div className="fixed w-full z-10 pt-4">
      <nav className="text-zinc-500 max-w-screen-2xl flex justify-between items-center py-4 mx-4 text-lg">
        <h1 className="cursor-default text-2xl">Ayukai</h1>
        <div className="flex space-x-4">
          <AmPm onToggle={onToggleAmPm} />
          <h1
            className="cursor-pointer font-medium text-sm hover:text-[#fdb969] ease-in-out duration-500 delay-100"
            onClick={onShowrealClick}
          >
            Showreal
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
