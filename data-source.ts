import "reflect-metadata"
import { DataSource } from "typeorm"
import { GroceryItem } from "./src/entity/GroceryItem"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "myuser",
    password: "mypassword",
    database: "mydatabase",
    synchronize: true,
    logging: false,
    entities: [GroceryItem], // Use GroceryItem entity here
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })