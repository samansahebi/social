import React, { useState } from 'react';

import { ReactComponent as World } from 'assets/main/world.svg';
import {
  Container, BoxImage, Image, Connection, Text, Name, Job, Date,BTN,ModalMore,Items,ModalBackground
} from './styles';
import { ModalProvider } from 'styled-react-modal';
import { Button } from 'styled-button-component';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownDivider
} from 'styled-dropdown-component';
interface Props {
    name: string;
    job: string;
    date: string;
    image: string;
    active?: boolean;
}

const Author: React.FC<Props> = ({
  image, name, job, date, active = false,
}) => {

  const [hidden, setHidden] = useState(true);

return(
  <Container>
    <Text>
      <Name>        
      <Dropdown>
      <Button dropdownToggle className={BTN} onClick={() => setHidden(!hidden)}>
      </Button>
      <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
        <DropdownItem onClick={() => setHidden(!hidden)}>حذف پست</DropdownItem>
        <DropdownItem onClick={() => setHidden(!hidden)}>ویرایش پست</DropdownItem>
        <DropdownDivider />
        <DropdownItem onClick={() => setHidden(!hidden)}>ذخیره</DropdownItem>
      </DropdownMenu>
      </Dropdown>
        <div>
          <strong>{name}</strong>
        </div>
      </Name>
      <Job>{job}</Job>
      <Date>
        {date}
      </Date>
    </Text>
    <BoxImage>
      <Image><img src={image} alt="" /></Image>
      {active && <Connection />}
    </BoxImage>

  </Container>
)
};

export default Author;
