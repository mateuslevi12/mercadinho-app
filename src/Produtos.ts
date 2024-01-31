export interface Product {
    id?: number;
    nome?: string;
    preco: number;
    descricao?: string;
    categoria?: string;
    url?: string;
  }

  import urlAgua from './imagens/aguas.webp'
  import urlBiscoito from './imagens/biscoito.webp'
  import urlLeite from './imagens/leite.jpeg'
  import urlPao from './imagens/Plusvita-12-Graos-1.jpg'
  import urlAzeite from './imagens/azeite.webp'
  import urlArroz from './imagens/arroz.webp'
  import urlFeijao from './imagens/feijao.jpeg'
  import urlCafe from './imagens/cafe.jpeg'
  import urlMacarrao from './imagens/macarao.webp'
  import urlChocolate from './imagens/chocolate.webp'
export const produtos = [
    {"id": 1, "nome": "Água Mineral", "preco": 3.0, "descricao": "Descrição do água mineral", "categoria": "bebida", "url": urlAgua},
    {"id": 2, "nome": "Biscoito", "preco": 6.0, "descricao": "Descrição do biscoito", "categoria": "biscoito", "url": urlBiscoito},
    {"id": 3, "nome": "Pão Integral", "preco": 9.0, "descricao": "Descrição do pão integral", "categoria": "comida", "url": urlPao},
    {"id": 4, "nome": "Leite", "preco": 12.0, "descricao": "Descrição do leite", "categoria": "bebida", "url": urlLeite},
    {"id": 5, "nome": "Café", "preco": 15.0, "descricao": "Descrição do café", "categoria": "bebida", "url": urlCafe},
    {"id": 6, "nome": "Arroz", "preco": 18.0, "descricao": "Descrição do arroz", "categoria": "comida", "url": urlArroz},
    {"id": 7, "nome": "Feijão", "preco": 21.0, "descricao": "Descrição do feijão", "categoria": "comida", "url": urlFeijao},
    {"id": 8, "nome": "Azeite", "preco": 24.0, "descricao": "Descrição do azeite", "categoria": "ingrediente", "url": urlAzeite},
    {"id": 9, "nome": "Macarrão", "preco": 27.0, "descricao": "Descrição do macarrão", "categoria": "comida", "url": urlMacarrao},
    {"id": 10, "nome": "Chocolate", "preco": 30.0, "descricao": "Descrição do chocolate", "categoria": "doce", "url": urlChocolate}
  ]