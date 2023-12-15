// ----- # API Route http://localhost:8080/api/decoded/~ # ----- //

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

const app = express();
app.use(cookieParser());

// ----- # Login role user # ----- //
// router.get("/getuserinfo", async (req, res) => {
//   const token = req.headers.cookie;
//   c

//   jwt.verify(token, process.env.USER_TOKEN_SECRET, {}, (err, decoed)=>{
//     if (err) {
//       return res.status(401).json({ message: "Invalid Tokne"})
//     }

//   })
//   try {
//     if ()
//     res.json;
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
