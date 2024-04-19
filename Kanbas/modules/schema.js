import mongoose from "mongoose";
const moduleSchema = mongoose.Schema(
  {
    id: String,
    name: { type: String, unique: true, required: true },
    description: { type: String },
    course: String,
    lessons: [{
      id: String,
      name: String,
      description: String,
      module: String,
    }],
  },
  { collection: "modules" }
);

export default moduleSchema;