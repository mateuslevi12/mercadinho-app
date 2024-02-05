import { RxHamburgerMenu } from "react-icons/rx"
import { Cards } from "../../Card/Card"
import { GiShoppingCart } from "react-icons/gi"
import { Product } from "../../Produtos"
import { useEffect, useState } from "react"

export function HomePage({ logo, styles, carrinho, adicionar, produtos, goCard, removerProduto }: any) {

    const [categoria, setCategoria] = useState<string>('')

    function u() {
        console.log(categoria)
    }
    useEffect(() => {
        u()
    },[categoria])

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
                <button onClick={() => setCategoria('')}>todos</button>
                <button onClick={() => setCategoria('bebida')}>bebidas</button>
                <button onClick={() => setCategoria('comida')}>comida</button>

            </div>
            <div className={styles.body}>

                {
                    produtos.filter((p:any) => p?.categoria.includes(categoria)).map((p: Product) => {
                        return (
                            <>

                                <Cards produto={p} url={p.url} removerProduto={removerProduto} nome={p.nome} preco={p.preco} descricao={p.descricao} categoria={p.categoria} adicionar={adicionar} />

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