import { Schema, model } from "mongoose";

const passengerSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

export default model("Passenger", passengerSchema);