import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    flex-wrap: wrap;
    gap: 18.11px;

    margin-top: 18px;

    @media(min-width: 900px) {        
        gap: 22px;
        max-width: 938px;
        margin: 116px auto 0;
    }


`

export const ContainerCard = styled.article`
    max-width: 250.25px;
    height: 328px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;

    @media (min-width:1024px) {
        max-width: 218px;
        height: 285px;
    }

`

export const ContainerImage = styled.div`
    height: 158.9px;
    min-width: 127.8px;
    margin-top: 20.72px;

    img {
        height: 100%;
        min-width: 127.8px;
        margin: auto;
    }

    @media(min-width: 900px) {
        height: 138px;
        max-width: 111px;
        margin-top: 18px;
        
    }
`

export const ContainerNamePrice = styled.div`
    max-width: 221.07px;
    height: 43.73px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    p {
        max-width: 136px;
    }

    @media(min-width: 900px) {
        height: 38px;
        max-width: 192px;

        p{
            line-height: 1;
        }
    }
`

export const Price = styled.span`
    max-width: 80px;
    height: 29.92px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    padding: 5px 11px;

    color: white;
    background-color: #373737;

    border-radius: 5px;
`

export const Description = styled.p`
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;

    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical; 

    color: #2C2C2C;

    margin: 19px auto 16px 13px;
    max-width: 207px;

    @media(min-width: 900px) {
        max-width: 179px;
    }

`

export const Buy = styled.button`
    max-width: 251px;
    height: 36.72px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16.12px;

    background: #0F52BA;
    border: none;
    border-radius: 0px 0px 8px 8px;

    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: white;
    }
`


