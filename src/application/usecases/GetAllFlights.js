export default class GetAllFlights {
  constructor(FlightRepository) {
    this.FlightRepository = FlightRepository    ;
  }

async execute() {
    return await this.FlightRepository.findAll();
  }
}
