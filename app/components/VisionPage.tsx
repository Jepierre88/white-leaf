import arboles from "@/public/arboles.jpg";
import Image from "next/image";
export const VisionPage = () => {
  return (
    <section className="vision flex w-full flex-col mt-12 sm:mt-0 justify-center h-screen items-center text-center select-none ">
      <article className="vision-content flex w-full mt-12 sm:mt-0 justify-center flex-col text-center items-center select-none">
        <h1 className="text-4xl text-titleGreen font-bold my-5">
          Nuestra visión
        </h1>
        <p className="w-2/3">
          Nos vemos como líderes en la reforestación en Colombia, forjando un
          futuro más verde y sostenible mediante la colaboración con servicios
          de suscripción. Nuestro objetivo es ser un modelo a seguir en la
          promoción de la conservación ambiental y el desarrollo sostenible,
          dejando un legado positivo para las generaciones venideras. Juntos,
          estamos sembrando las semillas de un mañana más próspero y equilibrado
          para nuestro país y el mundo
        </p>
        <h1 className="text-2xl text-titleGreen my-10 font-semibold">
          ¡Únete a nosotros en esta misión verde!
        </h1>
      </article>
    </section>
  );
};
