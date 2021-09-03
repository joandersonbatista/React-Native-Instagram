import React, { useContext } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
// eslint-disable-next-line camelcase
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import {
  Svg, Defs, RadialGradient, Stop, Ellipse,
} from 'react-native-svg';
import {
  WelcomeImage,
  ContainerLogin,
  LoginFaceButton,
  ButtonContent,
  LoginFacebookText,
  LoginEmailButton,
  LoginEmailText,
  SignUpContainer,
  SignUpText,
  SignUpTextSpan,
  LogoContainer,
  height,
} from './styled';

import WelcomeLogo from '../../assets/welcome.jpeg';
import Logo from '../../assets/Logo.svg';
import LogoFace from '../../assets/Vector.svg';
import modalContext from '../../context/modalContex';
import ModalSignIn from '../SignIn';

export default function Login() {
  const { state, dispatch } = useContext(modalContext);

  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar hidden={!state.open} />
      <WelcomeImage source={WelcomeLogo} resizeMode="cover">
        <Svg height="100%" width="100%">
          <Defs>
            <RadialGradient
              id="grad"
              cx="50%"
              cy="50%"
              rx="230"
              ry="230"
              gradientUnits="userSpaceOnUse"
            >
              <Stop offset="0" stopColor="#2626284D" stopOpacity="0.3" />
              <Stop offset="1" stopColor="#262628CC" stopOpacity="0.8" />
            </RadialGradient>
          </Defs>
          <Ellipse cx="150" cy="75" rx={height * 0.57} ry="100%" fill="url(#grad)" />
        </Svg>
      </WelcomeImage>
      <ContainerLogin>
        <TouchableOpacity style={LoginFaceButton} onPress={() => dispatch({ type: 'true' })}>
          <ButtonContent>
            <LogoFace height={height * 0.036} />
            <LoginFacebookText
              fontFamily="Roboto_500Medium"
            >
              Entre com Facebook
            </LoginFacebookText>
          </ButtonContent>
        </TouchableOpacity>
        <LoginEmailButton>
          {/* eslint-disable-next-line camelcase */}
          <LoginEmailText
            fontFamily="Roboto_500Medium"
          >
            Entre com seu e-mail
          </LoginEmailText>
        </LoginEmailButton>
        <SignUpContainer>
          <SignUpText
            fontFamily="Roboto_500Medium"
          >
            Not a menber?
            <SignUpTextSpan> Signup now</SignUpTextSpan>
          </SignUpText>
        </SignUpContainer>
        <LogoContainer>
          <Logo height={height * 0.05} />
        </LogoContainer>
      </ContainerLogin>
      {state.open ? <ModalSignIn /> : <></>}
    </>
  );
}