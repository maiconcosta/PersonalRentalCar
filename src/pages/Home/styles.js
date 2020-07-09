import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
        background-color: #F5F5F5;
        flex: 1;
        padding: 22px;
        padding-top: ${Constants.statusBarHeight}px; 
        justify-content: space-between;    
`;

export const Title = styled.Text`
    font-family: 'Montserrat_700Bold';
    font-size: 36px;
    color: #00B628;  
    width: 75%;
`;

export const Subtitle = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 18px;
    color: #000;
    width: 75%;
    margin-top: 30px;
`;

export const CarImage = styled.Image`
    width: 100%;
    height: 196px;
`;

export const Header = styled.View`    
    
`;

export const Buttons = styled.View`    
    
`;

export const FindACar = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background: #00B628;
    border-radius: 30px;  
    justify-content: center;
`;
export const RentMyCar = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    border: 2px solid #00B628;
    border-radius: 30px;
    justify-content: center;
    margin-top: 10px;
`;

export const FindACarTitle = styled.Text`
    font-family: 'Montserrat_700Bold';
    text-align: center;
    color: #fff;   
    font-size: 14px;
`;
export const RentMyCarTitle = styled.Text`
    font-family: 'Montserrat_700Bold';
    text-align: center;
    color: #00B628;  
    font-size: 14px;
`;