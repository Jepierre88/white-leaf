import arboles from "@/public/arboles.jpg";
import Image from "next/image";
export const ContextPage = () => {
  return (
    <section className="context flex w-full flex-col mt-12 sm:mt-0 justify-center h-screen items-center text-center select-none ">
      <article className="context-content flex w-full mt-12 sm:mt-0 justify-center flex-col text-center items-center select-none">
        <h1 className="text-4xl text-titleGreen font-bold my-5">
          Situación actual
        </h1>
        <p className="w-2/3 font-sans">
          La deforestación en Colombia es un problema ambiental significativo y
          complejo que afecta a diversas regiones del país. Si bien Colombia
          alberga una de las mayores biodiversidades del mundo, con una amplia
          variedad de ecosistemas que incluyen bosques tropicales, páramos,
          manglares y selvas, estos ecosistemas enfrentan constantes presiones
          debido a la expansión agrícola, la minería ilegal, la tala ilegal de
          árboles, la ganadería extensiva, la construcción de carreteras y la
          colonización no planificada.
          <br />
          La deforestación en Colombia ha sido impulsada en gran medida por
          actividades ilegales, como la minería ilegal de oro y la producción de
          drogas ilícitas, que han generado conflictos sociales y sobretodo{" "}
          <span className="text-titleGreen">ambientales</span>
        </p>
        <h1 className="text-2xl text-titleGreen my-10 font-semibold">
          Entonces hacemos presencia
        </h1>
      </article>
    </section>
  );
};
