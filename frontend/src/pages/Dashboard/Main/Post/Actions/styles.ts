import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const Container = styled.div`
    display: block;
    align-items: center;
    justify-content: column;
`;

export const Items = styled.div`
    display: flex;
    flex-direction:row-reverse;

    button:first-child {
        width: 334px;
        justify-content: flex-end;

        &:hover {
            background: #ffffff;
    
            svg {
                color: #0084bf;
            }

            span {
                color: #0084bf;
            }
        }
    }
`;

export const ContentBox = styled.div`
`;

export const Pic = styled.input`
display:none;
`;
export const PicBTN = styled.div`
`;
export const ImgBox = styled.img`
display:block;

text-align:right;
font-size: 1.4rem;
min-width:100%;
max-width:100%;
min-height: 150px;
overflow-y: scroll;
`;
export const Button = styled.button`

align-items:right;
border: none;
border-radius: 2px;
width: 100%;

font-weight: 600;
font-size: 1.6rem;
min-height: 4rem;
background-color: #0073b1;
color: #fff;
&:hover{
    background: #2E8BC0
}
`;
export const NewPost = styled.div`
    display: flex;
    align-items: center;
`;

export const Text = styled.span`
    display: flex;
    margin: 2px 0 0 8px;
    font-size: 1.55rem;
    line-height: 1.5;
    font-weight: 600;
`;

export const StyledModal = Modal.styled`
  width: 744px;
  height: 515px;
  background: white;
  top: 0;
`;
export const Input = styled.textarea`
    display:block;

    text-align:right;
    font-size: 1.4rem;
    min-width:100%;
    max-width:100%;
    min-height: 150px;
    overflow-y: scroll;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    padding: 10px;
`;