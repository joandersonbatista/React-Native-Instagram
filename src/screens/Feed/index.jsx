import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Hp,
  Header,
  InstagramText,
  ContainerIcons,
  LikeIcon,
  MessageIcon,
  SearchIcon,
} from './styled';

import Logo from '../../assets/Logo.svg';

export default function Feed() {
  return (
    <>
      <StatusBar backgroundColor="white" style="dark-content" />
      <Header>
        <Logo height={Hp(40)} />
        <InstagramText>
          Instagram
        </InstagramText>
        <ContainerIcons>
          <MessageIcon />
          <LikeIcon />
          <SearchIcon />
        </ContainerIcons>
      </Header>
    </>
  );
}