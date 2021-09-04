import React, { useContext } from 'react';
import AppLoading from 'expo-app-loading';
import {
  // eslint-disable-next-line camelcase
  useFonts, Roboto_900Black, Roboto_500Medium, Roboto_400Regular,
} from '@expo-google-fonts/roboto';
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

  const [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <Shape />
      <Container>
        <BackButton onPress={() => dispatch({ type: 'true' })}>
          <BackSvg />
        </BackButton>
        <SignInTextInstagram fontFamily="Roboto_900Black">
          Entre no
          {'\n'}
          Instagram
        </SignInTextInstagram>
        <EnterYourDetailsText fontFamily="Roboto_500Medium">
          Insira seus dados abaixo
        </EnterYourDetailsText>
        <ContainerEmail margin={9}>
          <UsernameOrEmailText fontFamily="Roboto_500Medium">
            Nome de usuário ou email
          </UsernameOrEmailText>
          <ContainerInput>
            <EmailSvg />
            <TextInputEmail
              fontFamily="Roboto_400Regular"
              value={email}
              placeholderTextColor="#9797BD"
            />
          </ContainerInput>
        </ContainerEmail>
        <ContainerEmail margin={2.8}>
          <UsernameOrEmailText fontFamily="Roboto_500Medium">
            Senha
          </UsernameOrEmailText>
          <ForgotPasswordText fontFamily="Roboto_500Medium">
            Esqueceu a senha?
          </ForgotPasswordText>
          <ContainerInput>
            <Password />
            <TextInputEmail
              fontFamily="Roboto_400Regular"
              placeholder="Senha"
              placeholderTextColor="#9797BD"
            />
          </ContainerInput>
        </ContainerEmail>
        <LoginButton>
          <LoginEmailText
            fontFamily="Roboto_500Medium"
          >
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