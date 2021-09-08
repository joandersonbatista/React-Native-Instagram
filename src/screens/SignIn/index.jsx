import React, { useContext } from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  runOnJS,
} from 'react-native-reanimated';

import { Dimensions } from 'react-native';

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
  ContainerPassword,
  OpacityBackground,
} from './styled';

import BackSvg from '../../assets/Back.svg';
import EmailSvg from '../../assets/Email.svg';
import Password from '../../assets/Password.svg';
import Logo from '../../assets/Logo.svg';

const email = 'joandersonbatista.br@icloud.com';
const { height } = Dimensions.get('window');

export default function ModalSignIn() {
  const { dispatch } = useContext(modalContext);

  const positionModal = useSharedValue(-height);

  function closeModal() {
    positionModal.value = withTiming(-height, {
      duration: 400,
    }, () => {
      runOnJS(() => dispatch({ type: 'false' }))();
    });
  }

  React.useEffect(() => {
    positionModal.value = withTiming(0, {
      duration: 400,
      easing: Easing.bezier(0, 0.10, 0, 0.99),
    });
  }, []);

  const animatedModal = useAnimatedStyle(() => ({
    bottom: positionModal.value,
  }));

  const animatedOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(
      positionModal.value,
      [-height, 0],
      [0, 1],
    ),
  }));

  return (
    <Background>
      <OpacityBackground style={animatedOpacity} />
      <Shape />
      <Container style={animatedModal}>
        <BackButton onPress={() => closeModal()}>
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
        <ContainerEmail>
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
        <ContainerPassword>
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
        </ContainerPassword>
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