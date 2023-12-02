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
  },
  { collection: "users" });
export default userSchema;