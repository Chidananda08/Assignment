import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import bodyParser from "body-parser";
import { Airport } from "./entity/Airport";
import { City } from "./entity/City";
import { Country } from "./entity/Country";

const app = express();
app.use(bodyParser.json());

createConnection().then(async (connection) => {
  console.log("Connected to the database");

  // Define your API endpoint here
  app.get("/airport/:iata_code", async (req, res) => {
    const { iata_code } = req.params;

    try {
      const airport = await connection.getRepository(Airport).findOne({
        where: { iata_code },
        relations: ["city", "city.country"]
      });

      if (!airport) {
        return res.status(404).json({ message: "Airport not found" });
      }

      res.json(airport);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const port = 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });

}).catch((error) => console.log(error));
