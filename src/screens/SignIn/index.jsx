import React, { useContext } from 'react';
import modalContext from '../../context/modalContex';

import {
  Container,
  Shape,
  Background,
  BackButton,
  SignInTextInstagram,
  EnterYourDetailsText,
  ContainerEmail,
  UsernameOrEmailText,
  ContainerInput,
  TextInputEmail,
  ForgotPasswordText,
  LoginButton,
  LoginEmailText,
  LogoContainer,
} from './styled';

import BackSvg from '../../assets/Back.svg';
import EmailSvg from '../../assets/Email.svg';
import Password from '../../assets/Password.svg';
import Logo from '../../assets/Logo.svg';

const email = 'joandersonbatista.br@icloud.com';

export default function ModalSignIn() {
  const { dispatch } = useContext(modalContext);

  return (
    <Background>
      <Shape />
      <Container>
        <BackButton onPress={() => dispatch({ type: 'true' })}>
          <BackSvg />
        </BackButton>
        <SignInTextInstagram>
          Entre no
          {'\n'}
          Instagram
        </SignInTextInstagram>
        <EnterYourDetailsText>
          Insira seus dados abaixo
        </EnterYourDetailsText>
        <ContainerEmail margin={4.8}>
          <UsernameOrEmailText>
            Nome de usuário ou email
          </UsernameOrEmailText>
          <ContainerInput>
            <EmailSvg />
            <TextInputEmail
              value={email}
              placeholderTextColor="#9797BD"
            />
          </ContainerInput>
        </ContainerEmail>
        <ContainerEmail margin={2.5}>
          <UsernameOrEmailText>
            Senha
          </UsernameOrEmailText>
          <ForgotPasswordText>
            Esqueceu a senha?
          </ForgotPasswordText>
          <ContainerInput>
            <Password />
            <TextInputEmail
              placeholder="Senha"
              placeholderTextColor="#9797BD"
            />
          </ContainerInput>
        </ContainerEmail>
        <LoginButton>
          <LoginEmailText>
            Entrar
          </LoginEmailText>
        </LoginButton>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Container>
    </Background>
  );
}