import { Chapter } from '@/types';

import Title from '../Title';

import Lesson from './Lesson';

interface Props {
  chapter: Chapter;
}
const DashboardChapter: React.FC<Props> = ({ chapter }) => {
  const { name, lessons } = chapter;

  const completedLessons = `${lessons.filter((lesson) => lesson.done).length}/${lessons.length}`;
  const isChapterCompleted = lessons.every((lesson) => lesson.done);

  return (
    <section className="grid gap-10">
      <div className={`grid ${isChapterCompleted && 'bg-orange-100 '} rounded-2xl p-6`}>
        <Title color={isChapterCompleted && 'text-orange-400'} size="md">
          {name}
        </Title>
        <p className={`${isChapterCompleted && 'text-green-500'} font-bold`}>
          Lessons completed: {completedLessons}
        </p>
      </div>
      <div className="grid gap-4">
        {lessons.map((lesson) => (
          <Lesson key={lesson.name} lesson={lesson} />
        ))}
      </div>
    </section>
  );
};

export default DashboardChapter;
