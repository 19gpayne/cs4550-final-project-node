import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true},
    avg_rating: { type: String, required: true},
    pub_date: { type: String, required: true},
    reviews: [
        {
            //line below is probably wrong.
          userID: { type: String, required: true },
          comment: { type: String, required: true }
        }
      ]
  },
  { collection: "books" });
export default bookSchema;