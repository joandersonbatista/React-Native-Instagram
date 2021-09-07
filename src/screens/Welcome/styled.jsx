import styled from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';

import { hp, wp } from '../../../responsive';

export const { height } = Dimensions.get('window');

export const WelcomeImage = styled.ImageBackground`
  height: ${hp(465)}px;
  width: 100%;
  position: absolute;
`;

export const ContainerLogin = styled.View`
  height: ${hp(380)}px;
  width: 100%;
  position: absolute;
  background-color: white;
  border-top-left-radius: ${hp(20)}px;
  border-top-right-radius: ${hp(20)}px;
  align-items: center;
  bottom: 0px;
`;

export const { LoginFaceButton } = StyleSheet.create({
  LoginFaceButton: {
    width: wp(305),
    height: hp(60),
    backgroundColor: '#3B5999',
    marginTop: hp(50),
    borderRadius: hp(14),
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
  font-size: ${hp(14)}px;
  color: white;
  font-family: ${(props) => props.fontFamily};
  line-height: ${hp(16)}px;
  padding-left: ${wp(10)}px;
`;

export const LoginEmailButton = styled.TouchableOpacity`
  width: ${wp(305)}px;
  height: ${hp(60)}px;
  background-color: #262628;
  border-radius: ${hp(14)}px;
  margin-top: ${hp(20)}px;
  align-items: center;
  justify-content: center;
`;

export const LoginEmailText = styled.Text`
  font-size: ${hp(14)}px;
  color: white;
  font-family: ${(props) => props.fontFamily};
  line-height: ${hp(16)}px;
`;

export const SignUpContainer = styled.TouchableOpacity`
  margin-top: ${hp(61)}px;
`;

export const SignUpText = styled.Text`
  font-size: ${hp(14)}px;
  color: black;
  font-family: ${(props) => props.fontFamily};
  line-height: ${hp(16)}px;
`;

export const SignUpTextSpan = styled.Text`
  color: #43A2FA;
`;

export const LogoContainer = styled.View`
  margin-top: ${hp(40)}px;
`;