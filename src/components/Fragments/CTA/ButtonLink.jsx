import { ArrowUpRight } from "lucide-react";

const ButtonLink = ({
  name,
  url,
  onClick,
  className = "",
  hoverClassName = "",
}) => {
  return (
    <button
      className={`flex items-center group cursor-pointer ${className}`}
      onClick={() => onClick(url)}
    >
      <h3
        className={`transition-colors duration-200 ease-in-out ${hoverClassName}`}
      >
        {name}
      </h3>
      <ArrowUpRight
        size={22}
        className={`transition-colors duration-200 ease-in-out ml-1 ${hoverClassName}`}
      />
    </button>
  );
};

export default ButtonLink;
