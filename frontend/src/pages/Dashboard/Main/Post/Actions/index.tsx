import React, { useEffect, useState } from 'react';
import { ReactComponent as Post } from 'assets/main/post.svg';
import { ReactComponent as Image } from 'assets/main/image.svg';
import { ReactComponent as Video } from 'assets/main/video.svg';
import { ReactComponent as Doc } from 'assets/main/doc.svg';
import { Container, Items, NewPost, Text ,Button,Input,Pic,PicBTN,ImgBox,ContentBox} from './styles';

import Action from './Action';
import { ModalProvider } from 'styled-react-modal';
import Modal from './Modal';

const Actions: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState<any>();
    const [Preview, setPreview] = useState<any>();
    const hiddenFileInput = React.useRef(document.createElement("input"));

    // function toggleModal() {
    //   setIsOpen(!isOpen);
    // }
    useEffect(() => {
        if (!file) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [file])
    const handleClick = event => {
        hiddenFileInput.current.click();
      };
    const handleChange = event => {
        setFile(event.target.files[0])
        setIsOpen(true)
      };
    return(
    <Container>
                {/* <ModalProvider> */}

        <Items>
            <Action >
                <NewPost onClick={()=>setIsOpen(!isOpen)}>
                    <Text>شروع نوشتن</Text>
                    <Post />
                </NewPost>
            </Action>
            <Action><PicBTN onClick={handleClick}><Pic type='file' ref={hiddenFileInput} onChange={handleChange} accept="image/png,image/gif,image/jpeg"/><Image /></PicBTN></Action>
            <Action><Video /></Action>
            <Action><Doc /></Action>
        </Items>
        {isOpen && <ContentBox>

        <Input placeholder="...چیزی بنویسید"/>
        {file && <ImgBox src={Preview}/>}
        <Button>بارگذاری</Button>
        </ContentBox>}
        {/* <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal}>
                <Modal onClick={toggleModal} />
            </StyledModal>
        </ModalProvider> */}
    </Container>
    )
};

export default Actions;
