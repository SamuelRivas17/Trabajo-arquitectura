import Flight from "../../domain/entities/Flight.js";

export default class CreateFlight {
  constructor(FlightRepository) {
    this.FlightRepository = FlightRepository    ;
  }

  async execute({ aereolinia, capacity }) {
    const flight = new Flight(aereolinia, capacity );
    return await this.FlightRepository.save(flight);
  }
}
