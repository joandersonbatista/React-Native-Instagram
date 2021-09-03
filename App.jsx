import React from 'react';
import Welcome from './src/screens/Welcome';
import { ModalProvider } from './src/context/modalContex';

export default function App() {
  return (
    <ModalProvider>
      <Welcome />
    </ModalProvider>
  );
}