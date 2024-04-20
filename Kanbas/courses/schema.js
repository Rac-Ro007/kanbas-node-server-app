import mongoose from "mongoose";
const courseSchema = mongoose.Schema(
  { 
    id: String,
    name: { type: String, required: true },
    number: String,
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: { type: String },
  },
  { collection: "courses" }
);

export default courseSchema;