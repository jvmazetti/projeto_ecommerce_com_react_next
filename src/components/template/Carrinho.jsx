"use client"
import useCarrinho from "@/data/hooks/useCarrinho"
import { IconShoppingCart } from "@tabler/icons-react"
import Link from "next/link"
import styled from "styled-components"

const ContainerCartIcon = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`
const CartContador = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 12.5px;
`

export default function Carrinho() {
    const {qtdeDeItems} = useCarrinho()
    return (
        <>
            <div>
                <Link href="/carrinho">
                    <ContainerCartIcon>
                        <IconShoppingCart size={32} stroke={1} color="white"/>
                        <CartContador>{qtdeDeItems}</CartContador>
                    </ContainerCartIcon>
                </Link>
            </div>
        </>
    )
}