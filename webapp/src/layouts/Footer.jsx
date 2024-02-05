import { Navigation } from "@/data/navigation"
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-3 text-gray-500">
      <div className="flex justify-center items-center gap-4">
        {Navigation.map((item) => {
          if(!item.isEnabled) return;
          return (
            <Link
              href={item.path}
              alt={item.name}
              key={item.name}
              className="cursor-pointer"
            >
              <span className="text-md">{item.name}</span>
            </Link>
          );
        })}
      </div>
      <div className="text-center mt-4">
        &copy; {currentYear} Matias Vallejos. All rights reserved.
      </div>
    </div>
  );
}
