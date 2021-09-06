import styled from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const { height } = Dimensions.get('window');

export const WelcomeImage = styled.ImageBackground`
  height: ${hp(57)}px;
  width: ${wp(100)}px;
  position: absolute;
`;

export const ContainerLogin = styled.View`
  height: ${hp(46)}px;
  width: ${wp(100)}px;
  position: absolute;
  background-color: white;
  bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  align-items: center;
`;

export const { LoginFaceButton } = StyleSheet.create({
  LoginFaceButton: {
    width: wp(81),
    height: hp(7.3),
    backgroundColor: '#3B5999',
    marginTop: hp(6.1),
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
});

export const ButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LoginFacebookText = styled.Text`
  font-size: ${hp(1.7)}px;
  color: white;
  font-family: ${(props) => props.fontFamily};
  line-height: 16px;
  padding-left: 20px;
`;

export const LoginEmailButton = styled.TouchableOpacity`
  width: ${wp(81)}px;
  height: ${hp(7.3)}px;
  background-color: #262628;
  border-radius: 14px;
  margin-top: ${hp(2.4)}px;
  align-items: center;
  justify-content: center;
`;

export const LoginEmailText = styled.Text`
  font-size: ${hp(1.7)}px;
  color: white;
  font-family: ${(props) => props.fontFamily};
  line-height: 16px;
`;

export const SignUpContainer = styled.TouchableOpacity`
  margin-top: ${hp(7.5)}px;
`;

export const SignUpText = styled.Text`
  font-size: ${hp(1.7)}px;
  color: black;
  font-family: ${(props) => props.fontFamily};
  line-height: 16px;
`;

export const SignUpTextSpan = styled.Text`
  color: #43A2FA;
`;

export const LogoContainer = styled.View`
  margin-top: ${hp(3.4)}px;
`;