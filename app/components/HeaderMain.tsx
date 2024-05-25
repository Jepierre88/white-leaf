"use client";
import { goTo } from "../libs/features";

export const HeaderMain = () => {
  return (
    <header className="header-main flex items-center w-screen h-20 backdrop-blur-[2px] z-20">
      <nav className="w-full">
        <ul className="justify-around flex flex-row mx-6 text-sm sm:text-lg font-light">
          <li className="header-items border-2 border-[transparent] duration-300 hover:border-b-titleBlue">
            <button
              onClick={() => {
                goTo("context");
              }}
            >
              Contexto
            </button>
          </li>
          <li className="header-items border-2 border-[transparent] duration-300 hover:border-b-titleBlue">
            <button
              onClick={() => {
                goTo("about");
              }}
            >
              Nosotros
            </button>
          </li>
          <li className="header-items border-2 border-[transparent] duration-300 hover:border-b-titleGreen">
            <button
              onClick={() => {
                goTo("studies");
              }}
            >
              Mision
            </button>
          </li>
          <li className="header-items border-2 border-[transparent] duration-300 hover:border-b-titleGreen">
            <button
              onClick={() => {
                goTo("vision");
              }}
            >
              Vision
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
