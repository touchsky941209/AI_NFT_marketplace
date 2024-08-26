'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IconlyProvider, Home, Notification } from 'react-iconly';

export default function ConnectButton() {
  const pathname = usePathname();
  const router = useRouter();
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      id="navbar"
      className="col-span-12 h-[8.75em] p-4 bg-none flex justify-between items-center"
    >
      <div className="flex w-full justify-between items-center px-3">
        <div className="min-w-22 min-h-22 shadow-md">
          <Link href="/">
            <img src="./logo.png" className="w-28 cursor-pointer" />
          </Link>
        </div>
        <div className="pt-4">
          <div>
            <h1 className="text-center sm:text-[16px] sm:block md:text-[20px] lg:text-3xl">
              HONESTY | TRANSPARENCY | SIMPLICITY | TRUST
            </h1>
            <h3 className="hidden sm:block text-center text-white md:lg sm:text-xl lg:text-2xl font-ligh p-0">
              WE GROW TOGETHER
            </h3>
          </div>
        </div>
        <div className="hidden sm:block">
          <w3m-button />
        </div>
      </div>
      <div className="relative">
        <div onClick={handleNav} className="sm:hidden">
          <div
            id="toolbar"
            className="flex items-center justify-center rounded-lg w-10 h-10 bg-neutral-700 hover:bg-slate-200 hover:cursor-pointer ml-8"
          >
            <div
              className="
                      w-6
                      h-1
                      bg-white
                      rounded-full
                      before:content-['']
                      before:absolute
                      before:w-6
                      before:h-1
                      before:bg-white
                      before:rounded-full
                      before:-translate-y-2
                      after:content-['']
                      after:absolute
                      after:w-6
                      after:h-1
                      after:bg-white
                      after:rounded-full
                      after:translate-y-2
                    "
            />
          </div>
        </div>
      </div>
      <ul
        className={
          nav
            ? 'z-10 fixed md:hidden left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'z-10 ease-in-out w-[40%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <div className="w-full text-3xl font-bold text-[#00df9a] flex flex-col">
          <Link href="/">
            <img src="./logo.png" className="w-24 cursor-pointer" />
          </Link>
          <Link
            className={`link ${
              pathname === '/'
                ? 'text-lg bg-slate-800 p-3 rounded-md hover:cursor-pointer mt-10'
                : 'text-lg hover:bg-slate-300 p-3 rounded-md hover:cursor-pointer mt-10'
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`link ${
              pathname === '/mint'
                ? 'text-lg bg-slate-800 p-3 rounded-md hover:cursor-pointer'
                : 'text-lg hover:bg-slate-300 p-3 rounded-md hover:cursor-pointer'
            }`}
            href="/mint"
          >
            NFT mint
          </Link>
          <Link
            className={`link ${
              pathname === '/stake'
                ? 'text-lg bg-slate-800 p-3 rounded-md hover:cursor-pointer'
                : 'text-lg hover:bg-slate-300 p-3 rounded-md hover:cursor-pointer'
            }`}
            href="/stake"
          >
            NFT stake
          </Link>
          <Link
            className={`link ${
              pathname === '/mining'
                ? 'text-lg bg-slate-800 p-3 rounded-md hover:cursor-pointer'
                : 'text-lg hover:bg-slate-300 p-3 rounded-md hover:cursor-pointer'
            }`}
            href="/mining"
          >
            Mining BNB
          </Link>
          <Link
            className={`link ${
              pathname === '/game'
                ? 'text-lg bg-slate-800 p-3 rounded-md hover:cursor-pointer'
                : 'text-lg hover:bg-slate-300 p-3 rounded-md hover:cursor-pointer'
            }`}
            href="/game"
          >
            Game
          </Link>
        </div>
      </ul>
    </div>

    // <div className="h-28 px-2 py-3 bg-sky-950 flex justify-between items-center w-screen mx-auto text-white">
    //   {/* Logo */}
    //   <div className="text-3xl font-bold text-[#00df9a]">
    //     <Link href="/">
    //       <img src="./logo.png" className="w-24 cursor-pointer" />
    //     </Link>
    //   </div>
    //   <div className="hidden sm:block text-center">
    //     <h1 className="font-medium text-center sm:text-center sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-loose text-white">
    //       HONESTY | TRANSPARENCY | SIMPLICITY | TRUST
    //     </h1>
    //     <div className="h-px my-2 mx-auto rounded-full  bg-gradient-to-r from-blue-400 via-pink-400 to-indigo-400"></div>
    //     <h3 className="text-center text-white md:lg lg:xl xl:text-2xl font-light">
    //       WE GROW TOGETHER
    //     </h3>
    //   </div>
    //   <div className="hidden sm:block">
    //     <w3m-button />
    //   </div>
    // {/* Mobile Navigation Icon */}
    // <div onClick={handleNav} className="sm:hidden">
    //   <div
    //     id="toolbar"
    //     className="flex items-center justify-center rounded-lg w-10 h-10 bg-neutral-700 hover:bg-slate-200 hover:cursor-pointer ml-8"
    //   >
    //     <div
    //       className="
    //               w-6
    //               h-1
    //                bg-white
    //               rounded-full
    //               before:content-['']
    //               before:absolute
    //               before:w-6
    //               before:h-1
    //                before:bg-white
    //               before:rounded-full
    //               before:-translate-y-2
    //               after:content-['']
    //               after:absolute
    //               after:w-6
    //               after:h-1
    //                after:bg-white
    //               after:rounded-full
    //               after:translate-y-2
    //               "
    //     />
    //   </div>
    // </div>
    // {/* Mobile Navigation Menu */}
    // <ul
    //   className={
    //     nav
    //       ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
    //       : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
    //   }
    // >
    //   {/* Mobile Logo */}
    //   <div className="w-12 text-3xl font-bold text-[#00df9a]">
    //     <Link href="/">
    //       <img src="./logo.png" className="w-28 cursor-pointer" />
    //     </Link>
    //   </div>
    //   {/* Mobile Navigation Items */}
    // </ul>
    // </div>
    // <nav className='z-10 fixed top-0 flex justify-between items-center w-full px-8 py-4 backdrop-blur-xl bg-white/20'>
    // <nav className='side-navbar z-10 relative top-0 flex justify-between items-center w-full px-20 py-8 bg-transparent'>
    //   <div>
    //     <Link href='/'><img src='./logo.png' className="w-28 cursor-pointer"/></Link>
    //   </div>
    //   <div>
    //     <h1 className="font-medium text-center sm:text-center text-lg md:text-xl lg:text-2xl xl:text-3xl leading-loose text-white">
    //       HONESTY | TRANSPARENCY | SIMPLICITY | TRUST
    //     </h1>
    //     <div className="h-px my-2 mx-auto rounded-full  bg-gradient-to-r from-blue-400 via-pink-400 to-indigo-400"></div>
    //     <h3 className="text-center text-white text-2xl font-light">WE GROW TOGETHER</h3>
    //   </div>
    //   <div>
    //     <w3m-button/>
    //   </div>
    // </nav>
  );
}
