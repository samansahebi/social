import styled from 'styled-components';


export const Container = styled.div`
margin: 0;
position: absolute;
top: 50%;
background: #283e4a;
border-radius: 10px;
padding:30px;
left: 50%;
transform: translate(-50%, -50%);
`;

export const ButtonContainer = styled.div`
display:flex;
justify-content:center;
`;
export const Button = styled.button`
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 167ms;
    border: none;
    border-radius: 2px;
    min-width: 6.4rem;
    max-width: 480px;
    padding: 1rem 4.6rem;
    margin:20px;

    font-weight: 600;
    font-size: 1.6rem;
    min-height: 4rem;

    background-color: #0073b1;
    color: #fff;
    &:hover{
        background: #2E8BC0


    }
`;
export const Input = styled.input`
display:block;
margin:20px;
  width:280px;
  height: 34px;
  background: #E1E9EE;
  border-radius: 2px;
  padding: 0 8px 0 28px;
  line-height: 1.75;
  color: rgba(40,62,74,.75);
  font-weight: 400;
  font-size: 1.4rem;
  border: none;
  text-align: right;
`;

export const Title = styled.h3`
text-align:center;
font-size: 3.2rem;

color: #ffffff;
margin:15px;
`;

export const Links = styled.div`
margin: 0;
display:flex;
color: #ffffff;

justify-content:center;
`;
export const Label = styled.div`
margin: 10px;
color: #ffffff;
font-size: 1.3rem;
text-decoration:none;
&:hover{
    color: #0073b1;
}
`;
export const BoxImage = styled.div`
    display: flex;
    justify-content: center;
    width: 300px;
    height: 80px;
    margin:20px;
`;

export const Image = styled.img`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    border-radius: 50%;
    overflow: hidden;

    img {
        
        width: 80px;
        height: 80px;
    }
`;
