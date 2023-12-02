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
        res.json(book);
      };

}
export default BookRoutes;