"use client"
import AreaItemCarrinho from "@/components/carrinho/AreaItemCarrinho"
import CarrinhoVazio from "@/components/carrinho/CarrinhoVazio"
import TotalCarrinho from "@/components/carrinho/TotalCarrinho"
import Pagina from "@/components/template/Pagina"
import useCarrinho from "@/data/hooks/useCarrinho"
import styled from "styled-components"

const ContainerAreaItemCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export default function PaginaCarrinho() {
    const { itens, adicionar, remover } = useCarrinho()
    return (
        <Pagina>
            {itens.length === 0 ? (
                <CarrinhoVazio />
            ) : (
                <>
                    <ContainerAreaItemCarrinho>
                        {itens.map((item) => (
                            <AreaItemCarrinho 
                            key={item.produto.id} 
                            item={item} 
                            adicionar={(item) => adicionar(item.produto)}  
                            remover={(item) => remover(item.produto)} 
                        />
                        ))}
                    </ContainerAreaItemCarrinho>
                    <TotalCarrinho itens={itens}/>
                </>
            )}
            
        </Pagina>
    )
}