import { Navigation } from '@/data/navigation';
import Link from 'next/link';

export default function NavigationBar() {

  return (
    <>
      <div className="flex justify-between items-center gap-4">
        {Navigation.map((item) => {
          if(!item.isEnabled) return;
          return (
            <>
              <Link href={item.path} alt={item.name} key={item.name} className="cursor-pointer hover:text-primary">
                <span className="text-sm">{item.name}</span>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
