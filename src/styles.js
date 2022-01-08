import styled from "styled-components";

export const MainDiv = styled.div`
    text-align: center;
    justify-content: center;
    height: 100%;
    padding: auto;

    span {
        font-size: 72px;
    }

    font-size: 144px;
    
    font-weight: bold;

    @media (max-width: 600px){
        font-size: 64px;
        line-height: 48px;

        span {
            font-size: 36px;
        }

        &:first-child {
            margin-top: 20%;
        }
    }
`

export const LoginContainer = styled.div`
    margin: auto;
    margin-top: -7%;
    width: 264px;
    height: 400px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.1) 100%);
    // background: white;
    border-radius: 15px;
    z-index: 1;
    backdrop-filter: blur(8px);
    box-shadow: 0 0 10px #DFD1EB;

    font-size: 30px;

    img {
        margin-top: 5%;
        height: 15%;
        -webkit-filter: drop-shadow(3px 3px 2px #7FB7CE);
    }

    h1 {
        margin-top: -2%;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -15%;
        justify-content: center;
        margin-bottom: 25px;
    }

    form * {
        letter-spacing: 1.5px;
        font-weight: 550;
    }

    form input {
        margin-top: 2%;
        border: none;
        border-radius: 10px;
        line-height: 40px;
        background-color: #ECE9F7;
        width: 75%;
        
    }
    
    form span {
        margin-top: 1%;
        margin-bottom: 5%;
        font-size: 8px;
        color: #FF5555;
    }

    label {
        font-size: 10px;
    }

    button {
        letter-spacing: 0.75px;
        border: none;
        border-radius: 10px;
        line-height: 40px;
        width: 75%;
        height: 100%;
        font-size: 14px;
        cursor: pointer;
        color: #FFFFFF;
    }

    @media (min-width: 600px){
        button {
            background-image: linear-gradient(#D2C6E4, #F0ECF7);
        }
    }

    button:hover {
        background-image: linear-gradient(#987DBB, #C4A1F2);
    }

    a {
        font-size: 10px;
        letter-spacing: 1.5px;
        line-height: 16px;
        color: #660099;
    }

    @media (max-width: 600px){
        border: 0.1px solid #FFFFFF;

        h1 {
            color: #9966CC;
            text-shadow: 1px 1px 10px #9966CC;
        }

        form * {
            margin-bottom: -5%;
        }

        form span {
            display: none;
        }

        form label {
            margin-bottom: -7%;
            color: #9966CC;
        }

        form input {
            margin-bottom: 5%;
        }

        form button {
            margin-top: 7%;
            background-color: #CEBAF5;
            box-shadow: 0px 5px 15px #D9D9D9;
        }
    }
`