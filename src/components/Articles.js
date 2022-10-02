import React from "react";
import ArticleCard from "./ArticleCard";

export default function Articles(props) {
  return (
    <div className="container mt-4">
      <h3 className="text-danger">Your all articles :- </h3>
      <div className="row">
        {props.article.map((element) => {
          return (
            <ArticleCard key = {element.date}
              title={element.title}
              contents={element.content}
              author={element.author}
              date={element.date}
            />
          );
        })}
      </div>
    </div>
  );
}
