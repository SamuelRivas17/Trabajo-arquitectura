import { Router } from "express";

export default function passengerRoutes(controller) {
  const router = Router();

  router.post  ("/passengers",      (req, res) => controller.create(req, res));
  router.get   ("/passengers",      (req, res) => controller.getAll(req, res));


  return router;
}
