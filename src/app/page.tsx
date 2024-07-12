// "use client";
import Link from "next/link";
import getAllArticles from "./(server)/api";
import AppLink from "./shared/components/app-link";
import { ROUTING } from "./routing";
import App from "next/app";
import { useState } from "react";
import { ArticlePreview } from "./ArticlePreview";

const ARICLES_PER_PAGE = 10;

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const page = Number.parseInt(searchParams.page ?? 1);
  const allArticles = await getAllArticles();
  const articles = allArticles.slice(
    (page - 1) * ARICLES_PER_PAGE,
    page * ARICLES_PER_PAGE
  );
  const nextPageUrl = {
    search: new URLSearchParams({
      page: (page + 1).toString(),
    }).toString(),
  };

  // console.log({ searchParams });

  return (
    <>
      <h1>Sasha Hol's developing Blog, page {page}</h1>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.name}>
              <ArticlePreview name={article.name} text={article.header} />
            </li>
          );
        })}
      </ul>
      <AppLink href={nextPageUrl}>Next Page</AppLink>
    </>
  );
}
