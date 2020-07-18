import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function Search() {
  return (
    <GooglePlacesAutocomplete
      placeholder="Digite uma localização"
      onPress={(data, details = null) => {
        console.log(data, details);
        alert(details.formatted_address);
      }}
      minLength={1}
      query={{
        key: 'AIzaSyAp9dSecS0_vHSUm2Lan1BLfkgjmpVGWLo',
        language: 'pt',
        region: 'BR',
      }}
      fetchDetails
      enablePoweredByContainer={false}
      textInputProps={{
        autoCapitalize: 'none',
        autoCorrect: false,
      }}
      styles={{
        textInputContainer: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          borderBottomWidth: 0,
          fontFamily: 'Montserrat_700Bold',
          height: 35              
        },
        textInput: {
          borderRadius: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 5,
          paddingRight: 5,
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          fontSize: 14,
          height: 35,       
          backgroundColor: 'transparent',
          fontFamily: 'Montserrat_700Bold'
        },
        listView: {
          backgroundColor: 'transparent',
          zIndex: 1,      
          height: 150,
        },
        description: {
          fontFamily: 'Montserrat_700Bold',
        },
        row: {
          height: 50,
          alignItems: 'center',
        },
      }}
    />
  );
}
