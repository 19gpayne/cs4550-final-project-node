import model from "./model.js";
export const findAllBooks = () => model.find();
export const createBook = (book) => model.create(book);
export const updateBook = (key, book) =>
  model.updateOne({ _id: key }, { $set: book });
export const findBookByKey = (key) => model.findOne({key: key});
export const findBookByTitle = (title) =>
  model.findOne({ title: title });
export const deleteBook = (key) => model.deleteOne({ _id: key });