import { imperfetto } from "./imperfetto";
import { passatoProssimo } from "./passatoProssimo";
import { presente } from './presente'

export interface LessonData {
  imperfetto: {
    verbs: {
      verb: string,
      conjugation: {
        io: string,
        tu: string,
        lui: string,
        noi: string,
        voi: string,
        loro: string
      }
    }[]
  },
  passatoProssimo: {
    verbs: {
      verb: string,
      conjugation: {
        io: string,
        tu: string,
        lui: string,
        noi: string,
        voi: string,
        loro: string
      }
    }[]
  },
  presente: {
    verbs: {
      verb: string,
      conjugation: {
        io: string,
        tu: string,
        lui: string,
        noi: string,
        voi: string,
        loro: string
      }
    }[]
  }
}

export const data: LessonData = {
  imperfetto: {
    verbs: imperfetto
  },
  passatoProssimo: {
    verbs: passatoProssimo
  },
  presente: {
    verbs: presente
  }
}