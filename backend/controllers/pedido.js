import { db } from '../db.js'

export const getPedidos = (_, res) => {
    const q = "SELECT * FROM pedidos";

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data);
    })
}