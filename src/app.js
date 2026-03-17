import express        from "express";
import flightRoutes  from "./infrastructure/routes/flightRoutes.js";
import passengerRoutes                           from "./infrastructure/routes/passengerRoutes.js";
import { flightController, passengerController } from "./infrastructure/config/container.js";


const app = express();
app.use(express.json());
    
app.use("/api", flightRoutes(flightController));
app.use("/api", passengerRoutes(passengerController));

export default app;
