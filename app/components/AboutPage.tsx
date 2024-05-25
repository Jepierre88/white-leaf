"use client";
import Image from "next/image";
import about from "@/public/about.svg";
import support from "@/public/money-bag.svg";

export const AboutPage = () => {
  return (
    <section className="about flex w-full flex-col mt-12 sm:mt-0 justify-center h-screen items-center text-center select-none gap-5">
      <article className="about-content flex flex-col  p-8 rounded-lg max-w-3xl">
        <div className=" flex flex-row w-full justify-center mb-4 text-4xl font-bold text-titleGreen items-end gap-2">
          <header className="flex flex-row">
            <h1>Nosotros</h1>
            <Image src={about} width={35} height={35} alt="icon"></Image>
          </header>
        </div>
        <p className="text-lg">
          Somos una fundación comprometida con la restauración de los
          ecosistemas para combarit el cambio climatico mediante la <br></br>
          reforestación, creemos que un futuro mas{" "}
          <span className="text-titleGreen">verde</span> y sostenible es posible
          y estamos dispuestos a lograrlo mediante la plantación de árboles en{" "}
          <br></br>
          colaboración con Amazon en sus distintas plataformas
        </p>
        <div
          className="support border-[2px] border-[#00ff8cd4] mx-auto w-min mt-16 px-3 py-2 cursor-pointer rounded-lg hover:scale-105 hover:bg-[#00ff8cd4] duration-300 flex justify-center"
          onClick={() => {
            alert("Funcion en contrucción");
          }}
        >
          <Image src={support} width={20} height={20} alt="money" />
          <a href="#">Apoyanos</a>
        </div>
      </article>
    </section>
  );
};
