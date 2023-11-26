'use client';
import { useRouter } from 'next/navigation';

import { Lesson } from '@/types';

import Title from '../Title';

import Avatar from './Avatar';

interface Props {
  lesson: Lesson;
}

const DashboardLesson: React.FC<Props> = ({ lesson }) => {
  const { name, description, done, available } = lesson;
  const router = useRouter();

  function transformLessonName(lessonName: string) {
    const words = lessonName.toLowerCase().split(' ');
    const camelCaseName = words.reduce((result, word, index) => {
      if (index === 0) {
        return result + word;
      }

      return result + word.charAt(0).toUpperCase() + word.slice(1);
    }, '');

    return camelCaseName;
  }

  const handleRedirect = () => {
    router.push(`/dashboard/learning/${transformLessonName(name)}`);
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
      <Avatar available={available} done={done} />
      <div className="grid">
        <Title size="sm">{name}</Title>
        <p>{description}</p>
      </div>
    </button>
  );
};

export default DashboardLesson;
