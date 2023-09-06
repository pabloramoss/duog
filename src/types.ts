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
}

export interface Chapter {
  name: string;
  lessons: Lesson[];
}