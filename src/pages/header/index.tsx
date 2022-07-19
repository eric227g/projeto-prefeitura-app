import {
  Info,
  HeaderContainer,
  Walcome,
  Report,
  ImageLogo
} from '../home/style';
import { Image } from 'react-native';

export function Header({report, walcome}: {report: string, walcome?: string}) {
  return(
    <>
      <HeaderContainer>
          <ImageLogo source={require('../../imagens/logoteste.png')} />
          <Info>Cidadão informa</Info>
          <Walcome>{walcome}</Walcome>
          <Report>{report}</Report>
      </HeaderContainer>
    </>
  )
}
