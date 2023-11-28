import Link from 'next/link';

import { Routes } from '@/lib/routes';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white drop-shadow-lg py-2">
      <div className="flex items-center mx-auto justify-between max-w-5xl">
        <div>
          <img />
          <Link className="font-bold" href={Routes.Home}>
            Duogringo
          </Link>
        </div>
        <div>
          <img className="rounded-full cursor-pointer" src="https://via.placeholder.com/40" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
