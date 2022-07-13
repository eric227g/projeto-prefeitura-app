import { Header } from 'pages/header';
import { View, Image } from 'react-native';
import { Manut_Vias, Manut_Parque, Energia, Anvisa, Ideia, Water, Sugestao, StyleText, StyleTextLeft } from './style';

export default function Home() {
  return (
    <View>
      <Header report="Tela de Relatos" walcome="Bem vindo, Gabriel" />
      <View>
        <Manut_Vias>
          <Image source={require('../../imagens/buraco.png')} />
          <StyleTextLeft>Manut. em vias</StyleTextLeft>
        </Manut_Vias>

        <Manut_Parque>
          <Image source={require('../../imagens/parque.png')} />
          <StyleText>Manut. em parques</StyleText>
        </Manut_Parque>

        <Energia>
          <Image source={require('../../imagens/energia.png')} />
          <StyleTextLeft>Falta de energia</StyleTextLeft>
        </Energia>

        <Anvisa>
          <Image source={require('../../imagens/Vigilancia.png')} />
          <StyleText>Vigilancia sanitaria</StyleText>
        </Anvisa>

        <Water>
          <Image source={require('../../imagens/agua.png')} />
          <StyleTextLeft>Falta de água</StyleTextLeft>
        </Water>

        <Ideia>
          <Image source={require('../../imagens/ideia.png')} />
          <Sugestao>Sugestões</Sugestao>
        </Ideia>
      </View>
    </View>
  );
}
