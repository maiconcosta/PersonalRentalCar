import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`    
    flex: 1; 
`;

export const BackToHome = styled.TouchableOpacity``;

export const CarImage = styled.Image`
    width: 100%;
    height: 225px;
`;

export const Content = styled.View`
    background-color: #F5F5F5;
    flex: 1;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin-top: -50px;
    padding: 22px;
`;

export const ContentTitle = styled.Text`
    font-family: 'Montserrat_700Bold';
    font-size: 18px;
    color: #000;
`;

export const Icons = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled.View`
    align-items: center;
    flex: 1;
    padding: 20px 10px;
`;

export const IconImage = styled.Image`
    width: 52px;
    height: 52px;
`;

export const IconTitle = styled.Text`
    font-family: 'Montserrat_400Regular';
`;

export const Value = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 18px;
    color: #005BA2;
`;

export const DateView = styled.View`
    margin-top: 20px;
`;

export const DateLabel = styled.Text`
    font-family: 'Montserrat_700Bold';
    font-size: 14px;
`;

export const DateBar = styled.View`
    background: #fff;
    height: 40px;
    border-radius: 30px;
    margin-top: 10px;
    flex-direction: row;
    padding: 10px;
    elevation: 3;
`;

export const DateInput = styled.TextInput`
    flex: 1; 
    font-family: 'Montserrat_700Bold';
    font-size: 14px; 
    margin-left: 5px;
`;

export const ReserveBtn = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background: #005BA2;
    border-radius: 30px;  
    justify-content: center;
    margin-top: 20px;
`;

export const ReserveTitle = styled.Text`
    font-family: 'Montserrat_700Bold';
    text-align: center;
    color: #fff;   
    font-size: 14px;
`;
