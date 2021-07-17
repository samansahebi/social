import React from 'react';

import { Container, List, Item } from './styles';

interface Props{
    like:number,
    comment:number,
}
const Records: React.FC<Props> = ({like,comment}) => (
    <Container>
        <List>
            <Item>
                <span> کامنت {comment}</span>
            </Item>
            <Item>&middot;</Item>
            <Item>
                <span>{like}</span>
                </Item>
                <Item>&middot;</Item>
<Item>
                <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="LIKE" />
                <img src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt="EMPATHY" />
                <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="PRAISE" />
            </Item>
        </List>
    </Container>
);

export default Records;
