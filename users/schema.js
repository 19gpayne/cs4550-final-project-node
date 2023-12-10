import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true},
    last_name: { type: String, required: true},
    email: { type: String, required: true},
    role: {
      type: String, require: true,
      enum: ["READER", "PROFESSIONAL", "PUBLISHER"],
      default: "READER" },
    company: { type: String },
    favorites: [
        {
          book_key: { type: String, required: true },
          book_title: { type: String, required: true },
          book_image: { type: String },
        }
      ],
    reviews: [
      {
        book_key: { type: String, required: true },
        book_title: { type: String, required: true },
        book_image: { type: String },
        timestamp: { type: String, required: true },
        review_title: { type: String },
        rating: { type: String, required: true },
        review: { type: String },
      }
    ]
  },
  { collection: "users" });
export default userSchema;