import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content:flex-end;
    padding: 4px 0;
    position: relative;
    `;


export const CommentsActionsContainer = styled.div`
display: flex;

    text-align:right;
    padding:5px;
    border: 1px;
    `;
  
    export const CommentsInput = styled.input`
    display:block;
    width:100%;
    height: 34px;
    background: #E1E9EE;
    border-radius: 10px;
    padding:15px;
    margin-right:5px;
    line-height: 1.75;
    color: rgba(40,62,74,.75);
    font-weight: 400;
    font-size: 1.4rem;
    border: none;
    text-align: right;
    `;
 
    export const CommentsSend = styled.button`
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 167ms;
    border: none;
    border-radius: 10px;
    min-width: 6.4rem;
    max-width: 480px;
    padding: 5px;

    font-weight: 600;
    font-size: 1.2rem;
    height: 34px;

    background-color: #0073b1;
    color: #fff;
    &:hover{
        background: #2E8BC0
    }
    `;


    export const CommentsContainer = styled.div`
        display: flex;
        align-items: flex-start;
        flex-direction:row-reverse;
        padding: 0 15px;
        margin-bottom: 20px;
    `;
    
    export const Box = styled.div`
        width: 32px;
        height: 38px;
        display: flex;
        align-items: flex-end;
        margin-left:10px;
        img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }
    `;
    
    export const Text = styled.div`
    background: #E1E9EE;
        padding:10px;
        text-align:right;
        border-radius:10px;
    `;
    
    export const Name = styled.span`
        font-size: 1.4rem;
        line-height: 1.42857;
        font-weight: 600;
        color: #283e4a;
        
        margin-left:10px;
    `;
    
    export const Connection = styled.span`
        font-size: 1.2rem;
        line-height: 1.33333;
        font-weight: 400;
        color: #283e4a;
    `;
    
    export const Infos = styled.div``;
    
    export const Content = styled.div`
        font-size: 1.4rem;
        line-height: 1.5;
        font-weight: 400;
        color: #283e4a;
    
        margin-top: 5px;
    `;
    