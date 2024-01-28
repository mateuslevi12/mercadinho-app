import { Product, produtos } from '../Produtos';
import styles from './Home.module.css'
import logo from './Imagem_do_WhatsApp_de_2024-01-26_à_s__16.59.29_c5e8e7da-removebg-preview.png'
import { useEffect, useState } from 'react';
import { HomePage } from './components/HomePage';
import { Carrinho } from './components/Carrinho';
import { Form } from './components/Form';
import { ToastContainer, toast } from 'react-toastify';

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

    function enviarCarrinhoParaWhatsApp() {
        let mensagem = `${nome}, ${rua} - ${numero}, ${complemento}\n\nPedido:\n`;

        carrinho.forEach((item, index) => {
            mensagem += `\n${index + 1}. ${item.nome} - Preço: $${item?.preco}\n`;
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
    }


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
                    <Carrinho carrinho={carrinho} goHome={goHome} total={total} goForm={goForm} remover={remover}/> 
                    : <Form goCard={goCard} carrinho={carrinho} setRua={setRua} setNome={setNome} setNumero={setNumero} setComplemento={setComplemento} enviarCarrinhoParaWhatsApp={enviarCarrinhoParaWhatsApp}/>}

            </>
        </>
    )
}