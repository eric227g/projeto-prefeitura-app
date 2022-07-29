import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from 'pages/header';
import { View, Image } from 'react-native';
import { RootStackParamList } from 'routes/types';
import {
  Manut_Vias,
  Manut_Parque,
  Energia,
  Anvisa,
  Ideia,
  Water,
  Sugestao,
  StyleText,
  StyleTextLeft,
  ImageHome,
  ViewContainer,
  ViewButtons,
} from './style';

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <>
    <View>
      <Header report="Tela de Relatos" welcome="Bem vindo, Gabriel" />
    </View>
    <ViewContainer>
      <ViewButtons>
        <Manut_Vias onPress={() => navigation.navigate('ScreenRelato')}>
          <ImageHome source={require('../../imagens/buraco.png')} />
          <StyleText>Manut. em Vias</StyleText>
        </Manut_Vias>

        <Manut_Parque onPress={() => navigation.navigate('ScreenRelato')}>
          <ImageHome source={require('../../imagens/parque.png')} />
          <StyleText>Manut. em parques</StyleText>
        </Manut_Parque>

        <Energia onPress={() => navigation.navigate('ScreenRelato')}>
          <ImageHome source={require('../../imagens/energia.png')} />
          <StyleTextLeft>Falta de energia</StyleTextLeft>
        </Energia>

        <Anvisa onPress={() => navigation.navigate('ScreenRelato')}>
          <ImageHome source={require('../../imagens/Vigilancia.png')} />
          <StyleText>Vigilancia sanitaria</StyleText>
        </Anvisa>

        <Water onPress={() => navigation.navigate('ScreenRelato')}>
          <ImageHome source={require('../../imagens/agua.png')} />
          <StyleTextLeft>Falta de água</StyleTextLeft>
        </Water>

        <Ideia onPress={() => navigation.navigate('SugestaoScreen')}>
          <ImageHome source={require('../../imagens/ideia.png')} />
          <Sugestao>Sugestões</Sugestao>
        </Ideia>
      </ViewButtons>
    </ViewContainer>
    </>

  );
}
