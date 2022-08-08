import { Navbar } from './';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { navLinks } from '../data';
import { useEffect, useState } from 'react';

export const Header = () => {
  
  const router = useRouter();
  const [isActive, setIsActive] = useState(router.pathname === navLinks[0].navPath);

  useEffect(() => {
    setIsActive(router.pathname === navLinks[0].navPath);
  }, [router.pathname]);

  return (
    <header className="h-20">
      <div className="container flex items-center justify-between h-full p-5 md:p-0 md:px-4">
        { isActive ?
          <a className="flex items-center gap-3 cursor-default">
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
          :
          <Link href={`${navLinks[0].to}`}>
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
        }

        <Navbar />
      </div>
    </header>
  );
};
