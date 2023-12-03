import * as dao from "./dao.js";
function BookRoutes(app) {
    const findAllBooks = async (req, res) => {
        const books = await dao.findAllBooks();
        res.json(books);
      };

      //This is prolly where your API should connect to
      const createBook = async (req, res) => {
        const book = await dao.createBook(req.body);
        res.json(book);
      };

      const findBookByKey = async (req, res) => {
        const book = await dao.findBookByKey(req.params.key);
        console.log(book)
        res.json(book);
      };

      const findBookByTitle = async (req, res) => {
        const book = await dao.findBookByTitle(req.params.title);
        res.json(book);
      };

      const deleteBook = async (req, res) => {
        const status = await dao.deleteBook(req.params.key);
        res.json(status);
      };   

      const addReview = async (req, res) => {
        const status = await dao.addReview(req.params.key, req.body);
        res.json(status);
      }

      const deleteReview = async (req, res) => {
        const status = await dao.deleteReview(req.params.key, req.body);
        res.json(status);
      }

    app.get("/api/books", findAllBooks);
    app.post("/api/books", createBook);
    app.get("/api/books/:key", findBookByKey);
    app.get("/api/books/:title", findBookByTitle);
    app.delete("/api/books/:key", deleteBook);
    app.put("/api/books/:key/reviews", addReview);
    app.delete("/api/books/:key/reviews", deleteReview);

}
export default BookRoutes;