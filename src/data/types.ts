export enum EPages {
  TEST = '/test'
}

export interface IApi {
  title: string,
  body: string
}

export enum ETestStatus {
  ERROR,
  WAITING,
  LOADING,
  FINISH,
  SLEEP
}