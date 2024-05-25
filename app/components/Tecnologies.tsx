import html from "@/public/twitch.svg";
import rct from "@/public/primevideosvg.svg";
import nest from "@/public/amazon.svg";
import next from "@/public/amazon-alexa.svg";
import about from "@/public/about.svg";
import Image from "next/image";

export const Tecnologies = () => {
  return (
    <section className="grid grid-cols-4 text-center justify-items-center gap-2 px-6">
      <Image
        src={html}
        alt="html"
        width={50}
        height={50}
        className="rounded-md grayscale-[100%] hover:grayscale-0 duration-300 hover:scale-105"
      ></Image>
      <Image
        src={rct}
        alt="react"
        width={50}
        height={50}
        className="rounded-md grayscale-[100%] hover:grayscale-0 duration-300 hover:scale-105"
      ></Image>
      <Image
        src={nest}
        alt="nestjs"
        width={50}
        height={50}
        className="rounded-md grayscale-[100%] hover:grayscale-0 duration-300 hover:scale-105"
      ></Image>
      <Image
        src={next}
        alt="nextjs"
        width={50}
        height={50}
        className="hover:bg-white rounded-full hover:border-2 border-white grayscale-[100%] hover:grayscale-0 hover:scale-105 duration-300"
      ></Image>
    </section>
  );
};
