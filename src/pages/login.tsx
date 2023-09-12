import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { FaUserAlt } from "react-icons/fa";
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
      <div className="py-3 bg-fondo-caki grid place-content-center cursor-default">
        <p className="flex">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer"
            src="/candado.svg"
            alt="Next.js Logo"
            width={20}
            height={20}
            priority
          />
          URL verification: https://accounts.binance.com
        </p>
      </div>
      <div className="bg-gray-bg w-full h-screen flex justify-center cursor-default">
        <div className="w-2/4 flex mt-10">
          <div className="w-3/5">
            <h2 className="font-semibold text-3xl leading-10">
              Iniciar sesión
            </h2>

            <div className="mt-9 w-full cursor-pointer">
              <div>
                <label htmlFor="">Correo electrónico/número de teléfono</label>
                <input
                  type="text"
                  className="w-full h-12 mb-5 mt-1 border border-gray-300 focus:border-c99400 focus:outline-none rounded p-5"
                />
              </div>
              <Link href={"/password"}>
                <div className="bg-fcd535 grid place-content-center p-3 rounded font-medium text-base leading-6">
                  <div className="flex items-center">Siguiente</div>
                </div>
              </Link>
              <div className="grid place-content-center my-4">o</div>
              <div className="w-full grid place-content-center bg-slate-200 p-3 rounded font-medium text-base leading-6 mb-5 cursor-pointer">
                <a className="flex items-center">
                  {" "}
                  <FcGoogle className="mr-3" />
                  Continuar con Google
                </a>
              </div>
              <div className="w-full grid place-content-center bg-slate-200 p-3 rounded font-medium text-base leading-6 cursor-pointer">
                <a className="flex items-center">
                  {" "}
                  <DiApple className="mr-3" />
                  Continuar con Apple
                </a>
              </div>
              <p className="mt-2 text-c99400 cursor-pointer">
                Crear una cuenta de Binance
              </p>
            </div>
          </div>
          <div className="w-2/5 flex justify-center mt-32 ml-20">
            <div className=" flex flex-col items-center justify-start">
              <div className="relative h-36">
                <Image
                  className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert filter opacity-10"
                  src="/image.png"
                  alt="Next.js Logo"
                  width={156}
                  height={156}
                  priority
                />
                <div className="w-44 p-1 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-slate-200 text-base font-medium cursor-pointer">
                  <Image
                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert filter opacity-30"
                    src="/obtener.svg"
                    alt="Next.js Logo"
                    width={20}
                    height={20}
                    priority
                  />
                  Obtener código QR
                </div>
              </div>
              <p className="box-border my-2 min-w-0 font-medium text-base leading-6">
                Iniciar sesión con el código QR
              </p>
              <p className="text-center box-border  min-w-0 font-normal text-base leading-5">
                Escanea este código con la{" "}
                <span className="text-c99400">aplicación móvil de Binance</span>{" "}
                para iniciar sesión al instante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
