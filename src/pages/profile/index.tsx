import { View, Text } from 'react-native';
import {BackgroundPurple,
BackgroundBlue,
Prefile,
Photo,
Name,
Button,
Sair,
Icon
} from './styles'
import { SignOut } from 'phosphor-react-native';
import InfoProfile from 'pages/infoProfile';

export default function Profile() {
  return (
    <>
      <View>
        <BackgroundPurple source={require('../../imagens/Purple.png')} />
        <BackgroundBlue source={require('../../imagens/Blue.png')} />
        <Prefile>Perfil</Prefile>
        <Photo />
        <Name> Gabriel Poyer </Name>
      </View>
      <InfoProfile nameUser='anonimo' firstName='gabriel' secundName='poyer' birthDate='15/05/1999'  />
      <Button>
          <Sair>Sair</Sair>
          <Icon><SignOut color='#465EFF' /></Icon>
      </Button>
    </>
  );
}
