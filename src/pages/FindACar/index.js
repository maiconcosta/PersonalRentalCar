import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
    BackToHome,
    Cars,
    Car,
    CarContent,
    CarTexts,
    Container,
    Content,
    ContentTitle,
    Header,
    HeaderTitle,
    HeaderTop,
    LocationBar,
    LocationInput,
    Name,
    Photo,
    Profile,
    ProfileImg,
    Value
  } from './styles';

export default function FindACar() {
    const navigation = useNavigation(); 

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <HeaderTop>
                    <BackToHome onPress={() => handleNavigateBack()}>
                        <SimpleLineIcons name="arrow-left" size={18} color="#fff" />
                    </BackToHome>
                    <Profile>
                        <ProfileImg source={require('../../assets/man.png')} />
                    </Profile>
                </HeaderTop>

                <HeaderTitle>Encontrar um carro</HeaderTitle>
                <LocationBar>
                    <SimpleLineIcons name="location-pin" size={18} color="#005BA2" />
                    <LocationInput />
                </LocationBar>
            </Header>

            <Content>
                <ContentTitle>7 Resultados Encontrados</ContentTitle>
                <Cars>
                    <Car>
                        <Photo source={require('../../assets/fiesta.jpg')}  />
                        <CarContent>
                            <CarTexts>
                                <Name>Ford Ka Sedan 1.5</Name>
                                <Value>R$ 60,00 / dia</Value>
                            </CarTexts>                           
                            <SimpleLineIcons name="arrow-right" size={18} color="#005BA2" />
                        </CarContent>                        
                    </Car>

                    <Car>
                        <Photo source={require('../../assets/fiesta.jpg')}  />
                        <CarContent>
                            <CarTexts>
                                <Name>Ford Ka Sedan 1.5</Name>
                                <Value>R$ 60,00 / dia</Value>
                            </CarTexts>                           
                            <SimpleLineIcons name="arrow-right" size={18} color="#005BA2" />
                        </CarContent>                        
                    </Car>

                    <Car>
                        <Photo source={require('../../assets/fiesta.jpg')}  />
                        <CarContent>
                            <CarTexts>
                                <Name>Ford Ka Sedan 1.5</Name>
                                <Value>R$ 60,00 / dia</Value>
                            </CarTexts>                           
                            <SimpleLineIcons name="arrow-right" size={18} color="#005BA2" />
                        </CarContent>                        
                    </Car>

                    <Car>
                        <Photo source={require('../../assets/fiesta.jpg')}  />
                        <CarContent>
                            <CarTexts>
                                <Name>Ford Ka Sedan 1.5</Name>
                                <Value>R$ 60,00 / dia</Value>
                            </CarTexts>                           
                            <SimpleLineIcons name="arrow-right" size={18} color="#005BA2" />
                        </CarContent>                        
                    </Car>

                    <Car>
                        <Photo source={require('../../assets/fiesta.jpg')}  />
                        <CarContent>
                            <CarTexts>
                                <Name>Ford Ka Sedan 1.5</Name>
                                <Value>R$ 60,00 / dia</Value>
                            </CarTexts>                           
                            <SimpleLineIcons name="arrow-right" size={18} color="#005BA2" />
                        </CarContent>                        
                    </Car>

                    <Car>
                        <Photo source={require('../../assets/fiesta.jpg')}  />
                        <CarContent>
                            <CarTexts>
                                <Name>Ford Ka Sedan 1.5</Name>
                                <Value>R$ 60,00 / dia</Value>
                            </CarTexts>                           
                            <SimpleLineIcons name="arrow-right" size={18} color="#005BA2" />
                        </CarContent>                        
                    </Car>
                    

                </Cars>
            </Content>
        </Container>
    )
}