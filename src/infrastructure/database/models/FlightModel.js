import { Schema, model } from "mongoose";

const flightSchema = new Schema({
  aereolinia:   { type: String, required: true, unique: true },
  capacity: { type: Number, required: true },
});

export default model("Flight", flightSchema);