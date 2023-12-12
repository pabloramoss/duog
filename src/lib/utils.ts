import { verbiIrregolari } from '@/data/verbiIrregolari';
import { ActualConjugations, Chapter, LocalStorageObj } from '@/types';

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

export const saveToLocalStorage = (key: string, data: LocalStorageObj): void => {
  try {
    const serializedData = JSON.stringify(data);

    localStorage.setItem(key, serializedData);
    console.log(`Data saved to localStorage with key: ${key}`);
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
};

export const getFromLocalStorage = (key: string): LocalStorageObj | null => {
  try {
    const serializedData = localStorage.getItem(key);

    if (serializedData) {
      return JSON.parse(serializedData) as LocalStorageObj;
    }

    return null;
  } catch (error) {
    console.error('Error getting data from localStorage:', error);

    return null;
  }
};
