import { FaArrowLeft, FaWhatsapp } from 'react-icons/fa6'
import styles from './Form.module.css'
import { GiShoppingCart } from 'react-icons/gi'

export function Form({  carrinho, goCard, setRua, setNome, setNumero, setComplemento, enviarCarrinhoParaWhatsApp }:any) {
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
                            <input placeholder='Rua' type="text" onChange={(e) => setRua(e.target.value)} />
                            <input type="text" placeholder='N°' onChange={(e) => setNumero(e.target.value)} />
                        </div>
                        <input placeholder='Complemento' type="text" onChange={(e) => setComplemento(e.target.value)} />
                    </div>
                    <button  onClick={enviarCarrinhoParaWhatsApp} className={styles.enviar}>Enviar Pedido! <FaWhatsapp size={30} color='white' /></button>
                </div>
            </main>

        </>
    )
}