import { db } from '../db.js'

export const getProdutos = (_, res) => {
    const q = "SELECT * FROM produtos";

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data);
    })
}


export const addProduto = (req, res) => {
    const q = "INSERT INTO produtos(`nome`,`preco`,`categoria`,`url`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.preco,
        req.body.categoria,
        req.body.url
    ];

    db.query(q, [values] ,(err) => {
        if (err) return res.json(err)

        return res.status(200).json("produto criado com sucesso");
    })
}

export const deleteProduto = (req, res) => {
    const q = "DELETE FROM produtos WHERE `id` = ?"

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("produto deletado com sucesso");
    })
}                                                                                   