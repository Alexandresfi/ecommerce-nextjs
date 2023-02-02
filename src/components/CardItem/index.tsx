import { getServerSideProps} from "@/pages"

import { InferGetServerSidePropsType } from "next";
import Image from "next/image";

import { ContainerCard, ContainerNamePrice, Description, Price, Buy, Container, ContainerImage } from "./styles"
import Iconbuy from '../../assets/Button/icon-buy.svg'
import { formatPrices } from "@/utils/formatPrice";

export default function CardProduct ({products}:InferGetServerSidePropsType<typeof getServerSideProps>) {    
    return (
        <Container>
            {
                products.map((product)=> (
                    <ContainerCard key={product.id}>

                        <ContainerImage>
                            <img src={product.photo} alt='image product'  />
                        </ContainerImage>
                        
                        <ContainerNamePrice>
                            <p>
                                {product.name}
                            </p>
                            <Price>{formatPrices(Number(product.price))}</Price>
                        </ContainerNamePrice>
                        <Description>
                            {product.description}
                        </Description>
                        <Buy>
                            <Image src={Iconbuy} alt='carrinho' />
                            <p>
                                COMPRAR
                            </p>
                        </Buy>
                    </ContainerCard>
                ))
            }
        </Container>
    )
}
