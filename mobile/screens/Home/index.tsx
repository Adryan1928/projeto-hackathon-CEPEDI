import { View } from 'react-native';

import { Container, ContentContainer, HeaderContainer } from './styles';
import { Header } from '../../components/Header';

export function Home() {
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <ContentContainer>
        <View />
      </ContentContainer>
    </Container>
  );
}
