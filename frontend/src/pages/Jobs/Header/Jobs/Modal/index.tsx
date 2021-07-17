import React, { useState } from 'react';

import { ReactComponent as Close } from 'assets/profile/close.svg';

import {
  Container, Header, Title, Text, Icon, Input,Button,Actions,Select,Label,TextArea,CheckBoxInput,CheckLabel
} from './styles';
import { useDispatch } from 'react-redux';
import { jobCreate } from 'redux/actions/job';

interface Props {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Modal: React.FC<Props> = ({ onClick }) => {
  const [file, setFile] = useState<any>();
  const [formData, setFormData] = useState<any>();
const [fileLabel, setFileLabel] = useState<string>();
const dispatch = useDispatch();
const hiddenFileInput = React.useRef(document.createElement("input"));

  const handleClick = event => {
    hiddenFileInput.current.click();
  };
const handleChange = event => {
    setFile(event.target.files[0])
    setFileLabel(event.target.files[0].name)
  };
  const handleSubmit = ()=>{
    dispatch(jobCreate(formData))
  }
  const handleChangeForm = event=>{
    setFormData({...formData,[event.target.name]:event.target.value})
  }
  const handleSelect = event=>{
      switch (event.target.value) {

        case 1:
          setFormData({...formData,[event.target.name]:'Parttime'});    

        case 2:
          setFormData({...formData,[event.target.name]:'Internship'});    

        case 3:
          setFormData({...formData,[event.target.name]:'Contract'});    

        case 4:
          setFormData({...formData,[event.target.name]:'Volunteer'});    

        case 5:
          setFormData({...formData,[event.target.name]:'Temporary'});    

        default:
          setFormData({...formData,[event.target.name]:'Fulltime'});    

      }
    }

  
  const handleCheck = event=>{
    setFormData({...formData,[event.target.name]:event.target.value})

  }
  return (
    <Container>
      <Header>
        <Title>
          <Icon onClick={onClick}><Close /></Icon>
          <Text>پست کردن شغل جدید</Text>
        </Title>
      </Header>
      <Input name={'organization'} placeholder="نام سازمان" onChange={handleChangeForm}/>
      <Input name={'title'} placeholder="عنوان شغل" onChange={handleChangeForm}/>
      <Input name={'location'} placeholder="مکان" onChange={handleChangeForm}/>
      <Input name={'skills_required'} placeholder="مهارت های مورد نیاز" onChange={handleChangeForm}/>
      <Input name={'industry'} placeholder="حوزه فعالیت" onChange={handleChangeForm}/>
      <Input name={'pay_range'} placeholder="میزان دستمزد" onChange={handleChangeForm}/>
      <Input name={'external_site_url'} placeholder="آدرس وبسایت" onChange={handleChangeForm}/>
      <Select name={'employment_type'} onChange={handleSelect}>
        <option value="" hidden> تمام وقت </option>
        <option value="1">پاره وقت</option>
        <option value="2">شراکت</option>
        <option value="3">پروژه ای</option>
        <option value="4">داوطلبانه</option>
        <option value="5">موقت</option>
      </Select>
      <Actions><CheckBoxInput id={'chk'} type={'checkbox'} onChange={handleCheck}/><CheckLabel htmlFor={'chk'}> دورکاری</CheckLabel></Actions>
      <Actions>

      <Label>{fileLabel}</Label><Button onClick={handleClick}>فایل پیوست</Button><Input type='file' style={{display:'none'}} ref={hiddenFileInput} onChange={handleChange}/>
      </Actions>
      <TextArea name={'description'} placeholder="توضیحات" onChange={handleChangeForm}/>

      <Actions>
        <Button onClick={handleSubmit}>اشتراک گذاری</Button>
      </Actions>
    </Container>
  );
};

export default Modal;
