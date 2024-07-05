import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { City } from "./City";

@Entity()
export class Airport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  iata_code: string;

  @ManyToOne(() => City, (city) => city.airports)
  city: City;
}
