import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
    background-color: #F5F5F5;
    flex: 1;
 
`;

export const Header = styled.View`
    background: #00B628;
    height: 150px;
    padding: 22px;
    padding-top: ${Constants.statusBarHeight}px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`;

export const HeaderTitle = styled.Text`
    font-family: 'Montserrat_700Bold';
    font-size: 18px;
    color: #fff;
`;