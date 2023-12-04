import DashboardChapter from '@/components/Dashboard/Chapter';
import Title from '@/components/Title';
import { chapters } from '@/data/chapters';
import { getProgress } from '@/lib/utils';

const Dashboard: React.FC = () => {
  const progression = `${getProgress(chapters)}%`;

  return (
    <main className="text-black flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-white">
      <div className="bg-white grid gap-10">
        <section className="">
          <Title>Complete Italian</Title>
          <Title size="sm">
            Progress: <span>{progression}</span>
          </Title>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: progression }} />
          </div>
        </section>
        <section className="grid gap-12">
          {chapters.map((chapter) => (
            <DashboardChapter key={chapter.name} chapter={chapter} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
