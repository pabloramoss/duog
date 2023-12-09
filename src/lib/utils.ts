import { verbiIrregolari } from '@/data/verbiIrregolari';
import { Chapter } from '@/types';

export function getProgress(chapters: Chapter[]) {
  let totalLessons = 0;
  let completedLessons = 0;

  for (const chapter of chapters) {
    for (const lesson of chapter.lessons) {
      totalLessons++;
      if (lesson.done) {
        completedLessons++;
      }
    }
  }

  if (totalLessons === 0) {
    return 0;
  }

  const progress = (completedLessons / totalLessons) * 100;

  return Math.round(progress);
}

export function splitCamelCase(inputString: string) {
  return inputString.replace(/([a-z])([A-Z])/g, '$1 $2');
}

export function shuffleArray(array: any[]) {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

export function transformLessonName(lessonName: string) {
  const words = lessonName.toLowerCase().split(' ');
  const camelCaseName = words.reduce((result, word, index) => {
    if (index === 0) {
      return result + word;
    }

    return result + word.charAt(0).toUpperCase() + word.slice(1);
  }, '');

  return camelCaseName;
}

export function isIrregularVerb(verb: string) {
  return verbiIrregolari.includes(verb);
}
