import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const AcProfil2 = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h1 className="font-semibold  dark:text-[#fdb969] text-neutral-950 ">
            Have some fucking integrity
          </h1>
        </AccordionTrigger>
        <AccordionContent>
          <h1 className="text-balance font-normal leading-10">
            What you say matters. Your words are only as powerful as the action
            precode. When you dont follow through, you rob them of any value.
            Dont tell people what they want to hear. Dont live in the sad,
            artificial world of unfulfilled commitment. Dont create an illusion
            of your intent, fulfill it through setting goals and accepting
            consequencess. <br /> Your responsibilities won't go away. when you
            chose not to face them, You bar yourself from ever enjoying in the
            area of your life that occupy.
          </h1>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
