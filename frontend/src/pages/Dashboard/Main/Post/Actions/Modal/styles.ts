import styled from 'styled-components';

interface Props {
    active: number;
}

export const Container = styled.div`
    width: 744px;
    
`;

export const Header = styled.div`
    height: 60px;
    padding: 16px 32px 8px;
    border-bottom: 1px solid rgba(0,0,0,.15);
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 28px;
`;

export const Text = styled.h2`
    font-size: 2rem;
    line-height: 1.4;
    color: rgba(0,0,0,.9);
    font-weight: 400;
    font-style: normal;
    margin-bottom: 0;
    padding-left: 1.6rem;
`;

export const Icon = styled.button`
border: none;

    height: 4rem;
    border: 0;
    background: transparent;
    display: flex;
    flex-direction:row-reverse;
    align-items: center;
    justify-content: center;

    svg {
        width: 24px;
        height: 24px;
        color: rgba(0,0,0,.6);
    }
`;

export const Nav = styled.nav``;

export const Pages = styled.ul<Props>`
    margin-top: 3px;
    display: flex;

    li:nth-child(${({ active }) => active}) {
        color: #0073b1;

        &:after{
            content: "";
            height: 4px;
            width: 100%;
            background-color: #0084bf;
            transition: all .2s ease;
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }
`;

export const Category = styled.li`
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 500;
    cursor: pointer;
    color: rgba(0,0,0,.6);
    height: 43px;
    padding: 12px;
    position: relative;

    &:hover {
        color: #0073b1;
    }

`;

export const Content = styled.div`
    padding: 8px 25px;
    overflow-y: scroll;
    overflow-x:hidden;
    max-height: 400px;
`;

export const Input = styled.textarea`
    text-align:right;
    font-size: 1.4rem;
    min-width:100%;
    max-width:100%;
    min-height: 150px;
    max-height: 150px;
    overflow-y: scroll;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    padding: 10px;
`;

export const Actions = styled.div`
display: flex;
align-items: right;
justify-content: center;
flex-direction:row-reverse;
height: 245px;

border-top:1px;
`;

export const ButtonContainer = styled.div`


`;

export const Button = styled.button`
align-items:right;
border: none;
border-radius: 2px;
min-width: 6.4rem;
max-width: 480px;
padding: 1rem 2.6rem;
margin-left:10px;
font-weight: 600;
font-size: 1.6rem;
min-height: 4rem;
background-color: #0073b1;
color: #fff;
&:hover{
    background: #2E8BC0
}
`;