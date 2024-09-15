'use client'
import CartaoProduto from "@/components/produto/CartaoProduto";
import Pagina from "@/components/template/Pagina";
import produtos from "@/data/constants/produtos";
import styled from "styled-components";

const Cartao = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap:wrap;
  justify-content: center;
`

export default function Home() {
  return (
    <>
      <div>
        <Pagina>
            <Cartao>
              {produtos.map((produto) => (
                <CartaoProduto key={produto.id} produto={produto} />
              ))}
            </Cartao>
        </Pagina>
      </div>
    </>
  )
}
