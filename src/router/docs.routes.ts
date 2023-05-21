import { Router, response, request } from "express";

export const docsRouter = Router();

docsRouter.get("/", (request, response) => {
  return response.sendFile(process.cwd() + "/swagger.json");
});
docsRouter.get("/docs", (request, response) => {
  return response.sendFile(process.cwd() + "/index.html");
});
