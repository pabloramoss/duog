import { Chapter } from "@/types";

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
