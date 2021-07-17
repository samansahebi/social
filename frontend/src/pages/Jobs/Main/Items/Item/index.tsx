import React from 'react';

import { ReactComponent as More } from 'assets/messages/more.svg'
import { ReactComponent as Logo } from 'assets/logo.svg'

import { Container, Header, Image, Box, BoxRelation, Promoted, Icon, Infos, Title, Company,
     Place, Relation, Footer, Date, Candidates, Linkedin, Mid,JobType } from './styles';
import Wrapper from 'components/Wrapper';
import Connections from './Connections';
import Recruiting from './Recruiting';
import Students from './Students';

interface Props {
    image?: string;
    alt?: string;
    title: string;
    promoted?: boolean;
    company?: string;
    place?: string;
    date: string;
    candidates?: string|number;
    relation?: boolean;
    recruiting?: boolean;
    students?: boolean;
    simplified?: boolean;
    jobType?:string;
}

const Item: React.FC<Props> = ({ image = '', alt = "IBM", title, promoted = false, company = "IBM", place = "Porto Alegre, BR", relation = false, date, candidates=0, recruiting = false, students = false, simplified,jobType='part-time' }) =>
    <Wrapper margin top>
        <Container>
            <Header>
                <Image><img src={image} alt={alt} /></Image>
                <Box>
                    <Icon><More /></Icon>
                    {promoted && <Promoted>آگهی شده</Promoted>}
                </Box>
            </Header>
            <Infos>
                <Title>{title}</Title>
                <Company>{company}</Company>
                <Place>{place}</Place>
                <JobType>{jobType}</JobType>
            </Infos>
            <BoxRelation>
                {relation && <Relation><Connections /></Relation>}
                {recruiting && <Relation><Recruiting /></Relation>}
                {students && <Relation><Students /></Relation>}
            </BoxRelation>
            <Footer>
                <Date>{date}</Date>
                {simplified && <Linkedin> <Mid>&middot;</Mid> <Logo /> Candidatura simplificada</Linkedin>}
                <Candidates> {candidates}{' '} &middot;</Candidates>
                <Candidates> کارجو  </Candidates> 
            </Footer>
        </Container>
    </Wrapper>

export default Item;