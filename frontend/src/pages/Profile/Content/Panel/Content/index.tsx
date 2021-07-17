import React from 'react';
import Wrapper from 'components/Wrapper';

import { Container, Card, Views, Text } from './styles';

const Content: React.FC = () => {
    return <Wrapper shadow>
        <Container>
            <Card>
                <Views>2.885</Views>
                <Text>بازدید پروفایل</Text>
            </Card>
            <Card>
                <Views>3.741</Views>
                <Text>بازدید پست ها</Text>
            </Card>
            <Card>
                <Views>100</Views>
                <Text>آمار نتایج جستجو</Text>
            </Card>
        </Container>
    </Wrapper>;
}

export default Content;