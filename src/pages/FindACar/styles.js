import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
    background-color: #F5F5F5;
    flex: 1;
 
`;

export const Header = styled.View`
    background: #005BA2;
    height: 160px;
    padding: 22px;
    padding-top: ${Constants.statusBarHeight}px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    justify-content: space-between;
`;

export const HeaderTop = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BackToHome = styled.TouchableOpacity`
   
`;

export const Profile = styled.TouchableOpacity`
   
`;

export const ProfileImg = styled.Image`
    width: 42px;
    height: 42px;
   
`;

export const HeaderTitle = styled.Text`
    font-family: 'Montserrat_700Bold';
    font-size: 18px;
    color: #fff;
`;

export const LocationBar = styled.View`
    background: #fff;
    height: 40px;
    border-radius: 30px;
    margin-top: 10px;
    flex-direction: row;
    padding: 10px;
    elevation: 3;
`;

export const LocationInput = styled.TextInput`
    flex: 1; 
    font-family: 'Montserrat_700Bold';
    font-size: 14px; 
    margin-left: 5px;
`;

export const Content = styled.View`
    padding: 22px;
    flex: 1;
`;


export const ContentTitle = styled.Text`
    font-family: 'Montserrat_700Bold';
    font-size: 14px;
    color: #000;
`;

export const Cars = styled.ScrollView`
    margin-top: 22px;
`;

export const Car = styled.TouchableOpacity`
    width: 100%;
    height: 200px;
    background: #fff;
    border-radius: 40px;
    margin-bottom: 22px;  
    elevation: 4;
`;

export const Photo = styled.Image`
    width: 100%;
    height: 140px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

`;

export const CarContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
`;

export const CarTexts = styled.View`

`;

export const Name = styled.Text`
    font-family: 'Montserrat_700Bold';
    font-size: 14px;
    color: #000;
`;

export const Value = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 12px;
    color: #005BA2;
`; 