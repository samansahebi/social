import React from 'react';

import Container from './styles';
import Author from './Author';
import Text from './Text';

interface Props {
    name: string;
    text: string;
    job: string;
    date: string;
    image: any;
    active?: boolean;
}

const Header: React.FC<Props> = ({
    name,text, job, date, image, active = false,
}) => (
        <Container>
            <Author
                name={name}
                job={job}
                date={date}
                image={image}
                active={active}
            />
            <Text message={text} />
        </Container>
    );

export default Header;
