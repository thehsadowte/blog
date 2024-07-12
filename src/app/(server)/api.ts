import { ERRORS } from "../errors";
import articles from "./db.json";

import { delayed } from "./delay";

function getAllArticles() {
  return delayed(articles);
  //   return delayed(articles, { timeout: 1500, shouldFail: false });
}

export default getAllArticles;

export function getArticleByName(articleName: string) {
  const article = articles.find(
    (x) => x.name.trim().toLowerCase() === articleName.toLowerCase()
  );

  if (!article) {
    throw new Error(ERRORS.NOT_FOUND);
  }
  return article;
}
