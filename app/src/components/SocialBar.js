import Image from 'next/image';
import Link from 'next/link';

import { Social } from '@/data/social';

export default function SocialBar() {
  return (
    <>
      <div className="flex justify-center items-center gap-4">
        {Social.map((item) => {
          return (
            <>
              <Link href={item.link} key={item.name}>
                <Image src={item.svgImage} alt={item.name} width={30} height={30} className="transition-transform duration-300 ease-in-out cursor-pointer hover:scale-110"/>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
