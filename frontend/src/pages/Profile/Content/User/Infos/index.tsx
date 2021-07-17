import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';
import {
  Container, User, Name, Job, Place, Connections,
  Box, Contact, Company, Item, Image, NameCompany, StyledModal,
}
  from './styles';
import Modal from './Modal';

interface Props{
  firstName:string,
  lastName:string,
  avatar:string,
  tagline:string,
}

const Infos: React.FC<Props> = ({firstName,lastName,avatar,tagline}) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <ModalProvider>
      <Container>
        <Company>
          <Item>
            <Image><img src={avatar} alt="" /></Image>
            <NameCompany>Kobe - Creative Software House</NameCompany>
          </Item>
          <Item>
            <Image><img src={avatar} alt="" /></Image>
            <NameCompany>IGTI</NameCompany>
          </Item>
        </Company>
        <User>
          <Name>{firstName + ' ' + lastName}</Name>
          <Job>{tagline}</Job>
          <Box>
            <Place>Venâncio Aires, Rio Grande do Sul, Brasil</Place>
            &middot;
            <Link to="/connections"><Connections>+ de 500 conexões</Connections></Link>
          </Box>
          <Contact onClick={toggleModal}>Informações de contato</Contact>
          <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal}>
            <Modal onClick={toggleModal} />
          </StyledModal>
        </User>
      </Container>
    </ModalProvider>
  );
};

export default Infos;
