require("dotenv").config();
let http = require("http");
let express = require("express");
const dbconnect = require("./db/db.connect");
let app = express();
let cors = require("cors");
let routes = require("./routes");

//cors
app.use(cors({ origin: "*" }));

//body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/v1", routes);

//Database connection
dbconnect();

// Server started
http.createServer(app).listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
