"use client";
import React, { useEffect } from "react";
import arrowDown from "@/public/arrow-down.svg";
import Image from "next/image";
import { goTo } from "../libs/features";

export const JumpText = ({ text }: { text: string }) => {
  return (
    <span className="jump-text flex flex-row">
      <button
        className="w-full text-center font-extralight text-sm border-[2px] border-transparent duration-300 hover:border-b-titlePink text-titleGreen"
        onClick={() => {
          goTo("about");
        }}
      >
        {text}
      </button>
      <Image
        src={arrowDown}
        width={30}
        alt="arrow down"
        className="animate-bounce"
      />
    </span>
  );
};
