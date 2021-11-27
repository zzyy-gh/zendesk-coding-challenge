// *** Manage the API for the route /getInitialTickets ***

import express from "express";
import getInitialTickets from "../services/getInitialTickets.js";

var router = express();

router.get("/", async (req, res) => {
  getInitialTickets(req, res);
});

export default router;
