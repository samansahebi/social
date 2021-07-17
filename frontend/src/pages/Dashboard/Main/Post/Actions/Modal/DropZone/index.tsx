import React, { useEffect, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import {Container,Input,Text} from './styles'

const StyledDropzone:React.FC=(props)=> {
  const [files, setFiles] = useState([{}]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'image/*',
onDrop:acceptedFiles => {
  setFiles(acceptedFiles.map(file => Object.assign(file, {
    preview: URL.createObjectURL(file)
  })))
  }});
    useEffect(() => () => {
    console.log(files)
  }, [files]);
  return (
      <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
        <Input {...getInputProps()} />
        <Text>فایل های خود را به اینجا بکشید یا برای انتخاب کلیک کنید</Text>
      </Container>
  );
}

export default StyledDropzone;