// Per minute

export const getSpeed = (start: number, index: number) => {
  const now = Date.now();
  const time = now - start;

  return index / (time / 60000)
}