import { Product } from '../Produtos';
import styles from './Home.module.css'
import logo from './Imagem_do_WhatsApp_de_2024-01-26_à_s__16.59.29_c5e8e7da-removebg-preview.png'
import { useEffect, useState } from 'react';
import { HomePage } from './components/HomePage';
import { Carrinho } from './components/Carrinho';
import { Form } from './components/Form';
import axios from 'axios';

export function Home() {
    const [carrinho, setCarrinho] = useState<Product[]>([])
    const [total, setTotal] = useState<number | undefined>(0)
    const [carrinhoOpen, setCarrinhoOpen] = useState(false)
    const [form, setForm] = useState(false)
    const [home, setHome] = useState(true)

    const [rua, setRua] = useState('')
    const [complemento, setComplemento] = useState('')
    const [nome, setNome] = useState('')
    const [numero, setNumero] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState('')


    function enviarCarrinhoParaWhatsApp() {
        let mensagem = `${nome}, ${rua} - ${numero}, ${complemento}\n\nPedido:\n`;

        carrinho.forEach((item, index) => {
            mensagem += `${index + 1}. ${item.nome} - Preço: $${item?.preco}\n`;
        });

        mensagem += `\nTotal: R$${total},00`


        const mensagemCodificada = encodeURIComponent(mensagem);


        const whatsappUrl = `https://wa.me/5585997226672?text=${mensagemCodificada}`;


        window.open(whatsappUrl, '_blank');
    }

    function adicionar(pedido: Product) {
        setCarrinho([...carrinho, pedido])

    }

    function remover(indexRemove: any) {
        setCarrinho(carrinhoAtual => carrinhoAtual.filter((_, index) => index !== indexRemove));

    }

    function totalPreco() {
        let final = 0
        carrinho.forEach(item => {
            final += item?.preco
            setTotal(final)
        });
    }

    useEffect(() => {
        totalPreco();
        // countItens();
    }, [carrinho])

    function goHome() {
        setHome(true);
        setForm(false)
        setCarrinhoOpen(false)
    }
    function goCard() {
        setHome(false);
        setForm(false)
        setCarrinhoOpen(true)
    }
    function goForm() {
        setHome(false);
        setForm(true)
        setCarrinhoOpen(false)
        console.log(form)
        console.log(preco)
        console.log(categoria)
    }


    const [produtos, setProdutos] = useState([])

   

    async function getProdutos() {
        try {
            const res = await axios.get("http://localhost:8800")
            setProdutos(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function addProdutos({nome, preco, categoria}:any) {
        try {
            const response = await axios.post("http://localhost:8800/produtos/add", {
                nome: nome,
                preco: preco,
                categoria: categoria,
            });
            console.log("Produto adicionado:", response.data); // I
            getProdutos()
            goHome()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProdutos();
        // countItens();
    }, [setProdutos])


    return (
        <>
            <>

                {home ? <HomePage
                    logo={logo}
                    styles={styles}
                    carrinho={carrinho}
                    adicionar={adicionar}
                    remover={remover}
                    produtos={produtos}
                    enviarCarrinhoParaWhatsApp={enviarCarrinhoParaWhatsApp}
                    total={total} goCard={goCard} /> : carrinhoOpen ?
                    <Carrinho carrinho={carrinho} goHome={goHome} total={total} goForm={goForm} remover={remover} />
                    : <Form setPreco={setPreco} getProdutos={getProdutos} goHome={goHome}
                    setCategoria={setCategoria} adicionar={addProdutos} goCard={goCard} carrinho={carrinho} setRua={setRua} setNome={setNome} setNumero={setNumero} setComplemento={setComplemento} enviarCarrinhoParaWhatsApp={enviarCarrinhoParaWhatsApp} />}

            </>
        </>
    )
}