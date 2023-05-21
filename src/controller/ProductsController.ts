import { Request, Response } from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";

export class ProductsController {
  constructor(private productsBusiness: ProductsBusiness) {}
  public getProducts = async (req: Request, res: Response) => {
    try {
      const result = await this.productsBusiness.getProducts();
      console.log("estou aqui");

      res.status(201).send({ result });
    } catch (error: any) {
      res.status(500).send(error);
    }
  };
  public putUpQtyStockQuantity = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const quantity = req.params.quantity;
      const response = await this.productsBusiness.putUpQtyStockQuantity(
        id,
        quantity
      );
      res.status(201).send(response);
    } catch (error: any) {
      res.status(500).send(error);
    }
  };
}
