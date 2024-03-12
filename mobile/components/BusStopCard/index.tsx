import {
  Container,
  InfoContainer,
  LocationCaption,
  LocationContainer,
  LocationTitle,
  WaitlistHeader,
} from './styles';

export function BusStopCard() {
  return (
    <Container>
      <InfoContainer>
        <WaitlistHeader>Pessoas em espera: 23/60</WaitlistHeader>
        <LocationContainer>
          <LocationTitle>Rua Fernando de Castro, às 7:00</LocationTitle>
          <LocationCaption>chegada</LocationCaption>
        </LocationContainer>

        <LocationContainer>
          <LocationTitle>Rua Dr. Arnaldo, às 8:30</LocationTitle>
          <LocationCaption>saída</LocationCaption>
        </LocationContainer>
      </InfoContainer>
    </Container>
  );
}
