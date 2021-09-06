import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Background = styled.View`
  flex: 1;
  background-color: rgba(38, 38, 40, 0.85);
`;

export const Container = styled.View`
  position: absolute;
  background-color: white;
  height: ${hp(92)}px;
  width: ${wp(100)}px;
  bottom: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Shape = styled.View`
  height: ${hp(1.9)}px;
  width: ${wp(85)}px;
  background-color: #FFFFFF;
  opacity: 0.35;
  position: absolute;
  top: ${hp(7)}px;
  align-self: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const BackButton = styled.TouchableOpacity`
  margin: 20px 0px 0px 15px;
  height: 4%;
`;

export const SignInTextInstagram = styled.Text`
  font-family: Roboto_900Black;
  font-weight: 900;
  font-size: ${hp(4.43)}px;
  line-height: ${hp(5.1)}px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #262628;
  margin-top: ${hp(9.9)}px;
`;

export const EnterYourDetailsText = styled.Text`
  font-family: Roboto_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #9797BD;
  text-align: center;
  margin-top: ${hp(1.6)}px;
`;

export const ContainerEmail = styled.View`
  width: 81%;
  align-self: center;
  margin-top: ${((props) => hp(props.margin))}px;
`;

export const UsernameOrEmailText = styled.Text`
  font-family: Roboto_500Medium;
  font-weight: 500;
  font-size: ${hp(1.6)}px;
  line-height: 15px;
  color: #262628;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${hp(7.3)}px;
  border: 1px solid rgba(38, 38, 40, 0.20);
  border-radius: ${hp(1.7)}px;
  margin-top: ${hp(1.2)}px;
  padding: 0px 20px;
  align-items: center;
`;

export const TextInputEmail = styled.TextInput`
  padding-left: 10px;
  width: ${wp(81)}px;
  font-family: Roboto_400Regular;
  color: #262628;
  font-size: ${hp(1.7)}px;
  line-height: 16px;
`;

export const ForgotPasswordText = styled.Text`
  font-family: Roboto_500Medium;
  font-weight: 500;
  font-size: ${hp(1.6)}px;
  line-height: 15px;
  color: #43A2FA;
  position: absolute;
  right: 0px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: ${wp(81)}px;
  height: ${hp(7.3)}px;
  background-color: #262628;
  border-radius: ${hp(1.7)}px;
  margin-top: ${hp(2.4)}px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const LoginEmailText = styled.Text`
  font-size: ${hp(1.9)}px;
  color: white;
  font-family: Roboto_500Medium;
  line-height: 16px;
`;

export const LogoContainer = styled.View`
  align-self: center;
  margin-top: ${hp(7.5)}px;
`;