import Image from 'next/image';
import Link from 'next/link';
import Tag from '@/components/Tag';

import { IconBookDownload } from '@tabler/icons-react';

import { about } from '@/data/about';

export default function Home() {
  return (
    <main className="">
      <section className="flex mt-24 mb-32 items-center gap-20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-bold">
              {about.title}
            </h1>
          </div>
          <p className="text-zinc-400 leading-relaxed">{about.me}</p>
          <div className="flex justify-start items-center gap-2">
            <Link
              href=""
              className="group rounded-lg border border-transparent px-3 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`text-sm flex items-center justify-center gap-1`}>
                Download Resume
              </h2>
            </Link>
            <Link
              href="/about"
              className="group rounded-lg border border-transparent px-3 py-1 transition-colors border-gray-300 bg-gray-100 text-black hover:bg-gray-300"
            >
              <h2 className={`text-sm flex items-center justify-center gap-1`}>
                Explore
              </h2>
            </Link>
          </div>
        </div>
        <Image src="/me.jpg" width="400" height="300" alt="Matias Vallejos" className="rounded-full" />
      </section>
    </main>
  );
}
