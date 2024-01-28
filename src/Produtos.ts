export interface Product {
    id?: number;
    nome?: string;
    preco: number;
    descricao?: string;
    categoria?: string;
  }


export const produtos = [
    {"id": 1, "nome": "Água Mineral", "preco": 3.0, "descricao": "Descrição do água mineral", "categoria": "bebida"},
    {"id": 2, "nome": "Biscoito", "preco": 6.0, "descricao": "Descrição do biscoito", "categoria": "biscoito"},
    {"id": 3, "nome": "Pão Integral", "preco": 9.0, "descricao": "Descrição do pão integral", "categoria": "pao"},
    {"id": 4, "nome": "Leite", "preco": 12.0, "descricao": "Descrição do leite", "categoria": "bebida"},
    // {"id": 5, "nome": "Café", "preco": 15.0, "descricao": "Descrição do café", "categoria": "Categoria 2"},
    // {"id": 6, "nome": "Arroz", "preco": 18.0, "descricao": "Descrição do arroz", "categoria": "Categoria 0"},
    // {"id": 7, "nome": "Feijão", "preco": 21.0, "descricao": "Descrição do feijão", "categoria": "Categoria 1"},
    // {"id": 8, "nome": "Azeite", "preco": 24.0, "descricao": "Descrição do azeite", "categoria": "Categoria 2"},
    // {"id": 9, "nome": "Macarrão", "preco": 27.0, "descricao": "Descrição do macarrão", "categoria": "Categoria 0"},
    // {"id": 10, "nome": "Chocolate", "preco": 30.0, "descricao": "Descrição do chocolate", "categoria": "Categoria 1"}
  ]