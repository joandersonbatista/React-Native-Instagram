import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  // eslint-disable-next-line camelcase
  useFonts, Roboto_500Medium, Roboto_900Black, Roboto_400Regular,
} from '@expo-google-fonts/roboto';

import Welcome from './src/screens/Welcome';

import { ModalProvider } from './src/context/modalContex';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ModalProvider>
      <Welcome />
    </ModalProvider>
  );
}