import { POSTS_TOTAL } from "../data/consts";

export const getRandomID = () => {
  return Math.ceil(Math.random() * POSTS_TOTAL);
}
