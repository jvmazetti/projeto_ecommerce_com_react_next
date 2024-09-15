//A lista de produtos em si
import Produto from "../model/Produto";
import ImagemProdutoUm from "./imagens/photo-1511707171634-5f897ff02aa9.jpeg"
import ImagemProdutoDois from "./imagens/photo-1517336714731-489689fd1ca8.jpeg"
import ImagemProdutoTres from "./imagens/OIP.jpeg"
import ImagemProdutoQuatro from "./imagens/samsung_sm_r880nzkaxaa_galaxy_watch4_classic_smartwatch_1646549.jpg"
import ImagemProdutoCinco from "./imagens/OIP (1).jpeg"

const produtos: Produto[] = [
    {
        id: 1,
        nome: 'Smartphone XYZ',
        descricao: 'Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera tripla.',
        preco: 1999.9,
        imagem: ImagemProdutoUm
    },
    {
        id: 2,
        nome: 'Notebook ABC',
        descricao: 'Notebook com processador Intel i7, 16GB de RAM e 512GB SSD.',
        preco: 4999.9,
        imagem: ImagemProdutoDois
    },
    {
        id: 3,
        nome: 'Fone de Ouvido Bluetooth',
        descricao: 'Fone de ouvido Bluetooth com cancelamento de ruído e bateria de longa duração.',
        preco: 299.9,
        imagem: ImagemProdutoTres
    },
    {
        id: 4,
        nome: 'Smartwatch DEF',
        descricao:'Smartwatch com monitoramento de atividades físicas e notificações de smartphone.',
        preco: 799.9,
        imagem: ImagemProdutoQuatro
    },
    {
        id: 5,
        nome: 'Câmera Digital GHI',
        descricao: 'Câmera digital com 20MP, zoom óptico de 10x e gravação de vídeo em 4K.',
        preco: 2499.9,
        imagem: ImagemProdutoCinco
    },
]

export default produtos