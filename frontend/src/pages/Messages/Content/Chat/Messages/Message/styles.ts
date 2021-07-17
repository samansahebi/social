import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 0 15px;
    margin-bottom: 20px;
`;

export const Box = styled.div`
    width: 32px;
    height: 38px;
    display: flex;
    align-items: flex-start;
    margin-right:10px;
    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
`;

export const Text = styled.div`
    background-color: #283e4a;
    padding:10px;
    border-radius:10px;
`;

export const Name = styled.span`
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 600;
    color: #0073b1;

`;

export const Connection = styled.span`
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 400;
    margin-left:10px;
    margin-right:10px;

    color: #ffffff;
`;

export const Infos = styled.div``;

export const Content = styled.div`
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 400;
    color: #ffffff;
    text-align:right;

    margin-top: 5px;
`;
