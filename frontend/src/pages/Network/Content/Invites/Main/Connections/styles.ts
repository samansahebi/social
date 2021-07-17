import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 30px;
    padding:10px;
`;

export const Title = styled.h2`
    display: flex;
    justify-content: flex-end;
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction:row-reverse;
    margin: 5px;

    div {
        margin: 0;
        margin-bottom: 5px;
    }
`

export const User = styled.div`
padding: 5px;

`
