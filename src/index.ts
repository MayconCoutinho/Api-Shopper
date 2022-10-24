import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { userRouter } from './router/UserRouter'
import { productsRouter } from './router/ProductsRouter'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})
app.use("/shopper/user", userRouter)
app.use("/shopper/products", productsRouter)