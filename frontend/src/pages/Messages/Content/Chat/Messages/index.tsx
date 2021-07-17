import React from 'react';
import Container from './styles';
import Day from './Day';
import Message from './Message';
import MyMessage from './MyMessage';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';

const Messages: React.FC = () => {
  
  const profileState = useSelector((state:AppState)=>state.profile.dashboard);

  return(
  <Container>
    {/* <Profile /> */}
    <Message
      image="https://media-exp1.licdn.com/dms/image/C4E03AQGArBZoTlAL5Q/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=8TgATuNtdQS00Pg0e5Ci1l7QOrwLHp1y0UlaOYPlq5I"
      name="Christy Hauschild Schott"
      time="16:27"
      content={(
        <span role="img" aria-label="smile emoji">
          Shoow! Muito obrigado Ada, a honra é toda minha 😁
          <br />
          <br />
          No que eu puder ajudar é só chamar, abração!
        </span>
            )}
    />
    <Day day=" هفته ی گذشته" />
    <Message
      image="https://media-exp1.licdn.com/dms/image/C4E03AQGY6yMDkDP1ng/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=7bBgbv04teMUzBLeja1x73Znh3V4uJ7ir5IyX_XG7cU"
      name="نام مخاطب"
      time="14:22"
      content={(
        <span>
          Olá Christy!
          <br />
          Seja bem-vindo à minha rede!
          <br />
          Obrigado por ter me adicionado!
          <br />
          Abraços
        </span>
            )}
    />
    <MyMessage
      image={profileState.user_avatar}
      name="خودم"
      time="16:27"
      content={(
        <span role="img" aria-label="smile emoji">
          Shoow! Muito obrigado Ada, a honra é toda minha 😁
          <br />
          <br />
          No que eu puder ajudar é só chamar, abração!
        </span>
            )}
    />
    <Day day="دیروز" />
    <Message
      image={profileState.user_avatar}
      name="Ada Lovelace"
      time="21:22"
      content={(
        <span>
          Obrigado, Christy!
        </span>
            )}
    />
  </Container>
  )
      };

export default Messages;
