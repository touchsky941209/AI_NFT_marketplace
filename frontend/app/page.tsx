'use client'
import dynamic from 'next/dynamic'
import { NewspaperIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { FaTelegram, FaDiscord, FaMailBulk, FaFacebook, FaTwitter } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react'
import loadable from "@loadable/component";

const Exchange = loadable(() => import("@/components/Exchange"));



// const Exchange = dynamic(() => import('@/components/Exchange'), { ssr: false })

export default function Home() {


  const router = useRouter();

  return (
    <main className="min-h-screen">
      <div className="realtive px-20 py-8 min-w-unit-sm">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-between">
            <img src="./logo.png" className="min-w-[140px] w-28" />
          </div>
          <div className='flex flex-row gap-4 items-center'>
            <button className=' w-44 h-14 btn glass-effect blue-effect btn-glow flex items-center text-xs justify-items-center'>Buy NYNYC</button>
            <w3m-button />
          </div>
        </div>
        <section className="relative flex justify-center items-center mb-32">
          <img src="./home-bg.png" className="min-w-[394px] w-[394px] lg:w-[744px]" />
          <div className="w-[90%] m-auto flex flex-col items-center gap-10 absolute transalte-y-1/2">
            <h1 className="font-medium text-center sm:text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-loose text-white">
              HONESTY | TRANSPARENCY | SIMPLICITY | TRUST
            </h1>
            <h3 className="text-white text-4xl font-light">WE GROW TOGETHER</h3>
            <div className="w-32 h-1 my-2 mx-auto rounded-full  bg-gradient-to-r from-blue-400 via-pink-400 to-indigo-400"></div>
            <div className="flex">
              <Link
                href="/mint"
                className="min-w-54 btn glass-effect blue-effect btn-glow flex items-center"
              >
                <PaperAirplaneIcon className="h-8 w-8" />
                Lunch APP
              </Link>
              <Link
                href="./NYNYC_whitepaper.pdf"
                target="_blink"
                className="min-w-54 btn glass-effect blue-effect btn-glow flex items-center"
              >
                <NewspaperIcon className="h-8 w-8" />
                WhitePaper
              </Link>
            </div>
          </div>
        </section>
        <section className="w-[80%] m-auto mb-32">
          <div className="grid grid-cols-1 gap-20 xl:grid-cols-2">
            <div className=" xl:min-w-[450px] lg:min-w-[600px] lg:min-h-[300px] sm:min-w-[400px] sm:min-h-48 min-w-[300px] w-[300px] mx-auto blue-effect glass-effect rounded-xl flex flex-col justify-center items-center">
              <h1 className="text-2xl text-center p-5">
                Buy, Sell, and Swap Crypto
              </h1>
              <h1 className='text-3xl text-center p-5 text-gray-300'>
                Simple, Fast, Free of Custody
              </h1>
            </div>
            {/* <Suspense fallback={<p>Loading feed...</p>}> */}
            <div className='xl:min-w-[450px] lg:min-w-[600px] sm:min-w-[400px] min-w-[300px] w-[300px] mx-auto'>
              <Exchange fallback={<div>Loading...</div>} />
            </div>
            {/* </Suspense> */}
          </div>
        </section>
        <section className="w-[80%] m-auto px-5">
          <div className="grid grid-cols-1 gap-8 justify-around xl:grid-cols-4 lg:grid-cols-3">
            <div className="flex flex-col text-center items-center xl:text-left xl:items-start">
              <h1 className="font-bold text-md">ABOUT</h1>
              <div className="w-20 h-0.5 my-3 rounded-full  bg-gradient-to-r from-blue-400 via-pink-400 to-indigo-400"></div>
              <div className='flex flex-col text-gray-400'>
                <Link className="text-md my-1" href="./NYNYC_whitepaper.pdf">WhitePaper</Link>
                <Link className="text-md my-1" href="/comingSoon">Documentation</Link>
                <Link className="text-md my-1" href="/comingSoon">CoinMarketCap</Link>
                <Link className="text-md my-1" href="/comingSoon">CoinGecko</Link>
                <Link className="text-md my-1" href="/comingSoon">Disclaimer</Link>
              </div>
            </div>
            <div className="flex flex-col text-center items-center xl:text-left xl:items-start">
              <h1 className="font-bold text-md">ECOSYSTEM</h1>
              <div className="w-20 h-0.5 my-3 rounded-full  bg-gradient-to-r from-blue-400 via-pink-400 to-indigo-400"></div>
              <div className='flex flex-col text-gray-400'>
                <Link className='text-md my-1' href='/mint'>NFT mint</Link>
                <Link className='text-md my-1' href="/comingSoon">Staking</Link>
                <Link className='text-md my-1' href="/comingSoon">Game</Link>
                <Link className='text-md my-1' href="/comingSoon">Mining BNB</Link>
                <Link className='text-md my-1' href="/comingSoon">New NFT collection</Link>
                <Link className='text-md my-1' href="/tokenomics">Tokenomics</Link>
              </div>
            </div>
            <div className="flex flex-col text-center items-center xl:text-left xl:items-start">
              <h1 className="font-bold text-md">SUPPORT</h1>
              <div className="w-20 h-0.5 my-3 rounded-full  bg-gradient-to-r from-blue-400 via-pink-400 to-indigo-400"></div>
              <div className='flex flex-col text-gray-400'>
                <Link className='text-md my-1' href="/stared">Getting Started</Link>
                <Link className='text-md my-1' href="/faq">FAQ</Link>
              </div>
            </div>
            <div className="sm:col-span-full sm:justify-self-center ">
              <h1 className="text-left font-bold text-md hidden xl:block">COMMUNITY</h1>
              <div className="items-start w-20 h-0.5 my-3 rounded-full hidden xl:block bg-gradient-to-r from-blue-400 via-pink-400 to-indigo-400"></div>
              <div className='flex flex-col items-center sm:flex-row gap-10 xl:gap-1 xl:flex-col'>
                <Link className="flex items-center gap-4 text-gray-400" href="https://web.telegram.org/a/#-1002038937912">
                  <div className="blue-effect glass-effect rounded-lg">
                    <FaTelegram className="h-10 w-10 p-2" />
                  </div>
                  <h1 className="hidden xl:block">Telegram</h1>
                </Link>
                <Link className="flex items-center gap-4 text-gray-400" href="https://www.facebook.com/NYNYCoins">
                  <div className="blue-effect glass-effect rounded-lg">
                    <FaFacebook className="h-10 w-10 p-2" />
                  </div>
                  <h1 className="hidden xl:block">Facebook</h1>
                </Link>
                <Link className="flex items-center gap-4 text-gray-400" href="https://twitter.com/nynycoins">
                  <div className="blue-effect glass-effect rounded-lg">
                    <FaTwitter className="h-10 w-10 p-2" />
                  </div>
                  <h1 className="hidden xl:block">Twitter</h1>
                </Link>
                {/* <Link className="flex items-center gap-4 text-gray-400">
                <div className="blue-effect glass-effect rounded-lg">
                  <FaMailBulk className="h-10 w-10 p-2" />
                </div>
                Mail
              </Link> */}
                <Link className="flex items-center gap-4 text-gray-400" href="https://discord.com/channels/1193296401245950033/1193296401245950036">
                  <div className="blue-effect glass-effect rounded-lg">
                    <FaDiscord className="h-10 w-10 p-2" />
                  </div>
                  <h1 className="hidden xl:block">Discord</h1>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex mx-auto my-20 text-2xl text-gray-400 justify-center'>
            <h1>@NYNYC - 2024. All Rights Reserved.</h1>
          </div>
        </section>
      </div>
    </main>
  );
}
