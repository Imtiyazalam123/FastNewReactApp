import React from "react";
import "../css/style.css"
export default function ArticleCard(props) {
  return (
    <div className="card my-2 mx-4 card-width col-md-4">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.contents
            ? props.contents.slice(0, 200) + "......"
            : "no contents"}
        </p>
        <p className="card-text">
          <small className="text-muted">
            By {props.author} on {new Date(props.date).toGMTString()}
          </small>
        </p>
        <a href="/" className="btn btn-success">
          View Article
        </a>
      </div>
    </div>
  );
}
ArticleCard.defaultProps = {
  title: "Title",
  contents: "contents",
};
