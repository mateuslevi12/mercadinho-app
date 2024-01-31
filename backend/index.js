import  express  from "express";
import cors from 'cors';
import produtoRoutes from "./routes/produtos.js"

const app = express();

app.use(express.json())
app.use(cors())

app.use("/", produtoRoutes)
app.listen(8800)