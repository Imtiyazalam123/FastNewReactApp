import "./App.css";
import Navbar from "./components/Navbar";
import NewArticle from "./components/NewArticle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import React, { useState } from "react";
import Welcome from "./components/Welcome";
import { articles } from "./DummyArray/dummyObject";

function App() {
 
  const [articleArry, setArticle] = useState([...articles]);
  const handlePost = (title, contents, author) => {
    console.log(title);
    console.log(contents);
    setArticle([
      ...articleArry,
      {
        title: title,
        content: contents,
        author: author,
        date: new Date().toLocaleDateString(),
      },
    ]);
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/newArticle"
            element={<NewArticle handlePost={handlePost} />}
          />

          <Route
            path="/allArticles"
            element={<Articles article={articleArry} />}
          />

          <Route path="/" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
