import MongoProductRepository from "../repositories/MongoProductRepository.js";
import CreateFlight              from "../../application/usecases/CreateFlight.js";
import GetAllFlights             from "../../application/usecases/GetAllFlights.js"; 
import FlightController          from "../controllers/FlightController.js";

import MongoPassengerRepository   from "../repositories/MongoPassengerRepository.js";
import CreatePassenger            from "../../application/usecases/CreatePassenger.js";
import GetAllPassengers           from "../../application/usecases/GetAllPassengers.js";
import PassengerController        from "../controllers/PassengerController.js";

// 1. Repositorio
const repository = new MongoProductRepository();
const passengerRepository = new MongoPassengerRepository();

// 2. Use cases
const createFlight   = new CreateFlight(repository);
const getAllFlights   = new GetAllFlights(repository);
const createPassenger   = new CreatePassenger(passengerRepository);
const getAllPassengers   = new GetAllPassengers(passengerRepository);
// 3. Controller
const flightController = new FlightController({
  createFlight,
  getAllFlights,
});
const passengerController = new PassengerController({
  createPassenger,
  getAllPassengers,
});

export { flightController, passengerController };
