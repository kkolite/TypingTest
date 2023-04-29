export enum EPages {
  TEST = "/test",
  MAIN = "/",
  TOP = "/top",
}

export interface IApi {
  title: string;
  body: string;
}

export enum ETestStatus {
  ERROR,
  WAITING,
  LOADING,
  FINISH,
  SLEEP,
  API_ERROR,
}

export enum ESort {
  TIME = "time",
  SPEED = "speed",
  QUALITY = "quality",
}
