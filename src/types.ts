export interface Conjugation {
  io: string;
  tu: string;
  lui: string;
  noi: string;
  voi: string;
  loro: string;
}

export interface Lesson {
  name: string;
  description: string;
  done: boolean;
  available: boolean;
  image?: string;
}

export interface Chapter {
  name: string;
  lessons: Lesson[];
}

export interface LocalStorageObj {
  conjugations: {
    futuroSemplice: { done: boolean; progression: number };
    presente: { done: boolean; progression: number };
    imperfetto: { done: boolean; progression: number };
    passatoProssimo: { done: boolean; progression: number };
  };
}

export type ActualConjugations = 'futuroSemplice' | 'presente' | 'imperfetto' | 'passatoProssimo';

interface Person {
  name: string;
  age: number;
  location: string;
}
type ThisIsAFunction = (data: unknown) => Person[];
