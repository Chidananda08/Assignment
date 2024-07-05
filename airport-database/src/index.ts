import "reflect-metadata";
import { createConnection } from "typeorm";
import { Airport } from "./entity/Airport";
import { City } from "./entity/City";
import { Country } from "./entity/Country";

createConnection().then(async (connection) => {
  console.log("Connected to the database");

  // Optionally, you can add some initial data here

}).catch((error) => console.log(error));
