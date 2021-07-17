import React from 'react';

import Wrapper from 'components/Wrapper';
import { Container, Border } from './styles';
import Section from './Section';
import Item from './Item';

const Achievements: React.FC = () => (
  <Wrapper>
    <Container>
      <Section title="دستاوردها">
        <Item
          name="زبان"
          resume="انگلیسی &middot; عربی"
          number="1"
        />
        <Border />
        <Item
          name="projeto"
          resume="Desenvolvendo a capacidade lógica e cognitiva a partir da informática"
          number="2"
        />
      </Section>
    </Container>
  </Wrapper>
);

export default Achievements;
