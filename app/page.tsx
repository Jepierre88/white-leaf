import Image from "next/image";
import { MainPage } from "./components/MainPage";
import { AboutPage } from "./components/AboutPage";
import { Separator } from "./components/Separator";
import { StudiesPage } from "./components/StudiesPage";
import { VisionPage } from "./components/VisionPage";
import { ContextPage } from "./components/ContextPage";

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-full">
      <MainPage />
      <Separator />
      <ContextPage />
      <Separator />
      <AboutPage />
      <Separator />
      <StudiesPage />
      <Separator />
      <VisionPage />
    </main>
  );
}
