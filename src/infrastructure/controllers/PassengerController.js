export default class PassengerController {
  constructor({ createPassenger, getAllPassengers }) {
    this.createPassenger   = createPassenger;
    this.getAllPassengers   = getAllPassengers; 
}
async create(req, res) {
    try {
      const passenger = await this.createPassenger.execute(req.body);
      res.status(201).json(passenger);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async getAll(req, res) {
    try {
      const passengers = await this.getAllPassengers.execute();
      res.status(200).json(passengers);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
