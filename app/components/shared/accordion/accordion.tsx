"use client";

import { useState } from "react";
import {
  AccordionDescription,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
  AccordionWrapper,
} from "./accordion.styled";

import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionProps {
  title: string;
  description: string;
}

export function Accordion({ title, description }: AccordionProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionWrapper onClick={() => setIsActive(!isActive)}>
      <AccordionItem>
        <AccordionTitle>
          {title}
          <AccordionIcon>
            {isActive ? <ChevronUp /> : <ChevronDown />}
          </AccordionIcon>
        </AccordionTitle>
        {isActive && <AccordionDescription>{description}</AccordionDescription>}
      </AccordionItem>
    </AccordionWrapper>
  );
}
