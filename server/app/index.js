require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan"); // logger
// Required Dependencies

// Server
const app = express();

const PORT = process.env.NODE_DOCKER_PORT || process.env.NODE_LOCAL_PORT;

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
