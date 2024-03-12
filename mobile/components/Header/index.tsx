import { Image } from 'expo-image';
import { View } from 'react-native';

import { Container, TitleBold, TitleContainer, TitleRegular } from './styles';

export function Header() {
  return (
    <Container>
      <TitleContainer>
        <TitleRegular>Bem vindo</TitleRegular>
        <TitleBold>Adryan</TitleBold>
      </TitleContainer>

      {/* <View style={{ width: 50, height: 50, borderRadius: 25 }}>
        <Image source={require('../../assets/profile-photo.jpeg')} />
      </View> */}
    </Container>
  );
}
