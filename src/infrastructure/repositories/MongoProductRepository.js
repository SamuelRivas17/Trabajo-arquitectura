import FlightRepository from "../../domain/repositories/FlightRepository.js";
import FlightModel      from "../database/models/FlightModel.js";

export default class MongoFlightRepository extends FlightRepository {
  async save(flight) {
    const doc = await FlightModel.findOneAndUpdate(
      { aereolinia: flight.aereolinia },
      { aereolinia: flight.aereolinia, capacity: flight.capacity },
      { upsert: true, new: true, runValidators: true }
    );
    return doc;

  }

  async findAll() {
    return await FlightModel.find();
  }

  async findByAereolinia(aereolinia) {
    return await FlightModel.findOne({ aereolinia }) ?? null;
  }

  async delete(aereolinia) {
    const result = await FlightModel.findOneAndDelete({ aereolinia });
    if (!result) throw new Error(`Flight with aereolinia "${aereolinia}" not found`);
  }
}