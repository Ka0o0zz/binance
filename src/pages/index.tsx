import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { FaUserAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-gray-bg w-full h-screen flex justify-center">
        <div className="w-3/4 flex mt-24">
          <div className="w-1/2">
            <h2 className="font-semibold text-5xl leading-tight mt-11 cursor-default">
              Compra y vende más de 350 criptomonedas en Binance
            </h2>

            <div className="mt-9 w-3/4 ">
              <div className="bg-fcd535 grid place-content-center p-3 rounded font-medium text-base leading-6 cursor-pointer">
                <a className="flex items-center">
                  {" "}
                  <FaUserAlt className="mr-3" /> Registro con correo
                  electronico/teléfono
                </a>
              </div>
              <div className="grid place-content-center my-4 cursor-default">
                o continúa con
              </div>
              <div className="flex justify-between">
                <div className="w-1/2 grid place-content-center bg-slate-200 p-3 rounded font-medium text-base leading-6 mr-1 cursor-pointer">
                  <a className="flex items-center">
                    {" "}
                    <FcGoogle className="mr-3" />
                    Google
                  </a>
                </div>
                <div className="w-1/2 grid place-content-center bg-slate-200 p-3 rounded font-medium text-base leading-6 ml-1 cursor-pointer">
                  <a className="flex items-center">
                    {" "}
                    <DiApple className="mr-3" />
                    Apple
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/inicio.jpeg"
              alt="Next.js Logo"
              width={588}
              height={496.36}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
