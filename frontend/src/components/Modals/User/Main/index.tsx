import React from 'react';

import { Container, Exit } from './styles';
import List from './List';
import { Link } from 'react-router-dom';

const Main: React.FC = () => (
    <Container>
        <List title="پروفایل">
            <li>خرید اشتراک ویژه</li>
            <li>پست ها و فعالیت ها</li>
        </List>
        <List title="تنظیمات">
            <li>حریم خصوصی</li>
            <li>راهنما</li>
            <Link to="/"><Exit>خروج</Exit></Link>

        </List>
    </Container>
);

export default Main;
