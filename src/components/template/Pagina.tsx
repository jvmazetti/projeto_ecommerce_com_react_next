"use client"
import Cabecalho from "./Cabecalho"
import styled from "styled-components"

export interface PaginaProps {
    children: React.ReactNode
    className?: string
}

const ConatainerCabecalho = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Layout = styled.main`
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    background-color: black;
    flex: 1;
    margin-top: 40px;
`


export default function Pagina(props: PaginaProps) {
    return (
        <>
            <ConatainerCabecalho>
                <Cabecalho />
                <Layout>{props.children}</Layout>
            </ConatainerCabecalho>
        </>
    )
}