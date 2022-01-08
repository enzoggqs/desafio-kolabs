import { LoginContainer } from "../../styles"
import logo from '../../assets/logo2.png';
import { useState } from "react";

export const Login = () => {
    const [userFounded] = useState(false);
    const [passwordMatches] = useState(false);

    return (
        <LoginContainer>
            <img src={logo} alt="logo" />
            <h1>LOGIN</h1>
            <form>
                <label>E-MAIL / USERNAME</label>
                <input type="email"></input>
                {!userFounded &&
                    <span>USER NÃO ENCONTRADO</span>
                }
                <label>SENHA</label>
                <input type="password"></input>
                {!passwordMatches &&
                    <span>SENHA NÃO CONFERE</span>
                }
                <button type="submit">ENTRAR</button>
            </form>
            <a href="#">DON'T HAVE AN ACCOUNT?</a>
        </LoginContainer>
    )
}