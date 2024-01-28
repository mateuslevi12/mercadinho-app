import { GiShoppingCart } from "react-icons/gi";
import styles from './Carrinho.module.css'
import { FaArrowLeft, FaArrowRight, FaRegTrashCan } from "react-icons/fa6";
import { Product } from "../../Produtos";

export function Carrinho({ carrinho, goHome, remover, total, goForm }: any) {
    return (
        <>
            <main className={styles.main}>
                {carrinho.length == 0 && <p className={styles.aviso}>Carrinho Vazio!</p>}
                <footer className={styles.footer}>
                    <div className={styles.carrinho}>
                        <button className={styles.button}>

                            <FaArrowLeft color="white" onClick={goHome} size={30} />
                        </button>
                        <GiShoppingCart size={60} /> Seu Pedido
                    </div>
                    <div>
                        <button className={styles.itens}>{carrinho.length} {carrinho.length == 1 ? 'item' : 'itens'}</button>
                        {/* <button onClick={() => enviarCarrinhoParaWhatsApp()}>enviar </button> */}
                    </div>
                </footer>

                <div className={styles.tittle}>
                    <h2>Carrinho</h2>
                </div>

                    <div className={styles.total}>
                        {carrinho.length > 0 && <p>Total - R${carrinho.length == 0 ? '00' : total},00</p>}

                    </div>
                <div className={styles.body}>
                    {carrinho.map((c: Product, index: number) => {
                        return (
                            <>
                                <div className={styles.removido}>
                                    <button className={styles.button} onClick={() => remover(index)}>

                                        <FaRegTrashCan size={30} color='red' />

                                    </button>
                                    <p>{c.nome} - R${c.preco},00</p>
                                </div>

                            </>
                        )
                    })}
                </div>
                <button className={styles.proxima} onClick={goForm}><FaArrowRight size={30}/></button>
            </main>


        </>
    )
}