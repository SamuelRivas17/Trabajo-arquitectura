import Passenger from "../../domain/entities/Passenger.js";

export default class CreatePassenger {
  constructor(PassengerRepository) {
    this.PassengerRepository = PassengerRepository    ;
  }

  async execute({ name, age }) {
    const passenger = new Passenger(name, age);
    return await this.PassengerRepository.save(passenger);
  }
}