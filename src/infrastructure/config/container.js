import MongoProductRepository from "../repositories/MongoProductRepository.js";
import CreateFlight              from "../../application/usecases/CreateFlight.js";
import GetAllFlights             from "../../application/usecases/GetAllFlights.js"; 
import FlightController          from "../controllers/FlightController.js";

// 1. Repositorio
const repository = new MongoProductRepository();

// 2. Use cases
const createFlight   = new CreateFlight(repository);
const getAllFlights   = new GetAllFlights(repository);

// 3. Controller
const flightController = new FlightController({
  createFlight,
  getAllFlights,
});

export { flightController };
