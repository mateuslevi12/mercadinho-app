import express from 'express';
import { getProdutos, addProduto, deleteProduto } from '../controllers/produto.js';


const router = express.Router();

router.get("/", getProdutos)
router.post("/", addProduto)
router.delete("/:id", deleteProduto)


export default router