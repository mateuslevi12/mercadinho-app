
import { MdAddShoppingCart } from "react-icons/md";
import styles from './Card.module.css'


export function Cards({ nome, preco, adicionar, produto, }: any) {
    return (
        <>
            <div className={styles.card}>
                {/* <div>{imagem}</div> */}
                <div>
                    <p>{nome}</p>
                    <p>Valor: R${preco},00</p>

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