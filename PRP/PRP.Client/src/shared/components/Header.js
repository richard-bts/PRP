import { Navbar } from './';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="h-20">
      <div className="container flex items-center justify-between h-full p-5 md:p-0 md:px-4">
        <Link href='/'>
          <a className="flex items-center gap-3">
            <Image
              alt='Last Mile Logo'
              className="w-16"
              width={100}
              height={30}
              src='/img/last_mile_logo.png'
              title="Last-Mile-Logo"
            />
            <p className="hidden font-bold md:inline-block">Partner Reporting Package</p>
          </a>
        </Link>

        <Navbar />
      </div>
    </header>
  );
};
