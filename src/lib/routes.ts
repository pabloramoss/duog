import { transformLessonName } from './utils';

export const Routes = {
  Home: '/dashboard',
  Coniugazioni: (lessonName: string) =>
    `/dashboard/coniugazioni/${transformLessonName(lessonName)}`,
};
