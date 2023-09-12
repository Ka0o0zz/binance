import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { IoChevronBack } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <header className="flex p-4 bg-white">
        <div className="w-full flex justify-between">
          <div className="content-center text-base font-medium leading-6">
            <ul className="flex content-center">
              <li>
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer"
                  src="/binance_logo.svg"
                  alt="Next.js Logo"
                  width={120}
                  height={24}
                  priority
                />
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-base font-medium leading-6 content-center items-center">
              <li className="mr-3 cursor-pointer">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer"
                  src="/mundo.svg"
                  alt="Next.js Logo"
                  width={24}
                  height={24}
                  priority
                />
              </li>
              <li className="mr-3 cursor-pointer">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer"
                  src="/luna.svg"
                  alt="Next.js Logo"
                  width={24}
                  height={24}
                  priority
                />
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="py-6 px-44 bg-gray-bg">
        <p className="flex items-center text-xl text-gray-500 cursor-pointer w-fit">
          <IoChevronBack className="" />
          Atrás
        </p>
      </div>
      <div className="bg-gray-bg w-full h-screen flex justify-center">
        <div className="w-2/4 flex mt-10">
          <div className="w-3/5">
            <h2 className="font-semibold text-3xl leading-10 cursor-default">
              ¡Hola de nuevo!
            </h2>
            <p className="cursor-default">santiago.h*****@trademate.tech</p>
            <div className="mt-9 w-full ">
              <div>
                <label htmlFor="">Contraseña</label>
                <input
                  type="password"
                  className="w-full h-12 mb-5 mt-1 border border-gray-300 focus:border-c99400 focus:outline-none rounded p-5"
                />
              </div>
              <Link href={"/check"}>
                <div className="bg-fcd535 grid place-content-center p-3 rounded font-medium text-base leading-6 cursor-pointer">
                  <div className="flex items-center">Siguiente</div>
                </div>
              </Link>

              <p className="mt-2 text-c99400 cursor-pointer">
                ¿Olvidaste la contraseña?
              </p>
              <p className="mt-2 text-c99400 cursor-pointer">
                Usar llave de acceso para iniciar sesión
              </p>
            </div>
          </div>
          <div className="w-2/5 flex justify-center mt-32 ml-20"></div>
        </div>
      </div>
    </div>
  );
}
