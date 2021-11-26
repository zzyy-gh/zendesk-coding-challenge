// *** main file to handle routing ***

import express from "express";
import getInitialTicketsRoute from "./routes/getInitialTicketsRoute.js";

const App = express();

App.use("/getInitialTickets", getInitialTicketsRoute); // route to getInitialTickets

export default App;
