import { useState } from "react";
import { FormLogin, SubmitButton } from "../../styles";

export const LoginForm = () => {
    const [userFounded] = useState(false);
    const [passwordMatches] = useState(false);

    return (
        <FormLogin>
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
            <SubmitButton type="submit">ENTRAR</SubmitButton>
        </FormLogin>
    )
}