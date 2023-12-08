'use client';
import { useRouter } from 'next/navigation';

import { Lesson } from '@/types';
import { Routes } from '@/lib/routes';

import Title from '../Title';

import Avatar from './Avatar';

interface Props {
  lesson: Lesson;
}

const DashboardLesson: React.FC<Props> = ({ lesson }) => {
  const { name, description, done, available, image } = lesson;
  const router = useRouter();

  const handleRedirect = () => {
    router.push(Routes.Coniugazioni(name));
  };

  return (
    <button
      className={`${
        lesson.available ? 'cursor-pointer' : 'cursor-not-allowed'
      } flex gap-6 items-center p-6 rounded-xl ${
        lesson.available && 'hover:bg-slate-200'
      } text-start`}
      disabled={!lesson.available}
      onClick={handleRedirect}
    >
      <Avatar available={available} done={done} image={image && image} />
      <div className="grid">
        <Title className="text-sm md:text-lg">{name}</Title>
        <p className="md:text-md text-xs">{description}</p>
      </div>
    </button>
  );
};

export default DashboardLesson;
