import {Inter as CustomFont} from 'next/font/google';

import Providers from '@/context/Providers';
import { SITE } from 'src/config';

import '@/styles/globals.css';
import '@/styles/tailwind.css'

const customFont = CustomFont({
  subsets: ['latin'],
  variable: '--font-custom',
  weight: ['400', '500', '700', '900'],
});

export default function RootLayout({children}) {
  return (
      <html lang="en" className={`${customFont.variable}`}>
      <head>
          <title>
            {SITE.title}
          </title>
      </head>
      <body
          className="relative bg-white 
          dark:bg-black">
          <Providers>
              {children}
          </Providers>
      </body>
      </html>
  )
}