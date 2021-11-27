// *** main file to handle routing ***

import express from "express";
import initialTicketsRoute from "./routes/initialTicketsRoute.js";

const App = express();

App.use("/initialTickets", initialTicketsRoute); // route to initialTickets

export default App;
