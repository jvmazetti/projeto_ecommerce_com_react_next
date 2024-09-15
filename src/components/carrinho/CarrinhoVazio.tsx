"use client"
import { IconShoppingCartOff } from "@tabler/icons-react"
import Link from "next/link"
import styled from "styled-components"

const ContainerAreaCarrinhoVazio = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 16px;
`

const TextCarrinhoVazio = styled.h2`
    font-weight: bold;
    text-align: center;
`

export default function CarrinhoVazio() {
    return (
        <ContainerAreaCarrinhoVazio>
            <IconShoppingCartOff size={150} stroke={0.5} />
            <div>
                <TextCarrinhoVazio>Seu carrinho está vazio</TextCarrinhoVazio>
                <p>Adicione produtos clicando no botão abaixo:</p>
            </div>
            <Link href="/">
                Ver Produtos
            </Link>
        </ContainerAreaCarrinhoVazio>
    )
}