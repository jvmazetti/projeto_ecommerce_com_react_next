"use client"
import Link from "next/link"
import styled from "styled-components"
import { IconBrandAmazon } from "@tabler/icons-react"

const ContainerLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2px;
`

const LogoTexto = styled.div`
    margin-bottom: -15px;
    font-size: medium;
    color: white;
`

export default function Logo() {
    return (
        <>
            <Link href="/">
                <ContainerLogo>
                    <LogoTexto>A   Z</LogoTexto>
                    <IconBrandAmazon size={40} stroke={1} className="-mt-2" color="white"></IconBrandAmazon>
                </ContainerLogo>
            </Link>
        </>
    )
}