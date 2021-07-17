import styled from 'styled-components';

interface Props {
    active: number;
}

export const Container = styled.div`

    width: 400px;
    
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
display: flex;
flex-direction:row-reverse;

    padding: 8px 25px;
    overflow-y: scroll;
    overflow-x:hidden;
    max-height: 500px;
`;

export const Input = styled.input`
display:flex;
width:380px;
height: 34px;
background: #E1E9EE;
border-radius: 2px;
padding: 0 8px 0 28px;
margin:10px;
line-height: 1.75;
color: rgba(40,62,74,.75);
font-weight: 400;
font-size: 1.4rem;
border: none;
text-align: right;
`;
export const CheckBoxInput = styled.input`
width:20px;
height: 20px;
background: #E1E9EE;
border-radius: 2px;
padding: 0 8px 0 28px;
margin-right:10px;
line-height: 1.75;
color: rgba(40,62,74,.75);
font-weight: 400;
font-size: 1.4rem;
border: none;
`;
export const Select = styled.select`
width:380px;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;
  background: #E1E9EE;
  border: none;
  direction:rtl;
  
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
export const Actions = styled.div`
display: flex;
justify-content: flex-end;
margin:10px;
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
export const Label = styled.label`
font-weight: 400;
font-size: 1.4rem;
padding:12px;
`;
export const CheckLabel = styled.label`
font-weight: 400;
font-size: 1.4rem;
`;
export const TextArea = styled.textarea`
    display:block;

    text-align:right;
    font-size: 1.4rem;
    min-width:100%;
    max-width:100%;
    min-height: 100px;
    max-height: 100px;
    overflow-y: scroll;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    padding: 10px;
`;