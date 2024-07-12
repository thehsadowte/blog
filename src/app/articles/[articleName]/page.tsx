import { getArticleByName } from "@/app/(server)/api";
import React from "react";

async function ArticlePage({ params }: Params) {
  const { articleName } = params;
  const article = await getArticleByName(articleName);
  return (
    <>
      <h1>{article.header}</h1>
      <h2>{article.preview}</h2>
      {article.text.map((line, i) => {
        <p key={i}>{line}</p>;
      })}
    </>
  );
}

export default ArticlePage;
