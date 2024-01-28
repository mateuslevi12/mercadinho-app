
import { MdAddShoppingCart } from "react-icons/md";
import styles from './Card.module.css'


export function Cards({ nome, preco, adicionar, produto, }: any) {
    return (
        <>
            <div className={styles.card}>
                {/* <div>{imagem}</div> */}
                <div>
                    <h1>{nome}</h1>
                    <p>Valor: {preco},00</p>

                </div>
                <div className={styles.divAdicionar}>
                    <button className={styles.adicionar} onClick={() => adicionar(produto)}>
                        <MdAddShoppingCart size={30} />
                    </button>

                </div>
            </div>
        </>
    )
}