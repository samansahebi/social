import React from 'react';

import { Container } from './styles';
import Wrapper from 'components/Wrapper';
import Section from './Section';
import Item from './Item';

interface Props{
    skill:{id:number,skills_list:string,top_skills:string,user:number,endorsed_by:Array<number>}
}

const Skills: React.FC<Props> = ({skill}) => {
    return <Wrapper>
        <Container>
            <Section title="مهارت ها">
                <Item
                    skill={skill.skills_list}
                    image={''}
                />
            </Section>
        </Container>
    </Wrapper>;
}

export default Skills;