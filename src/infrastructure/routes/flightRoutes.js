import { Router } from "express";

export default function flightRoutes(controller) {
  const router = Router();

  router.post  ("/flights",      (req, res) => controller.create(req, res));
  router.get   ("/flights",      (req, res) => controller.getAll(req, res));


  return router;
}
