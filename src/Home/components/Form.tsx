import { FaArrowLeft, FaWhatsapp } from 'react-icons/fa6'
import styles from './Form.module.css'
import { GiShoppingCart } from 'react-icons/gi'
import { useState } from 'react';
import axios from 'axios'

export function Form({ carrinho, goCard, enviarCarrinhoParaWhatsApp, getProdutos, goHome }: any) {

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState('')
    const [url, setUrl] = useState('')

    async function addProdutos({ nome, preco, categoria, url }: any) {
        try {
            const response = await axios.post("http://localhost:8800", {
                nome: nome,
                preco: preco,
                categoria: categoria,
                url: url,
            });
            console.log("Produto adicionado:", response.data); // I
            getProdutos()
            goHome()


        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <main>
                <footer className={styles.footer}>
                    <div className={styles.carrinho}>
                        <button className={styles.button}>

                            <FaArrowLeft color="white" onClick={goCard} size={30} />
                        </button>
                        <GiShoppingCart size={60} /> Seu Pedido
                    </div>
                    <div>
                        <button className={styles.itens}>{carrinho.length} {carrinho.length == 1 ? 'item' : 'itens'}</button>
                        {/* <button onClick={() => enviarCarrinhoParaWhatsApp()}>enviar </button> */}
                    </div>
                </footer>
                <div className={styles.form}>
                    <p>Preencha os dados</p>

                    <div className={styles.bodyForm}>
                        <input placeholder='Nome' type="text" onChange={(e) => setNome(e.target.value)} />
                        <div className={styles.inputs}>
                            {/* <input placeholder='cep' type="text" onChange={(e) => setCep(e.target.value)} /> */}
                            {/* <input placeholder='Rua' defaultValue={responseCep?.logradouro} type="text" onChange={(e) => setRua(e.target.value)} /> */}
                            {/* <input type="text" placeholder='N°' onChange={(e) => setNumero(e.target.value)} /> */}
                            <input type="text" placeholder='preco' onChange={(e) => setPreco(e.target.value)} />
                            <input type="text" placeholder='url' onChange={(e) => setUrl(e.target.value)} />
                        </div>
                        {/* <input placeholder='Bairro' defaultValue={responseCep?.bairro} type="text" onChange={(e) => setComplemento(e.target.value)} /> */}
                        {/* <input placeholder='Complemento' type="text" onChange={(e) => setComplemento(e.target.value)} /> */}
                        <input placeholder='categoria' type="text" onChange={(e) => setCategoria(e.target.value)} />
                    </div>
                    <button onClick={enviarCarrinhoParaWhatsApp} className={styles.enviar}>Enviar Pedido! <FaWhatsapp size={30} color='white' /></button>
                    <button onClick={() => {
                        addProdutos({ nome, preco, categoria, url });
                        goHome();
                        getProdutos()
                    }} className={styles.enviar}>Adicionar </button>
                </div>
            </main>

        </>
    )
}