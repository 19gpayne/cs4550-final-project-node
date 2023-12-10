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
          username: { type: String, required: true },
          user_role: { type: String, required: true },
          timestamp: { type: String, required: true },
          title: { type: String },
          rating: { type: String, required: true },
          review: { type: String },
        }
      ]
  },
  { collection: "books" });
export default bookSchema;