import { LoginContainer, LoginPage } from "../../styles"
import logo from '../../assets/logo2.png';
import { LoginForm } from "../../components/LoginForm";
import { AnimatedParticles } from "../../components/Particles";

export const Login = () => {
    return (
        <LoginPage>
            <AnimatedParticles />
            <span>CREATE</span>
            <br />
            TECHNOLOGY
            <LoginContainer>
                <img src={logo} alt="logo" />
                <h1>LOGIN</h1>
                <LoginForm />
                <a href="#">DON'T HAVE AN ACCOUNT?</a>
            </LoginContainer>

        </LoginPage>
    )
}