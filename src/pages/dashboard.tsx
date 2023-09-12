import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { FaBell } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import { BsEyeSlashFill } from "react-icons/bs";
import { DonutCharts } from "@/components/donut";

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
              <li className="ml-3 cursor-pointer">Comprar criptos</li>
              <li className="ml-3 cursor-pointer">Mercados</li>
              <li className="ml-3 cursor-pointer">Trading</li>
              <li className="ml-3 cursor-pointer">Futuros</li>
              <li className="ml-3 cursor-pointer">Earn</li>
              <li className="ml-3 cursor-pointer">Aprende</li>
              <li className="ml-3 cursor-pointer">Más</li>
            </ul>
          </div>
          <div>
            <ul className="flex text-base font-medium leading-6 content-center items-center">
              <li className="mr-3 cursor-pointer">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer"
                  src="/search.svg"
                  alt="Next.js Logo"
                  width={22}
                  height={22}
                  priority
                />
              </li>
              <li className="mr-3 cursor-pointer bg-fcd535 p-1 rounded-md flex w-28 justify-center items-center">
                {" "}
                <BsDownload className="mr-1" />
                Depositar
              </li>
              <li className="mr-3 cursor-pointer">Billetera</li>
              <li className="mr-3 cursor-pointer">Órdenes</li>
              <li className="mr-3 cursor-pointer">
                <BiSolidUserCircle className="text-2xl" />
              </li>
              <li className="mr-3 cursor-pointer">
                <FaBell className="text-xl" />
              </li>

              <li className="mr-2 cursor-pointer">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer"
                  src="/download.svg"
                  alt="Next.js Logo"
                  width={22}
                  height={22}
                  priority
                />
              </li>
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
      <div className="grid grid-cols-6 min-h-screen bg-white">
        <div className="col-span-1 border-r border-gray-300 min-h-full">
          <ul>
            <li className="flex box-border m-0 min-w-0 font-medium text-sm leading-5 break-words p-3 bg-gris cursor-pointer">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer mr-3"
                src="/user.svg"
                alt="Next.js Logo"
                width={24}
                height={24}
                priority
              />
              Panel de Usuario
            </li>
            <li className="flex box-border m-0 min-w-0 font-medium text-sm leading-5 break-words p-3 cursor-pointer">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer mr-3"
                src="/seguridad.svg"
                alt="Next.js Logo"
                width={24}
                height={24}
                priority
              />
              Seguridad
            </li>
            <li className="flex box-border m-0 min-w-0 font-medium text-sm leading-5 break-words p-3 cursor-pointer">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer mr-3"
                src="/identificacion.svg"
                alt="Next.js Logo"
                width={24}
                height={24}
                priority
              />
              Identificación
            </li>
            <li className="flex box-border m-0 min-w-0 font-medium text-sm leading-5 break-words p-3 cursor-pointer">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer mr-3"
                src="/pago.svg"
                alt="Next.js Logo"
                width={24}
                height={24}
                priority
              />
              Pago
            </li>
            <li className="flex box-border m-0 min-w-0 font-medium text-sm leading-5 break-words p-3 cursor-pointer">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer mr-3"
                src="/referidos.svg"
                alt="Next.js Logo"
                width={24}
                height={24}
                priority
              />
              Programa de referidos
            </li>
            <li className="flex box-border m-0 min-w-0 font-medium text-sm leading-5 break-words p-3 cursor-pointer">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer mr-3"
                src="/recompensas.svg"
                alt="Next.js Logo"
                width={24}
                height={24}
                priority
              />
              Portal de recompensas
            </li>
            <li className="flex box-border m-0 min-w-0 font-medium text-sm leading-5 break-words p-3 cursor-pointer">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer mr-3"
                src="/api.svg"
                alt="Next.js Logo"
                width={24}
                height={24}
                priority
              />
              Gestión de API
            </li>
            <li className="flex box-border m-0 min-w-0 font-medium text-sm leading-5 break-words p-3 cursor-pointer">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer mr-3"
                src="/subcuentas.svg"
                alt="Next.js Logo"
                width={24}
                height={24}
                priority
              />
              Subcuentas
            </li>
            <li className="flex box-border m-0 min-w-0 font-medium text-sm leading-5 break-words p-3 cursor-pointer">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer mr-3"
                src="/ajustes.svg"
                alt="Next.js Logo"
                width={24}
                height={24}
                priority
              />
              Ajustes
            </li>
          </ul>
        </div>
        <div className="col-span-5 bg-fondo">
          <div className="p-5 w-full bg-fondo flex items-center cursor-default">
            <div>
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mr-3"
                src="/perfil.jpeg"
                alt="Next.js Logo"
                width={64}
                height={64}
                priority
              />
            </div>
            <div>
              <p className="font-medium text-base leading-6">
                Anonymous-User-54f99{" "}
                <span className="font-normal text-base leading-6 ml-4">
                  ID de usuario:
                </span>{" "}
                537873394
              </p>
              <p className="text-sm leading-6 font-light">
                ultimo inicio de sesión 2023-09-11 15:13:08{" "}
                <span className="ml-7">IP: 186.30.87.72</span>
              </p>
            </div>
            <div className="ml-5">
              <p className="text-c99400">Usuario habitual</p>
            </div>
            <div className="ml-5">
              <p className="bg-fondo2 text-c99400 p-2 rounded">Institucional</p>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-2 cursor-default">
            <div className="col-span-4 mt-5 mx-2 rounded">
              <div className="bg-white w-full p-5">
                <div className="flex justify-between">
                  <p className="font-semibold text-lg leading-6">
                    Detalles del Balance
                  </p>
                  <div className="flex">
                    <p className="bg-fcd535 p-1 rounded mx-1 cursor-pointer">Depositar</p>
                    <p className="bg-gris p-1 rounded mx-1 cursor-pointer">Retirar</p>
                    <p className="bg-gris p-1 rounded mx-1 cursor-pointer">Tarjeta regalo</p>
                  </div>
                </div>
                <div className="mt-7">
                  <ul className="w-full flex">
                    <li className="font-medium text-base leading-6 mr-7 cursor-pointer">
                      {" "}
                      <div>Spot</div>
                      <div className="block w-full h-1 bg-fcd535 mt-1"></div>
                    </li>
                    <li className="font-normal text-base leading-6 mr-7 cursor-pointer">
                      {" "}
                      <div>Fondos</div>
                      <div></div>
                    </li>
                    <li className="font-normal text-base leading-6 mr-7 cursor-pointer">
                      {" "}
                      <div>Billetera Margin</div>
                      <div></div>
                    </li>
                    <li className="font-normal text-base leading-6 mr-7 cursor-pointer">
                      {" "}
                      <div>Futuros</div>
                      <div></div>
                    </li>
                    <li className="font-normal text-base leading-6 mr-7 cursor-pointer">
                      {" "}
                      <div>Earn</div>
                      <div></div>
                    </li>
                    <li className="font-normal text-base leading-6 mr-7 cursor-pointer">
                      {" "}
                      <div>Cuenta WazirX</div>
                      <div></div>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 grid grid-cols-9">
                  <div className="col-span-4">
                    <div className="flex justify-between items-center">
                      <div>Balance de la cuenta:</div>
                      <div className="flex items-center bg-gris p-1 rounded mx-1 cursor-pointer">
                        <BsEyeSlashFill className="mr-1" /> Ocultar balance
                      </div>
                    </div>

                    <div>
                      <p className="text-4xl">
                        0,01831907 <span className="text-xl">BTC</span>
                      </p>
                    </div>

                    <div className="mt-10">
                      <p>Valor estimado:</p>
                    </div>
                    <div>
                      <p className="text-2xl">$459.75</p>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <DonutCharts />
                  </div>
                  <div className="col-span-2 ">
                    <ul>
                      <li className="flex items-center">
                        <div className="block h-2 w-2 mr-2 bg-amber-900"></div>{" "}
                        BNB 2,027...
                      </li>
                      <li className="flex items-center">
                        <div className="block h-2 w-2 mr-2 bg-amber-900"></div>{" "}
                        USDT 43,0...
                      </li>
                      <li className="flex items-center">
                        <div className="block h-2 w-2 mr-2 bg-amber-900"></div>{" "}
                        BTC 0,000...
                      </li>
                      <li className="flex items-center">
                        <div className="block h-2 w-2 mr-2 bg-amber-900"></div>{" "}
                        EUR 0,055...
                      </li>
                      <li className="flex items-center">
                        <div className="block h-2 w-2 mr-2 bg-amber-900"></div>{" "}
                        OTROS
                      </li>
                      <li className="text-sm leading-4 font-light">
                        Los cripto-activos que no tengan valor equivalente en
                        BTC no se mostrarán en el gráfico
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 mt-5 mx-2 rounded">
              <div className="bg-white w-full p-5">
                <p className="font-semibold text-lg leading-6">
                  Recomendaciones personalizadas:
                </p>

                <div className="grid grid-cols-6 bg-gris mt-3 p-3 rounded">
                  <div className="col-span-2 grid place-content-center">
                    <Image
                      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer mr-3"
                      src="/news.svg"
                      alt="Next.js Logo"
                      width={80}
                      height={80}
                      priority
                    />
                  </div>
                  <div className="col-span-4">
                    <div>
                      <p className="font-medium text-base leading-6">
                        Trading en mercado spot BTC/USDT{" "}
                      </p>
                      <p className="text-red-600 mt-2">€24.083+0,46%</p>
                      <p className="text-gray-600 leading-4 mt-1">
                        Haz trading de criptomonedas con herramientas avanzadas
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-fcd535 grid place-content-center font-semibold text-lg leading-6 mt-7 py-4 rounded cursor-pointer">
                  Gana hasta un 40 % de comisión
                </div>

                <p className="font-semibold text-lg leading-6 mt-7">
                  Anuncios:
                </p>

                <div className="py-6 px-4 flex items-center cursor-pointer">
                  <div className="bg-gris w-8 h-8 grid place-content-center rounded mr-2 ">
                    <Image
                      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer "
                      src="/noticia.svg"
                      alt="Next.js Logo"
                      width={24}
                      height={24}
                      priority
                    />
                  </div>
                  <div>
                    <p className="font-medium text-base leading-4">
                      Aviso de eliminación de pares de trading:
                    </p>
                    <p className="text-sm leading-6 font-light">
                      2023-09-07 13:10
                    </p>
                  </div>
                </div>

                <div className="py-6 px-4 flex items-center cursor-pointer">
                  <div className="bg-gris w-8 h-8 grid place-content-center rounded mr-2">
                    <Image
                      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer "
                      src="/noticia.svg"
                      alt="Next.js Logo"
                      width={24}
                      height={24}
                      priority
                    />
                  </div>
                  <div>
                    <p className="font-medium text-base leading-4">
                      Binance completa la integración de Ethereum (ETH):
                    </p>
                    <p className="text-sm leading-6 font-light">
                      2023-09-07 13:09
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
