import React from "react";
import { useFormik } from "formik";
import { submitArticle } from "../schemas/validation";
import { useNavigate } from "react-router-dom";

export default function NewArticle(props) {
  const initialValues = { title: "", author: "", content: "" };
  // const handleFormData = (event) => {
  //   console.log("this is dandleFormData");
  //   event.preventDefault();
  //   let title = event.target.elements.title.value.trim();
  //   let content = event.target.content.value.trim();
  //   //console.log(title)
  //   //console.log(content)
  //   props.handlePost(title, content);
  // }
  const navigator = useNavigate();
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: submitArticle,
      onSubmit: (values) => {
        console.log(values);
        props.handlePost(values.title, values.author, values.content);
        navigator("/allArticles");
      },
    });

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Article Title :
          </label>
          <input
            name="title"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="eg:- Stream API"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.title && <p className="text-danger">{errors.title}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="writerName" className="form-label">
            Writer Name :
          </label>
          <input
            name="author"
            className="form-control"
            id="writerName"
            placeholder="eg:- Imtiyaj"
            value={values.author}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.author && <p className="text-danger">{errors.author}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Article contents :
          </label>
          <textarea
            name="content"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="eg:- Java provides a new additional package in Java 8 called java.util.stream. This package consists of classes, interfaces and enum to allows functional-style operations on the elements. You can use stream by importing java.util.stream package. ..........."
            value={values.content}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {touched.content && <p className="text-danger">{errors.content}</p>}
        </div>
        <div className="container text-center">
          <button type="submit" className="btn btn-success ">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
