import styled from "styled-components";
import Link from "next/link";


export const ContainerHeader = styled.header`

    width: 100%;

    div {
        max-width: 375px;
        width: 100%;
        height: 3rem;
        
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 20px;
        
        @media(min-width: 400px) {
            margin: 0 auto;
            padding: 0 10px;
        }

        @media (min-width: 500px){
            max-width: 1259px;

        }

        @media(min-width: 900px) {
            padding: 0 65px;
            margin: 0 auto;
        }


    }
    
    background-color: #0F52BA;

`

export const LinkLogo = styled(Link)`

    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    gap: 10px;

    color: white;
    text-decoration: none;

    .brigger{
        font-weight: 600;
        font-size: 2rem;
        line-height: 19px;
    }

    .small {
        font-weight: 300;
        font-size: 1rem,;
        line-height: 19px;
    }
` 

export const ButtonMinicart = styled.button`
    max-width: 3.25rem;
    height: 26px;
    width: 100%;

    background-color: white;
    border: none;
    border-radius: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10.24px;

    span {
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;

        color: black;

    }
`