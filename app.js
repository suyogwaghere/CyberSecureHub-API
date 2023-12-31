require("dotenv").config();
const express = require("express");
const app = express();
const { verifyToken } = require("./middleware/jwt"); // Import the verifyToken middleware
const sequelize = require("./connection/db"); // Import Sequelize instance
const User = require("./models/User"); // Import User model
app.use(express.json());

// Import route files
const pingRoute = require("./routes/pingRoute");
const nmapRoute = require("./routes/nmapRoute");
const nslookupRoute = require("./routes/nslookupRoute");
const whoisRoute = require("./routes/whoisRoute");
const whatwebRoute = require("./routes/whatwebRoute");
const passwordStrengthRoute = require("./routes/passwordStrengthRoute");
const userRoute = require("./routes/userRoute");

// Use the routes
app.use("/api/ping", verifyToken, pingRoute);
app.use("/api/nmap", verifyToken, nmapRoute);
app.use("/api/nslookup", verifyToken, nslookupRoute);
app.use("/api/whois", verifyToken, whoisRoute);
app.use("/api/whatweb", whatwebRoute);
app.use("/api/password-strength", verifyToken, passwordStrengthRoute);
app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  return res.json("Welcome EmptyLeg API Library");
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
