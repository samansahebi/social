import React, { useState } from 'react';
import { ReactComponent as Saved } from 'assets/jobs/saved.svg';
import { ReactComponent as Check } from 'assets/jobs/check.svg';
import { ReactComponent as Anun } from 'assets/jobs/anun.svg';
import Wrapper from 'components/Wrapper';
import {Container, Content, List, Cta, Button,StyledModal } from './styles';
import Item from './Item';
import { ModalProvider } from 'styled-react-modal';
import Modal from './Modal';

const Jobs: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
      setIsOpen(!isOpen);
    }
    return(
    <ModalProvider> 

    <Wrapper>
        <Container>
            <Content>
                <List>
                    <Item icon={<Saved />} text="مشاغل ذخیره شده" />
                    <Item icon={<Check />} text="داوطلبان" />
                </List>
                <Cta>
                    <Button onClick={toggleModal}>
                        <Anun />
                        <span>پست کردن شغل جدید</span>
                    </Button>
                </Cta>
            </Content>
        </Container>
        <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal}>
            <Modal onClick={toggleModal} />
        </StyledModal>
    </Wrapper>

    </ModalProvider> 
)
};

export default Jobs;
