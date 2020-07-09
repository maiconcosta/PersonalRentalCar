import React from 'react';
import {
  FindACar,
  FindACarTitle,
  Buttons,
  CarImage,
  Container,
  Header,
  RentMyCar,
  RentMyCarTitle,
  Subtitle,
  Title,
} from './styles';

export default function Home({ navigation }) {
  return (
    <Container>
      <Header>
        <Title>Personal Rental Car</Title>
        <Subtitle>Encontre carros para alugar, ou alugue seu carro.</Subtitle>
      </Header>

      <CarImage source={require('../../assets/car.png')} />

      <Buttons>
        <FindACar onPress={() => navigation.navigate('FindACar')}>
          <FindACarTitle>Encontrar um carro</FindACarTitle>
        </FindACar>

        <RentMyCar>
          <RentMyCarTitle>Alugar meu carro</RentMyCarTitle>
        </RentMyCar>
      </Buttons>
    </Container>
  );
}
