import express from 'express';
import { getPedidos } from '../controllers/produto.js';

const router = express.Router();

router.get("/", getPedidos)

export default router