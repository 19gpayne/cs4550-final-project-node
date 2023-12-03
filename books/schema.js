import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true},
    avg_rating: { type: String },
    pub_date: { type: String, required: true},
    cover_image: { type: String },
    reviews: [
        {
          userID: { type: String, required: true },
          comment: { type: String, required: true }
        }
      ]
  },
  { collection: "books" });
export default bookSchema;