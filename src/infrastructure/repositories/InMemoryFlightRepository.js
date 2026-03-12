import FlightRepository from "../../domain/repositories/FlightRepository.js";

export default class InMemoryFlightRepository extends FlightRepository {
  constructor() {
    super();
    this.flights = [];
  }
  async save(flight) {
    const index = this.flights.findIndex(p => p.id === flight.id);
    if (index >= 0) {
      this.flights[index] = flight;
    } else {
      this.flights.push(flight);
    }
    return flight;
  }
  async findAll() {
    return this.flights;
  }
}
