import  express  from "express";
import cors from 'cors';
import produtoRoutes from "./routes/produtos.js"
import pedidoRoutes from "./routes/pedidos.js."

const app = express();

app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}))

app.use("/", produtoRoutes)
app.use("/", pedidoRoutes)
app.listen(8800)