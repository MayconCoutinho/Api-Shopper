import express from "express";
import cors from "cors";
import { userRouter } from "./router/UserRouter";
import { productsRouter } from "./router/ProductsRouter";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import { docsRouter } from "./router/docs.routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/swagger", docsRouter);
app.use("/shopper/user", userRouter);
app.use("/shopper/products", productsRouter);

export { app };
