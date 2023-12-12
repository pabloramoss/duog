'use client';
import Link from 'next/link';
import { Avatar } from '@mui/material';

import { Routes } from '@/lib/routes';
import { saveToLocalStorage } from '@/lib/utils';

const initialLocalStorage = {
  conjugations: {
    futuroSemplice: { done: false, progression: 0 },
    presente: { done: false, progression: 0 },
    imperfetto: { done: false, progression: 0 },
    passatoProssimo: { done: false, progression: 0 },
  },
};

const Navbar: React.FC = () => {
  const handleResetLocalStorage = () => {
    saveToLocalStorage('duogringo', initialLocalStorage);
  };

  return (
    <nav className="bg-white drop-shadow-lg py-2">
      <div className="flex items-center mx-auto justify-between max-w-5xl px-4">
        <div>
          <img />
          <Link className="font-bold" href={Routes.Home}>
            Duogringo
          </Link>
        </div>
        <div onClick={handleResetLocalStorage}>
          <Avatar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
