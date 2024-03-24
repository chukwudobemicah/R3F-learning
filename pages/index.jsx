import Image from "next/image";
import { Inter } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import Experience from "@/Components/Experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex w-screen h-screen flex-col items-center justify-between ${inter.className}`}
    >
      {/* <div className="myBox">box</div> */}
      <Canvas className="">
        <Experience />
      </Canvas>
    </main>
  );
}
