import styled from 'styled-components';
import Modal,{ BaseModalBackground } from 'styled-react-modal';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0;
`;

export const BoxImage = styled.div`
    width: 48px;
    height: 48px;
    position: relative;
`;

export const Image = styled.div`
    border-radius: 50%;
    height: 48px;
    overflow: hidden;

    img {
        width: 48px;
        height: 48px;
    }
`;

export const Connection = styled.div`
    position: absolute;
    bottom: 0;
    right: 2px;

    width: 12px;
    height: 12px;

    border-radius: 50%;
    border-width: 4px;
    border: 3px solid #469a1f;
    background: #ffffff;
`;

export const Text = styled.div`
    padding-left: 10px;
    display: flex;
    flex-direction: column;
`;

export const Name = styled.div`
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.42857;
    color: rgba(0,0,0,.9);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 460px;
    margin-right: 4px;

    span {
        color: rgba(0,0,0,.6);
        font-weight: 400;
        margin-left: 3px;
    }
    
    svg {
        width: 24px;
        height: 24px;
        color: rgba(0, 0, 0, .6);
    }
`;

export const Job = styled.span`
    display: flex;
    justify-content:flex-end;
    margin-right: 4px;
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 400;
    color: rgba(0,0,0,.6);    
`;

export const Date = styled.span`
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 400;
    color: rgba(0,0,0,.6); 
    display: flex;
    justify-content:flex-end;
    align-items: center;
    margin-right: 4px;

    span {
        margin: 0 2px;
    }

    svg {
        width: 16px;
        height: 16px;
    }
`;
export const BTN = styled.button`
background-color:white;
`;
export const ModalMore = Modal.styled`
  width: 288px;
  height: 443px;
  padding-top: 20px;
  background: white;
  position: fixed;
  top: 64px;
  right: 305px;
  border-radius: 2px;
  border: none;
  box-shadow: 0 0 0 1px rgba(0,0,0,.02), 0 3px 9px rgba(0,0,0,.2);
`;
export const ModalBackground = styled(BaseModalBackground)`
  opacity: 1;
  background: none;
`;
export const Items = styled.ul`
li {
    text-align:right;
    padding: 10px 12px;
    cursor: pointer;
    font-size: 1.4rem;
    line-height: 1.42857;
    color: rgba(0,0,0,.6);

    &:hover {
        background-color: rgba(0,0,0,.1); 
    }
  }
`;