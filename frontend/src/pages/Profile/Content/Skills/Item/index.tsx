import React from 'react';

import { Container, Border, Box, Place, Connections, Image, Infos, Text } from './styles';

interface Props {
    image: string;
    skill: string;
}

const Item: React.FC<Props> = ({ image, skill }) => {
    return <Container>
        <Border>
            <Box>
                <Place>{skill}</Place>
                &middot;
            <Connections>+ de 99</Connections>
            </Box>
            <Infos>
                <Text> Recomendada por <strong>54 pessoas nos últimos 6 meses</strong></Text>
                <Image>
                    <img src={image} alt="" />
                </Image>
            </Infos>
        </Border>
    </Container>;
}

export default Item;