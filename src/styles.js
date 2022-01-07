import styled from "styled-components";

export const MainDiv = styled.div`
    text-align: center;
    justify-content: center;
    height: 100%;
    margin-top: 5%;
    padding: auto;

    span {
        font-size: 72px;
    }

    font-size: 144px;
    
    font-weight: bold;
`

export const LoginContainer = styled.div`
    margin: auto;
    margin-top: -7%;
    width: 264px;
    position: relative;
    height: 360px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.1) 100%);
    backdrop-filter: blur(25px);
    border-radius: 15px;

    font-size: 30px;

    h1 {
        margin-top: -100%;
    }

    img {
        z-index: 1;
    }
`
