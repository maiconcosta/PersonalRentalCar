import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

import {
    BackToHome,
    CarImage,
    Container,
    Content,
    ContentTitle,
    DateBar,
    DateInput,
    DateLabel,
    DateView,
    Icons,
    Icon,
    IconImage,
    IconTitle,
    ReserveBtn,
    ReserveTitle,
    Value,
  } from './styles';

export default function Detail() {
    return (
       <Container>
           <CarImage source={require('../../assets/fiesta.jpg')}  />

           <Content>
               <ContentTitle>Fiesta Class 1.6 Hatch</ContentTitle>
               <Icons>
                   <Icon>
                       <IconImage source={require('../../assets/drive.png')} />
                       <IconTitle>Manual</IconTitle>
                   </Icon>

                   <Icon>
                       <IconImage source={require('../../assets/air-purifier.png')} />
                       <IconTitle>Ar Cond.</IconTitle>
                   </Icon>

                   <Icon>
                       <IconImage source={require('../../assets/seatbelt.png')} />
                       <IconTitle>5 Lugares</IconTitle>
                   </Icon>
               </Icons>
               <Value>R$ 60,00 / dia</Value>

                <DateView>
                    <DateLabel>Data e hora da retirada:</DateLabel>
                    <DateBar>
                        <SimpleLineIcons name="calendar" size={18} color="#005BA2" />
                        <DateInput></DateInput>
                    </DateBar>                    
                </DateView>

                <DateView>
                    <DateLabel>Data e hora da entrega:</DateLabel>
                    <DateBar>
                        <SimpleLineIcons name="calendar" size={18} color="#005BA2" />
                        <DateInput></DateInput>
                    </DateBar>
                    
                </DateView>

                <ReserveBtn>
                    <ReserveTitle>Reservar</ReserveTitle>
                </ReserveBtn>
              

           </Content>
       </Container>
    )
}