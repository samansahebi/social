import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;    
    height: 80px;
    border-bottom: 1px solid #e6e9ec;
`;

export const Left = styled.div`
    display: flex;
`;

export const Image = styled.div`
    width: 55px;
    height: 55px;
    position: relative;

    img {
        width: 100%;
        border: 4px solid transparent;
        height: 56px;
    }
`;

export const Infos = styled.div`
    width: 307px;
    margin-left: 20px;
    margin-top: 4px;
`;

export const Name = styled.span`
    font-size: 1.4rem;
    line-height: 1.4;
    font-weight: 500;
    color: rgba(0,0,0,.9);
    max-width: 281px;
    display: flex;
    span {
        color: rgba(0, 0, 0, .6);
        font-weight: 400;
    }
`;

export const Followers = styled.span`
    font-size: 1.3rem;
    line-height: 1.7;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    display: block;
`;

export const Following = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.div`
    margin-right: 5px;
    svg {
        width: 16px;
        height: 16px;
        color: rgba(0,0,0,.6);
    }
`;

export const Text = styled.span`
    font-size: 1.4rem;
    line-height: 2rem;
    color: rgba(0,0,0,.6);
    font-weight: 500;
`;
