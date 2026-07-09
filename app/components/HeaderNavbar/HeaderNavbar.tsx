'use client';
import SearchNav from "../searchNav/SearchNav";
import MobileMenu from "../MobileMenu/MobileMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const list = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
    { name: 'Sign UP', path: '/login' },
  ]
  const pathname = usePathname();
  return (
    <header className="border-b border-gray-200">
      <div className="container flex h-20 items-center p-2 justify-around :justify-between sm:px-6">
        {/* Logo */}
        <div className="flex justify-center items-center sm:gap-5 mr-1">
          <MobileMenu />
          <h1 className="sm:text-2xl hidden sm:block font-bold">Exclusive</h1>

        </div>
        {/* Nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10 text-sm font-medium">
            {
              list.map((item, index) => (
                <li key={index}>
                  <Link

                    href={`${item.path}`}
                    className={`transition-all duration-200 ${pathname===item.path?"border-b-2 border-black":"hover:border-b hover:border-b-slate-500"} `}
                  >
                    {item.name}
                  </Link>
                </li>
                


              )
              )
            }
          </ul>
        </nav>

        {/* Search + Icons */}
        <SearchNav />
      </div>
    </header>
  );
};

export default Header;