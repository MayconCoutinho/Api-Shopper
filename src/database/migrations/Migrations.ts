import { BaseDataBase } from "../BaseDataBase";
import products from "../products.json"

export const USER_LIST = "user"
export const PRODUCTS_LIST = "products"
export const PRODUCTS_USER_LIST = "products_user"


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

        CREATE TABLE IF NOT EXISTS products (
            id INT NOT NULL,
            name VARCHAR(250) NOT NULL,
            price DECIMAL(5,2) NOT NULL,
            qty_stock INT NOT NULL,
            PRIMARY KEY (id));

        CREATE TABLE IF NOT EXISTS user (
            id VARCHAR(50) NOT NULL,
            name VARCHAR(45) NOT NULL,
            delivery_date DATE NOT NULL,
            PRIMARY KEY (id));

        CREATE TABLE IF NOT EXISTS products_user (
            id VARCHAR(50) NOT NULL,
            id_product INT NOT NULL,
            id_user INT NOT NULL,
            quantity INT NOT NULL DEFAULT 0,
            PRIMARY KEY (id),
            INDEX fk_product_user_idx (id_user ASC),
            INDEX fk_id_product_idx (id_product ASC),
            CONSTRAINT fk_id_user
            FOREIGN KEY (id_user)
            REFERENCES user (id)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
            CONSTRAINT fk_id_product
            FOREIGN KEY (id_product)
            REFERENCES products (id)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION);
        `)  
    }
}
const migrations = new Migrations()
migrations.execute()