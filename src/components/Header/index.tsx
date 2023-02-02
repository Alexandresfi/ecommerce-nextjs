import Image from "next/image";

import { ButtonMinicart, ContainerHeader, LinkLogo } from "./styles";

import IconMinicart from '../../assets/header/icon-minicart.svg'


export const Header = () => (
    <ContainerHeader>
        <div>
        <LinkLogo href='/'>
            <span className="brigger">MKS</span>
            <span className="small">Sistemas</span>
        </LinkLogo>

        <ButtonMinicart>
            <Image src={IconMinicart} alt='icon minicart' />
            <span>0</span>
        </ButtonMinicart>
        </div>
    </ContainerHeader>
 )