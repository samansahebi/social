import React, { useState } from 'react';
import { Container, Content, Button } from './styles';

interface Props {
    message: string;
}

const Text: React.FC<Props> = ({message}) => {
    const [show, setShow] = useState(false);
    return (
        <Container>
            <Content><span>{show ? message : message.slice(0,100)}</span></Content>
            <Content>
                <Button onClick={() => setShow(true)} show={show}>
                    ...ادامه مطلب
                </Button>
            </Content>
        </Container>
    );
};

export default Text;
