const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { config } = require("dotenv");
const morgan = require("morgan");

// ----- # Import controllers # ----- //
const userControllers = require("./api/controllers/user/user.js");
const authControllers = require("./api/controllers/authentication/auth.js");
const kapalControllers = require("./api/controllers/user/kapal.js");
const decodedControllers = require("./api/controllers/decoded/user.js");
const layananControllers = require("./api/controllers/admin/layanan.js");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(morgan("tiny"));
config();

// ----- # Middleware for user role # ----- //
const verifyToken = (req, res, next) => {
  const token = req.headers.cookie;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Token not provided" });
  }

  jwt.verify(token, process.env.USER_TOKEN_SECRET, {}, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
    req.user = decoded;
    next();
  });
};

// ----- # Middleware for admin role # ----- //
const verifyTokenAdmin = (req, res, next) => {
  const token = req.headers.cookie;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Token not provided" });
  }

  jwt.verify(token, process.env.ADMIN_TOKEN_SECRET, {}, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
    req.user = decoded;
    next();
  });
};

// ----- # Import controllers # ----- //

// ----- # User routes # ----- //
app.use("/api/user", userControllers);
app.use("/api/authentication/", authControllers);
app.use("/api/decoded/", decodedControllers);
app.use("/api/kapal/user", verifyToken, kapalControllers);
app.use("/api/layanan/admin", verifyToken, layananControllers);

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));
