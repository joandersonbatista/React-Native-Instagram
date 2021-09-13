import styled from 'styled-components';
import { Hp, Wp } from '../../../responsive';

import Message from '../../assets/Message.svg';
import Like from '../../assets/Like.svg';
import Search from '../../assets/Search.svg';

export { Hp };

export const Header = styled.View`
  margin-top: ${Hp(50)}px;
  flex-direction: row;
  align-items: center;
  width: ${Wp(350)}px;
  align-self: center;
`;

export const InstagramText = styled.Text`
  font-family: Roboto_500Medium;
  font-size: ${Hp(18)}px;
  line-height: ${Hp(21)}px;
  margin-left: ${Wp(8)}px;
  color: #262628;
`;

export const ContainerIcons = styled.View`
  position: absolute;
  right: 0;
  flex-direction: row;
`;

export const MessageIcon = styled(Message)`
  height: ${Hp(25)}px;
  margin-left: ${Wp(15)}px;
`;

export const LikeIcon = styled(Like)`
  height: ${Hp(25)}px;
  margin-left: ${Wp(15)}px;
`;

export const SearchIcon = styled(Search)`
  height: ${Hp(25)}px;
  margin-left: ${Wp(15)}px;
`;