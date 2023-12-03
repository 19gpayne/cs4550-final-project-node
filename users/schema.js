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
    favorites: [
        {
          key: { type: String, required: true },
          title: { type: String, required: true },
          image: { type: String },
        }
      ],
  },
  { collection: "users" });
export default userSchema;