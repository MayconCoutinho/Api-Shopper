import { BaseDataBase } from "../BaseDataBase";
import products from "../../json/products.json"

export const USER_LIST = "user"
export const PRODUCTS_LIST = "products"
export const PRODUCTS_USER_LIST = "products_user"

class Migrations extends BaseDataBase{
    execute = async() => {
        try{
            console.log("Creating Tables...")
            await this.createTables()
            console.log("Tables created successfully")
            console.log("Adding products...")
            await Migrations.connection(PRODUCTS_LIST).insert(products)
            console.log("Products added successfully")
        } catch (error:any) {
            console.log(error.mensage = undefined ? `Deu algum problema no banco de dados` : `Os produtos já existem no banco de dados` )
        }
    }
    createTables = async() => {
        await BaseDataBase.connection.raw(`

        CREATE TABLE IF NOT EXISTS products(
            id INT PRIMARY KEY,
            name VARCHAR(255),
            price DECIMAL(5,2) NOT NULL,
            qty_stock INT NOT NULL);

        CREATE TABLE IF NOT EXISTS user (
            id VARCHAR(50) NOT NULL,
            name VARCHAR(45) NOT NULL UNIQUE,
            delivery_date DATE NOT NULL,
            PRIMARY KEY (id));
        
        CREATE TABLE IF NOT EXISTS products_user (
            id VARCHAR(50) NOT NULL,
            id_product INT NOT NULL,
            id_user VARCHAR(50) NOT NULL,
            quantity INT NOT NULL,
            FOREIGN KEY (id_user) REFERENCES user (id),
            FOREIGN KEY (id_product) REFERENCES products (id));
        `)
    }
}
const migrations = new Migrations()
migrations.execute()