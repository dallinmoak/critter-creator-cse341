import swaggerAutogen from "swagger-autogen";
import "dotenv/config";

const env = process.env.NODE_ENV || "development";
const host =
  env == "production"
    ? process.env.RENDER_EXTERNAL_HOSTNAME
    : `${process.env.HOST}:${process.env.PORT || 3000}`;
const doc = {
  info: {
    version: "1.0.0",
    title: "Critter API",
    description: "Critter API documentation",
  },
  host,
  schemes: [env == "production" ? "https" : "http"],
  definitions: {
    Critter: {
      $name: "joe",
      $intelligence: 1,
      $body_plan: "bipedal",
      $color_code: "ff0000",
    },
    Critters: [{ $ref: "#/definitions/Critter" }],
  },
};

const outputFile = "./swagger.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);
