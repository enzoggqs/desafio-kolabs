import { LoginContainer } from "../../styles"
import logo from '../../assets/logo2.png';
import { LoginForm } from "../../components/LoginForm";

export const Login = () => {

    return (
        <LoginContainer>
            <img src={logo} alt="logo" />
            <h1>LOGIN</h1>
            <LoginForm />
            <a href="#">DON'T HAVE AN ACCOUNT?</a>
        </LoginContainer>
    )
}