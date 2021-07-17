import React from 'react';
import Container from './styles';
import Records from './Records';

interface Props {
    bookmarks: number;
    connection: number;
    }

const Main: React.FC<Props> = ({bookmarks,connection}) => (
    <Container>
        <Records connection={connection} bookmarks={bookmarks} />
    </Container>
);

export default Main;
