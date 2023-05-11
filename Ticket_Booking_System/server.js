const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 6000;
app.use(express.json());

const userRoute = require("./routes/usersRoute");
const busesRoute = require("./routes/busesRoute");
const bookingsRoute = require("./routes/bookingsRoute");

app.use("/api/users", userRoute);
app.use("/api/buses", busesRoute);
app.use("/api/bookings", bookingsRoute);

app.listen(port, () => console.log(`RHU Akela  port ${port}`));
