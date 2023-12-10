import mongoose from "mongoose";
const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { collection: "companies" });
export default companySchema;