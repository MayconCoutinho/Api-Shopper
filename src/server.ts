import { app } from ".";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORTA || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORTA || 3003} 🚀`);
});
