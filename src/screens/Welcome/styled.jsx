import styled from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';

export const { height, width } = Dimensions.get('window');

export const BacgroundImage = styled.View`
  height: 57%;
  width: 100%;
  background-color: rgb(0, 0, 255);
  position: absolute;
`;

export const WelcomeImage = styled.ImageBackground`
  height: 57%;
  width: 100%;
  position: absolute;
`;

export const ContainerLogin = styled.View`
  height: 46%;
  width: 100%;
  position: absolute;
  background-color: white;
  bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  align-items: center;
`;

export const { LoginFaceButton } = StyleSheet.create({
  LoginFaceButton: {
    width: '81%',
    height: height * 0.08,
    backgroundColor: '#3B5999',
    marginTop: height * 0.06,
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
  font-size: 14px;
  color: white;
  font-family: ${(props) => props.fontFamily};
  line-height: 16px;
  padding-left: 20px;
`;

export const LoginEmailButton = styled.TouchableOpacity`
  width: 81%;
  height: ${height * 0.08}px;
  background-color: #262628;
  border-radius: 14px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

export const LoginEmailText = styled.Text`
  font-size: 14px;
  color: white;
  font-family: ${(props) => props.fontFamily};
  line-height: 16px;
`;

export const SignUpContainer = styled.TouchableOpacity`
  margin-top: 50px;
`;

export const SignUpText = styled.Text`
  font-size: 14px;
  color: black;
  font-family: ${(props) => props.fontFamily};
  line-height: 16px;
`;

export const SignUpTextSpan = styled.Text`
  color: #43A2FA;
`;

export const LogoContainer = styled.View`
  flex: 1;
  padding-top: 14px;
`;