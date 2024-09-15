"use client"
import ItemCarrinho from "@/data/model/ItemCarrinho"
import styled from "styled-components"

export interface TotalCarrinhoProps {
    itens: ItemCarrinho[]
}

const ContainerTotal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: darkslategrey;
    border-radius: 20px;
    padding: 28px;
    margin-top: 10px;
`

const ContainerValorDaCompra = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const TextoTotal = styled.span`
    font-weight: bold;
    color: white;
`

const ValorTotal = styled.span`
    font-weight: bold;
    color: yellow;
`

const BotaoFinalizar = styled.button`
    background-color: yellow;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    color: black;
    border: none;
`

export default function TotalCarrinho(props: TotalCarrinhoProps) {
    const total = props.itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0)
    return (
        <>
            <ContainerTotal>
                <ContainerValorDaCompra>
                    <TextoTotal>Total da Compra:</TextoTotal>
                    <ValorTotal>R$ {total.toFixed(2)}</ValorTotal>
                </ContainerValorDaCompra>
                <BotaoFinalizar>Finalizar</BotaoFinalizar>
            </ContainerTotal>
        </>
    )
}