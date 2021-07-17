import React, { useState } from 'react';
import { ModalProvider } from 'styled-react-modal';

import { ReactComponent as Pencil } from 'assets/profile/pencil.svg';
import { ReactComponent as PencilBig } from 'assets/profile/pencilBig.svg';
import { ReactComponent as DropIcon } from 'assets/profile/drop.svg';

import {
  Container, Cover, Icon, Infos, Photo,
  Actions, Add, Drop, More, Edit, StyledModal,
} from './styles';
import Modal from './Modal';
interface Props{
  avatar:string,
  cover:string,
}
const Header: React.FC<Props> = ({cover,avatar}) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <ModalProvider>
      <Container>
        <Cover>
          <img src={cover} alt="" />
          <Icon><Pencil /></Icon>
        </Cover>
        <Infos>
          <Actions>
            <Add>
              انتخاب وضعیت پروفایل
              <Drop><DropIcon /></Drop>
            </Add>
            <More>بیشتر</More>
            <Edit onClick={toggleModal}><PencilBig /></Edit>
            <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal}>
              <Modal onClick={toggleModal} />
            </StyledModal>
          </Actions>
          <Photo><img src={avatar} alt="" /></Photo>
        </Infos>
      </Container>
    </ModalProvider>
  );
};

export default Header;
