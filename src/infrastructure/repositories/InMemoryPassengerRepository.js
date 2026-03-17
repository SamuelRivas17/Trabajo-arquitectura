import PassengerRepository from "../../domain/repositories/PassengerRepository.js";

export default class InMemoryPassengerRepository extends PassengerRepository {
  constructor() {
    super();
    this.passengers = [];
  }
  async save(passenger) {
    const index = this.passengers.findIndex(p => p.id === passenger.id);
    if (index >= 0) {
      this.passengers[index] = passenger;
    } else {
      this.passengers.push(passenger);
    }
    return passenger;
  }
  async findAll() {
    return this.passengers;
  }
}