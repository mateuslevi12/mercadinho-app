import { RxHamburgerMenu } from "react-icons/rx"
import { Cards } from "../../Card/Card"
import { GiShoppingCart } from "react-icons/gi"
import { Product } from "../../Produtos"

export function HomePage({logo, styles,  carrinho, adicionar, produtos, goCard}:any) {
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
        <div className={styles.buttons}>
            <button>bebidas</button>
            <button>comida</button>
            <button>limpeza</button>
            <button>carne</button>
            <button>carne</button>
            <button>carne</button>
            <button>agua</button>
        </div>
        <div className={styles.body}>

            {
                produtos.map((p:Product) => {
                    return (
                        <>

                            <Cards  produto={p} nome={p.nome} preco={p.preco} descricao={p.descricao} categoria={p.categoria} adicionar={adicionar} />

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