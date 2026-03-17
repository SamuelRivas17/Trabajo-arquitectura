import PassengerRepository from "../../domain/repositories/PassengerRepository.js";
import PassengerModel      from "../database/models/PassengerModel.js";

export default class MongoPassengerRepository extends PassengerRepository {
  async save(passenger) {
    const doc = await PassengerModel.findOneAndUpdate(
      { name: passenger.name },
      { name: passenger.name, age: passenger.age },
      { upsert: true, new: true, runValidators: true }
    );
    return doc;

  }

  async findAll() {
    return await PassengerModel.find();
  }

  async findByName(name) {
    return await PassengerModel.findOne({ name }) ?? null;
  }

  async delete(name) {
    const result = await PassengerModel.findOneAndDelete({ name });
    if (!result) throw new Error(`Passenger with name "${name}" not found`);
  }
}