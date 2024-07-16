import React from "react";
import AmPm from "./ToggleMode";

const Navbar = ({ onToggleAmPm, onShowrealClick }) => {
  return (
    <div className="fixed w-full z-30 pt-2 rounded-md bg-clip backdrop-filter backdrop-blur-sm bg-opacity-0 bg-transparent">
      <nav className="text-zinc-500 max-w-screen-2xl flex justify-between items-center py-4 mx-4 text-lg">
        <h1 className="cursor-default text-2xl">Ayukai</h1>
        <div className="flex space-x-2 items-center">
          <AmPm onToggle={onToggleAmPm} />
          <h1
            className="cursor-pointer font-medium text-sm hover:text-red-500 ease-in-out duration-500 delay-100"
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
