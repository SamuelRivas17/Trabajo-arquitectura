export default class FlightController {
  constructor({ createFlight, getAllFlights }) {
    this.createFlight   = createFlight;
    this.getAllFlights   = getAllFlights; 
}
async create(req, res) {
    try {
      const flight = await this.createFlight.execute(req.body);
      res.status(201).json(flight);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async getAll(req, res) {
    try {
      const flights = await this.getAllFlights.execute();
      res.status(200).json(flights);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
