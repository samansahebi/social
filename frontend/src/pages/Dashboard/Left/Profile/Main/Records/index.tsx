import React from 'react';
import Record from './Record';
import Container from './styles';

interface Props {
    bookmarks: number;
connection: number;
}

const Records: React.FC<Props> = ({bookmarks,connection}) => (
    <Container>
        <Record text="پست های ذخیره شده" number={bookmarks} />
        <Record text="ارتباطات" number={connection} />
    </Container>
);

export default Records;
