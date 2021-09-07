import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const heightScreen = 812;
const widthScreen = 375;

export function hp(height) {
  const PxInPercent = (height * 100) / heightScreen;

  return heightPercentageToDP(PxInPercent);
}

export function wp(width) {
  const PxInPercent = (width * 100) / widthScreen;

  return widthPercentageToDP(PxInPercent);
}