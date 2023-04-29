export const getTimeString = (time: number) => {
  const minutes = `0${Math.floor(time / 60000)}`.slice(-2);
  const seconds = `0${Math.round((time % 60000) / 1000)}`.slice(-2);

  return `${minutes}:${seconds}`;
};
