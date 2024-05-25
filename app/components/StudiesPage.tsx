import { Tecnologies } from "./Tecnologies";

export const StudiesPage = () => {
  return (
    <section className="studies flex w-full flex-col mt-12 sm:mt-0 justify-center h-screen items-center text-center select-none ">
      <article className="studies-content flex w-full mt-12 sm:mt-0 justify-center flex-col text-center items-center select-none">
        <h1 className="text-4xl text-titleGreen font-bold my-5">
          Nuestra misión
        </h1>
        <p className="w-2/3">
          Nos comprometemos a aumentar la cobertura forestal plantando un árbol
          por cada nueva suscripción mensual a los servicios de Amazon como
          Amazon Prime Video, Twitch y Alexa. Esta iniciativa busca combatir el
          cambio climático y fomentar la conciencia ambiental. Cada árbol
          plantado es un paso hacia un futuro más sostenible, donde la
          tecnología y la responsabilidad ambiental se unen.
        </p>
        <article className="about-tecnologies flex flex-col gap-6 px-3 py-4 rounded-xl">
          <h1 className="text-center text-2xl font-bold text-titleCream">
            Plataformas
          </h1>
          <Tecnologies />
        </article>
      </article>
    </section>
  );
};
