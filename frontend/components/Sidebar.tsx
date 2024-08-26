'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ConnectButton() {
  const pathname = usePathname();
  return (
    <aside
      id="aside"
      className="hidden sm:block sm:col-span-3 lg:col-span-2"
    >
      <div className="flex flex-col">
        <Link
          className={`link ${
            pathname === '/'
              ? 'text-lg bg-slate-800 p-3 rounded-md hover:cursor-pointer'
              : 'text-lg hover:bg-slate-300 p-3 rounded-md hover:cursor-pointer'
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
    </aside>
  );
}
