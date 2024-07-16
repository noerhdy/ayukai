import React from "react";
import { ArrowUpRight } from "lucide-react";
const ButtonClose = ({ onClick }) => {
  return (
    <button
      className="cursor-pointer group flex items-center"
      onClick={onClick}
    >
      <h3 className="font-medium text-sm group-hover:-translate-x-1 translate-x-0  group-hover:text-red-500 text-zinc-500 ease-in-out duration-500 delay-100">
        close
      </h3>
      <ArrowUpRight
        size={22}
        className="group-hover:rotate-0 rotate-90 group-hover:text-red-500 text-zinc-500 ease-in-out duration-500 delay-100"
      />
    </button>
  );
};

export default ButtonClose;
