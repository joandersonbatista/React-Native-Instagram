import styled from 'styled-components/native';

import { hp, wp } from '../../../responsive';

export const Background = styled.View`
  flex: 1;
  background-color: rgba(38, 38, 40, 0.85);
`;

export const Container = styled.View`
  position: absolute;
  background-color: white;
  height: ${hp(750)}px;
  width: ${wp(375)}px;
  bottom: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Shape = styled.View`
  height: ${hp(10)}px;
  width: ${wp(320)}px;
  background-color: #FFFFFF;
  opacity: 0.35;
  position: absolute;
  top: ${hp(55)}px;
  align-self: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const BackButton = styled.TouchableOpacity`
  margin: ${hp(17)}px 0px 0px ${wp(10)}px;
  height: ${hp(36)}px;
`;

export const SignInTextInstagram = styled.Text`
  font-family: Roboto_900Black;
  font-weight: 900;
  font-size: ${hp(36)}px;
  line-height: ${hp(42)}px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #262628;
  margin-top: ${hp(81)}px;
`;

export const EnterYourDetailsText = styled.Text`
  font-family: Roboto_500Medium;
  font-weight: 500;
  font-size: ${hp(16)}px;
  line-height: 19px;
  color: #9797BD;
  text-align: center;
  margin-top: ${hp(13)}px;
`;

export const ContainerEmail = styled.View`
  width: ${wp(305)}px;
  align-self: center;
  margin-top: ${hp(39)}px;
`;

export const ContainerPassword = styled.View`
  width: ${wp(305)}px;
  align-self: center;
  margin-top: ${hp(21)}px;
`;

export const UsernameOrEmailText = styled.Text`
  font-family: Roboto_500Medium;
  font-weight: 500;
  font-size: ${hp(13)}px;
  line-height: ${hp(15)}px;
  color: #262628;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${hp(60)}px;
  border: 1px solid rgba(38, 38, 40, 0.20);
  border-radius: ${hp(14)}px;
  margin-top: ${hp(10)}px;
  padding: 0px 20px;
  align-items: center;
`;

export const TextInputEmail = styled.TextInput`
  padding-left: ${wp(10)}px;
  width: 80%;
  font-family: Roboto_400Regular;
  color: #262628;
  font-size: ${hp(14)}px;
  line-height: ${hp(16)}px;
`;

export const ForgotPasswordText = styled.Text`
  font-family: Roboto_500Medium;
  font-weight: 500;
  font-size: ${hp(14)}px;
  line-height: ${hp(15)}px;
  color: #43A2FA;
  position: absolute;
  right: 0px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: ${wp(305)}px;
  height: ${hp(60)}px;
  background-color: #262628;
  border-radius: ${hp(14)}px;
  margin-top: ${hp(20)}px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const LoginEmailText = styled.Text`
  font-size: ${hp(14)}px;
  color: white;
  font-family: Roboto_500Medium;
  line-height: ${hp(16)}px;
`;

export const LogoContainer = styled.View`
  align-self: center;
  margin-top: ${hp(40)}px;
`;