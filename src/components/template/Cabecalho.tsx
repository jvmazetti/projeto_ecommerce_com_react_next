"use client"
import Logo from "./Logo"
import styled from "styled-components"
import Carrinho from "./Carrinho"


const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: darkslategrey;
    height: 20px;
    padding: 40px;
`

export default function Cabecalho() {
    return (
        <>
            <Header>
                <Logo />
                <Carrinho />
            </Header>
        </>
    )
}