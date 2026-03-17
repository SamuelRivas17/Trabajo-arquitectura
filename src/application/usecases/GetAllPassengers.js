export default class GetAllPassengers {
  constructor(PassengerRepository) {
    this.PassengerRepository = PassengerRepository    ;
  }

async execute() {
    return await this.PassengerRepository.findAll();
  }
}
