import express from "express";
import router from "./routes/index.js";
import "dotenv/config";
import connect from "./db/connect.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

connect().catch((e) => console.log(e));

app.use(bodyParser.json());
app.use(cors());

app.use(router);

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server is running at http${
      process.env.NODE_ENV == "production" ? "s" : ""
    }://${process.env.HOST}:${process.env.PORT || 3000}...`
  );
});

// gracefully shutdown if nodemon restarts, nodemon keeps failing to close the server before attempting to restart
process.once("SIGUSR2", function () {
  console.log("received a restart from nodemon, closing express server...");
  server.close(() => {
    console.log("server closed");
  });
});
