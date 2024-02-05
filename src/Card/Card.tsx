
import { MdAddShoppingCart } from "react-icons/md";
import styles from './Card.module.css'




export function Cards({ url, nome, preco, adicionar, produto,removerProduto }: any) {
    
    return (
        <>
            <div className={styles.card}>
                <div style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: 'cover', // Isso garantirá que a imagem cubra toda a div
                    backgroundPosition: 'center', // Isso centraliza a imagem na div
                    width: '100%', // Defina a largura conforme necessário
                    height: '200px', // Defina a altura conforme necessário
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    padding: '.5rem',
                    borderTopRightRadius: '.3rem',
                    borderTopLeftRadius: '.3rem',
                }}>
                    {/* <img src={url} alt="" /> */}
                </div>
                <div className={styles.divAdicionar}>
                    <button className={styles.adicionar} onClick={() => removerProduto(produto.id)}>
                        <MdAddShoppingCart size={25} />
                    </button>
                    <div style={{
                        display: 'flex',
                        alignItems: 'start',
                        justifyContent: 'start',
                        flexDirection: 'column',
                    }}>
                        <p  >{nome}</p>
                        <p>Valor: R${preco},00</p>

                    </div>
                    <button className={styles.adicionar} onClick={() => adicionar(produto)}>
                        <MdAddShoppingCart size={25} />
                    </button>

                </div>
            </div>
        </>
    )
}   