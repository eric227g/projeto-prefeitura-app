import { Info, HeaderContainer, Walcome, Report, ImageLogo, ViewContainer } from '../home/style';
import { Image, View } from 'react-native';

export function Header({ report, welcome }: { report: string; welcome?: string }) {
  return (
    <>
      <ViewContainer>
        <View>
          <HeaderContainer>
            <ImageLogo source={require('../../imagens/logoteste.png')} />
            <Info>Cidadão informa</Info>
            <Walcome>{welcome}</Walcome>
            <Report>{report}</Report>
          </HeaderContainer>
        </View>
      </ViewContainer>
    </>
  );
}
