const app = require("express")();
const PORT = process.env.PORT || 9000;

var testAPIRouter = require("./routes/testAPI");
var getInitialTicketsRouter = require("./routes/getInitialTickets");

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// api routes
app.use("/testAPI", testAPIRouter); // test API
app.use("/getInitialTickets", getInitialTicketsRouter); // API to fetch all tickets from Zendesk
