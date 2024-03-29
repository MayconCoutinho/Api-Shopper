import { BaseDataBase } from "../BaseDataBase";
import products from "../../json/products.json";

export const USER_LIST = "user";
export const PRODUCTS_LIST = "products";
export const PRODUCTS_USER_LIST = "products_user";

class Migrations extends BaseDataBase {
  execute = async () => {
    try {
      console.log("Creating tables...");
      await this.createTables();
      console.log("✅ Tables created successfully.");
      console.log("✅ Populating tables...");
      await this.insertData();
      console.log("✅ Tables populated successfully.");
      console.log("✅ Migrations completed.");
    } catch (error) {
      console.log("❌ FAILED! Error in migrations...");
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      console.log("✅ Ending connection...");
      BaseDataBase.connection.destroy();
      console.log("✅ Connection closed");
    }
  };
  createTables = async () => {
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
        `);
  };
  insertData = async () => {
    await BaseDataBase.connection(PRODUCTS_LIST).insert(products);
  };
}
const migrations = new Migrations();
migrations.execute();
