import express        from "express";
import flightRoutes  from "./infrastructure/routes/flightRoutes.js";
import { flightController } from "./infrastructure/config/container.js";

const app = express();
app.use(express.json());
    
app.use("/api", flightRoutes(flightController));

export default app;
