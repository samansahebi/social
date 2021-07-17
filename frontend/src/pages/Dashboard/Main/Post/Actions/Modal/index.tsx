import React from 'react';

import { ReactComponent as Close } from 'assets/profile/close.svg';

import {
  Container, Header, Title, Text, Icon, Input,Button,Actions
} from './styles';
import StyledDropzone from './DropZone';

interface Props {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Modal: React.FC<Props> = ({ onClick }) => {

  return (
    <Container>
      <Header>
        <Title>
          <Icon onClick={onClick}><Close /></Icon>
          <Text>پست جدید</Text>
        </Title>
      </Header>
      <Input placeholder="...چیزی بنویسید"/>
      <Actions>
      <StyledDropzone />
      </Actions>
        <Button onClick={onClick}>انصراف</Button>
        <Button>اشتراک گذاری</Button>
    </Container>
  );
};

export default Modal;
