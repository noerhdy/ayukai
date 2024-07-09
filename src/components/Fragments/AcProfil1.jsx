import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const AcProfil1 = () => {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h1 className="font-semibold  dark:text-[#fdb969] text-neutral-950 ">
            Why Ayukai?
          </h1>
        </AccordionTrigger>
        <AccordionContent>
          <h1 className="text-balance font-normal  leading-10">
            This name is inspired by a theme in code editor called{" "}
            <span
              className="underline hover:no-underline cursor-pointer hover:dark:text-[#fdb969] hover:text-red-500 ease-in-out duration-500 delay-100"
              onClick={() =>
                handleClick(
                  "https://marketplace.visualstudio.com/items?itemName=GulajavaMinistudio.mayukaithemevsc"
                )
              }
            >
              Mayukai
            </span>
            . <i>We </i>
            chose Ayukai because <i>we</i> like the way it sounds. This theme
            uses the base color swatch from the{" "}
            <span
              className="underline cursor-pointer hover:no-underline hover:dark:text-[#fdb969] hover:text-red-500 ease-in-out duration-500 delay-100"
              onClick={() =>
                handleClick("https://github.com/ayu-theme/vscode-ayu")
              }
            >
              Ayu Theme
            </span>
            , with some adjustments for syntax coloring. Last but not least, we
            simply like it overall.
          </h1>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
