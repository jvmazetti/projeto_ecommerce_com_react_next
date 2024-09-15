import { StaticImageData } from "next/image"

//modelo de produto, todos os dados que definem um produto
export default interface Produto {
    id: number
    nome: string
    preco: number
    descricao: string
    imagem: StaticImageData
}