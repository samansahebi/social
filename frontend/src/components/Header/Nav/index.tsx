import React, { useState, MouseEvent, useEffect } from 'react';
import { ReactComponent as ReactHome } from 'assets/home.svg';
import { ReactComponent as ReactNetwork } from 'assets/network.svg';
import { ReactComponent as ReactJobs } from 'assets/jobs.svg';
import { ReactComponent as ReactMessages } from 'assets/messages.svg';
import { ReactComponent as ReactNotifications } from 'assets/notifications.svg';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { ModalProvider } from 'styled-react-modal';
import User from 'components/Modals/User';
import Solutions from 'components/Modals/Solutions';
import Item from './Item';
import {
  Container, NavMain, ModalUser, ModalBackground, ModalSolution, 
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { profileInfo } from 'redux/actions/profile';
import { AppState } from 'redux/store';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSolution, setIsOpenSolution] = useState(false);
  const [notification, setNotification] = useState<any[]>([]);

  const [active, setActive] = useState<number>(1);
  const profileState = useSelector((state:AppState)=>state.profile.dashboard);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(profileInfo())
  },[dispatch])
  function toggleModal(event: MouseEvent) {
    event.preventDefault();
    setIsOpen(!isOpen);
    setActive(6);
  }

  function toggleModalSolution(event: MouseEvent) {
    event.preventDefault();
    setIsOpenSolution(!isOpenSolution);
  }

  return (
    <Container>
      <ModalProvider backgroundComponent={ModalBackground}>
        <NavMain active={active} notification={notification}>
          <Item path="/dashboard" icon={<ReactHome />} text="خانه" onClick={() => setActive(1)} />
          <Item notification path="/network" icon={<ReactNetwork />} text="ارتباطات" onClick={() => { setActive(2); setNotification([...notification, 2]); }} />
          <Item path="/jobs" icon={<ReactJobs />} text="مشاغل" onClick={() => setActive(3)} />
          <Item path="/messages" icon={<ReactMessages />} text="پیام ها" onClick={() => setActive(4)} />
          <Item notification path="/notifications" icon={<ReactNotifications />} text="رویدادها" onClick={() => { setActive(5); setNotification([...notification, 5]); }} />
          <Item icon={<img src={profileState.user_avatar} alt="" />} text="پروفایل" drop onClick={toggleModal} />
          <Item icon={<BsFillGrid3X3GapFill size={18} />} text="منو" drop onClick={toggleModalSolution} />
        </NavMain>
        <ModalUser isOpen={isOpen} onBackgroundClick={toggleModal}>
          <User/>
        </ModalUser>
        <ModalProvider>
          <ModalSolution isOpen={isOpenSolution} onBackgroundClick={toggleModalSolution}>
            <Solutions toggleModal={() => setIsOpenSolution(false)} />
          </ModalSolution>
        </ModalProvider>
      </ModalProvider>
    </Container>
  );
};

export default Nav;
