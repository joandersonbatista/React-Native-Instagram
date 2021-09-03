import React, { useContext } from 'react';
import modalContext from '../../context/modalContex';

import { Container, Shape } from './styled';

export default function ModalSignIn() {
  useContext(modalContext);
  return (
    <>
      <Shape />
      <Container />
    </>
  );
}