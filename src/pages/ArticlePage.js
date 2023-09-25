import React from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotfoundPage from "./NotFoundPage";

const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find((article) => article.name === articleId);

  if (!article) {
    return <NotfoundPage />
  }

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
    </>
  );
};

export default ArticlePage;
