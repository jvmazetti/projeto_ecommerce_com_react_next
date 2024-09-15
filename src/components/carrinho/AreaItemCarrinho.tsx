"use client"
import ItemCarrinho from "@/data/model/ItemCarrinho"
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react"
import Image from "next/image"
import styled from "styled-components"

export interface AreaItemCarrinho{
    item: ItemCarrinho
    adicionar?: (item: ItemCarrinho) => void
    remover?: (item: ItemCarrinho) => void
}

const ContainerAreaItemCarrinho = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: darkslategrey;
    border-radius: 20px;
    overflow: hidden;
`

const ImageContainer = styled.div`
    position: relative;
    width: 112px;
    height: 112px;
`

const InformacoesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
`
const NomeProduto = styled.span`
    font-weight: bold;
`
const DescricaoProduto = styled.span`
    font-weight: normal;
    font-size: 12.5px;
    margin-top: 10px;
`

const PrecoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    color: yellow;
    font-size: large;
    font-weight: bold;
`


const BotoesMaisMenos = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 20px;
`

const BotaoMais = styled.button`
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 2px;
    background-color: darkslategrey;
    border: none;
    cursor: pointer;
`

const Quantidade = styled.span`
    display: flex;
    padding: 8px 16px;
    border-radius: 20px;
    background-color: black;
    border: none;
    color: white;
`

const BotaoMenos = styled.button`
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 2px;
    background-color: darkslategrey;
    border: none;
    cursor: pointer;
`

export default function AreaItemCarrinho(props: AreaItemCarrinho) {
    const total = (props.item.produto.preco * props.item.quantidade)
    return(
        <>
            <ContainerAreaItemCarrinho>
                <ImageContainer>
                    <Image src={props.item.produto.imagem} fill className="object:cover" alt={props.item.produto.nome}/>
                </ImageContainer>
                <InformacoesContainer>
                    <NomeProduto>
                        {props.item.produto.nome}
                    </NomeProduto>
                    <DescricaoProduto>
                        {props.item.produto.descricao}
                    </DescricaoProduto>
                    <PrecoContainer>
                        <span>R$ {props.item.produto.preco.toFixed(2)}</span>
                        <IconX />
                        <span>{props.item.quantidade}</span>
                        <span>=</span>
                        <span className="color: yellow">
                            R$ {total.toFixed(2)}
                        </span>
                    </PrecoContainer>
                </InformacoesContainer>
                <BotoesMaisMenos>
                    <BotaoMais onClick={() => props.adicionar?.(props.item)}>
                        <IconPlus />
                    </BotaoMais>
                    <Quantidade>
                        {props.item.quantidade}
                    </Quantidade>
                    <BotaoMenos onClick={() => props.remover?.(props.item)}>
                        <IconMinus />
                    </BotaoMenos>
                </BotoesMaisMenos>
            </ContainerAreaItemCarrinho>
        </>
    )
}