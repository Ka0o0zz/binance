import Image from "next/image";
import Link from "next/link";


export const Header = () => {
  return (
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
            <li className="mr-3 cursor-pointer"><Link href='/login'>Iniciar sesión</Link></li>
            <li className="mr-3 cursor-pointer bg-fcd535 p-1 rounded-md flex w-28 justify-center">
              {" "}
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert cursor-pointer"
                src="/regalo.svg"
                alt="Next.js Logo"
                width={16}
                height={16}
                priority
              />
              Registrarse
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
  );
};
