import { RxHamburgerMenu } from "react-icons/rx"
import { Cards } from "../../Card/Card"
import { FaRegTrashCan } from "react-icons/fa6"
import { GiShoppingCart } from "react-icons/gi"
import { ToastContainer } from "react-toastify"

export function HomePage({logo, styles,  carrinho, adicionar,remover, produtos, enviarCarrinhoParaWhatsApp, total, goCard}) {
    return (
        <main className={styles.main}>
            
        <header>
            <img src={logo} alt="" className={styles.logo} />
            {/* <div>redes</div> */}
            <RxHamburgerMenu color='white' size={30} />
        </header>
        <div className={styles.tittle}>
            <h2>Mercadinho Del Sol</h2>
        </div>
        <div className={styles.body}>

            {
                produtos.map((p) => {
                    return (
                        <>

                            <Cards imagem={p.imagem} produto={p} nome={p.nome} preco={p.preco} descricao={p.descricao} categoria={p.categoria} adicionar={adicionar} />

                        </>
                    )
                })
            }
        </div>
        {/* <input type="text" onChange={(e) => setEndereco(e.target.value)} /> */}
        
        <footer onClick={goCard} className={styles.footer}>
            <div className={styles.carrinho}>
                <GiShoppingCart size={60} /> Seu Pedido
            </div>
            <div>
                <button className={styles.button} onClick={goCard}>{carrinho.length} {carrinho.length == 1 ? 'item' : 'itens'}</button>
                {/* <button onClick={() => enviarCarrinhoParaWhatsApp()}>enviar </button> */}
            </div>
        </footer>
    </main>
    )
}