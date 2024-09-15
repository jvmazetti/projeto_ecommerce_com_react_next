'use client'
import Produto from "@/data/model/Produto"
import styled from "styled-components"
import Image from "next/image"
import useCarrinho from "@/data/hooks/useCarrinho"

export interface CartaoProdutoProps {
    produto: Produto
}

const CardProduto = styled.div`
    display: flex;
    flex-direction: column;
    width: 288px;
    background-color: darkslategrey;
    margin-bottom: 20px;
`

const CardImagem = styled.div`
    position: relative;
    width: 288px;
    height: 208px;
`

const InformacoesProduto = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
`
const NomeProduto = styled.h2`
    font-weight: bold;
`

const DescricaoProduto = styled.p`
    flex: 1;
`

const PrecoEBotao = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Preco = styled.span`
    font-weight: bold;
`

const Botao = styled.button`
    border: 2px solid white;
    border-radius: 20px;
    background-color: darkslategrey;
    padding: 8px 16px;
    cursor: pointer;
`

export default function CartaoProduto(props: CartaoProdutoProps) {
    const { adicionar } = useCarrinho()
    const { nome, descricao, imagem, preco} = props.produto
    return(
        <>
            <CardProduto>
                <CardImagem>
                    <Image src={imagem} alt={nome} fill className="object: cover"/>
                </CardImagem>
                <InformacoesProduto>
                     <NomeProduto>{nome}</NomeProduto>
                     <DescricaoProduto>{descricao}</DescricaoProduto>
                     <PrecoEBotao >
                        <Preco>R$ {preco.toFixed(2)}</Preco>
                        <Botao onClick={() => adicionar(props.produto)}>Adicionar</Botao>
                     </PrecoEBotao>
                </InformacoesProduto>
            </CardProduto>
        </>
    )
}