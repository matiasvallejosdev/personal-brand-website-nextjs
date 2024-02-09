import NavigationBar from '@/components/NavigationBar';
import SocialBar from '@/components/SocialBar';

import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="py-6 z-10 w-full flex items-center justify-between">
        <div className="flex place-items-center gap-10">
          <Link href='/' className="flex hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
            <span className="font-bold text-xl">Matias Vallejos</span>
          </Link>
          <NavigationBar />
        </div>
        <div>
          <SocialBar />
        </div>
      </div>
    </>
  );
}
