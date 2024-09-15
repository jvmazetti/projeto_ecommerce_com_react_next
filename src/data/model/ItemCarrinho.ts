//Estrutura dos produtos que vc selecionou para comprar, produtos no carrinho
import Produto from "./Produto";

export default interface ItemCarrinho {
    produto: Produto
    quantidade: number
}