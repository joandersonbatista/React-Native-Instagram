import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const Background = styled.View`
  flex: 1;
  background-color: rgba(38, 38, 40, 0.85);
`;

export const Container = styled.View`
  position: absolute;
  background-color: white;
  height: 92%;
  width: 100%;
  bottom: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Shape = styled.View`
  height: 1.9%;
  width: 85%;
  background-color: #FFFFFF;
  opacity: 0.35;
  position: absolute;
  top: 7%;
  align-self: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const BackButton = styled.TouchableOpacity`
  margin: 20px 0px 0px 15px;
  width: 10%;
`;

export const SignInTextInstagram = styled.Text`
  font-family: ${(props) => props.fontFamily};
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #262628;
  margin-top: 17%;
`;

export const EnterYourDetailsText = styled.Text`
  font-family: ${(props) => props.fontFamily};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #9797BD;
  text-align: center;
  margin-top: 13px;
`;

export const ContainerEmail = styled.View`
  width: 81%;
  align-self: center;
  margin-top: ${(props) => props.margin}%;
`;

export const UsernameOrEmailText = styled.Text`
  font-family: ${(props) => props.fontFamily};
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #262628;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${height * 0.08}px;
  border: 1px solid rgba(38, 38, 40, 0.20);
  border-radius: 14px;
  margin-top: ${height * 0.012}px;
  padding: 0px 20px;
  align-items: center;
`;

export const TextInputEmail = styled.TextInput`
  padding-left: 10px;
  width: 80%;
  font-size: 20px;
  font-family: ${(props) => props.fontFamily};
  color: #262628;
  font-size: 14px;
  line-height: 16px;
`;

export const ForgotPasswordText = styled.Text`
  font-family: ${(props) => props.fontFamily};
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #43A2FA;
  position: absolute;
  right: 0px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 81%;
  height: ${height * 0.08}px;
  background-color: #262628;
  border-radius: 14px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const LoginEmailText = styled.Text`
  font-size: 14px;
  color: white;
  font-family: ${(props) => props.fontFamily};
  line-height: 16px;
`;

export const LogoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;