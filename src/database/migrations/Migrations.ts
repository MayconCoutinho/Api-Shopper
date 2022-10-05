import { BaseDataBase } from "../BaseDataBase";
import products from "../products.json"

export const PRODUCTS_LIST = "products"

class Migrations extends BaseDataBase{
    execute = async() =>{
        try{
            console.log("Creating Tables...")
            console.log("Adding products...")
            await this.createTables()
            console.log("Products added successfully")
            await Migrations.connection("products").insert(PRODUCTS_LIST)
            console.log("Tables created successfully")
        } catch (error:any) {
            console.log(error.mensage)
            // Quando a tabela já existe da erro, tratar erro.
        }
    }
    createTables = async() =>{
        await BaseDataBase.connection.raw(`
        CREATE TABLE IF NOT EXISTS products(
            id INT PRIMARY KEY,
            name VARCHAR(255),
            price DECIMAL(5,2) NOT NULL,
            qty_stock INT NOT NULL);
        `)
    }
}
const migrations = new Migrations()
migrations.execute()