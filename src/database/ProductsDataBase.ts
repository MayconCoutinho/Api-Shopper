import { BaseDataBase } from "./BaseDataBase";
import { PRODUCTS_LIST } from "./migrations/Migrations";

export class ProductsDataBase extends BaseDataBase {
  public async getProducts() {
    const result = await BaseDataBase.connection(PRODUCTS_LIST).select("*");
    return result;
  }
  public async putUpQtyStockQuantity(id: string, quantity: string) {
    await BaseDataBase.connection.raw(`
            UPDATE products
            SET qty_stock = "${quantity}"
            WHERE id = "${id}";
        `);
    return `Quantidade mudada com sucesso`;
  }
}
