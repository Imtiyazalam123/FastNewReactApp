import * as Yup from "yup";

export const submitArticle = Yup.object({
  title: Yup.string().min(2).max(20).required("please enter title"),
  author: Yup.string().min(2).max(20).required("please enter author name:").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  content: Yup.string().required("please enter content"),
});
