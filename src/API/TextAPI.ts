import { JSON_PLACEHOLDER, POSTS } from "../data/consts";
import { IApi } from "../data/types";
import { getRandomID } from "../utils";

export const getTextFromAPI = async () => {
  const ID = getRandomID();
  const res = await fetch(`${JSON_PLACEHOLDER}${POSTS}${ID}`);
  const { title, body }: IApi = await res.json();
  return `${title}. ${body}`;
}
