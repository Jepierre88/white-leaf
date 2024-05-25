import Image from "next/image";
import { JumpText } from "./JumpText";

export const MainPage = () => {
  return (
    <section className="start flex w-screen h-screen items-center justify-center flex-col select-none -mt-20">
      <article className="start-page flex flex-col text-center gap-3">
        <h1 className="text-6xl sm:text-8xl text-titleGreen font-bold">
          WhiteLeaf
        </h1>
        <h3>Planta el cambio</h3>
      </article>
      {/* <hr className="w-2/3 my-2 h-0.5 bg-[#2c3360]" /> */}
      <JumpText text="Nosotros" />
    </section>
  );
};
