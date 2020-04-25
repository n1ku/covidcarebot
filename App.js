import React, { useState, Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Platform,
  Dimensions } from 'react-native';
import Slider from 'react-native-slider';
import Constants from 'expo-constants';
import { 
  ThemeProvider,
  Header, 
  Button, 
  Input,
  Divider,
  Text,
  Icon,
  CheckBox } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class App extends React.Component {
  
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <ThemeProvider theme={theme}>
        <View style={styles.defaultView}>
          
          <Header 
            statusBarProps={{ barStyle: 'light-content' }}
            centerComponent={{ text: 'CoVid-CareBot', style: { color: '#fff' } }}
            containerStyle={{
              backgroundColor: '#3D6DCC',
              justifyContent: 'space-around',
            }}
          />
          
          <View style={styles.inputYearOfBirth}>
            <Input
              leftIcon={
                <Icon
                  name="user-plus"
                  type="font-awesome"
                  color="#86939e"
                  size={15}
                />
              }
              leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
              containerStyle={styles.inputContainerStyle}
              placeholder="Year of Birth"
              keyboardType="numeric"
              maxLength={4}
            />
          </View>
          <View style={styles.checkBoxStyle}>
            <Text>Gender</Text>
            <CheckBox title="Male"/>
            <CheckBox title="Female"/>
            <CheckBox title="Other"/>
            
          </View>
          

          
        </View>
        
      </ThemeProvider>
      
    );

  }
}

const theme = {
  colors: {
    default: 'red',
  },
  Header: {
    backgroundColor: 'red',
    centerComponent: {
      style:{
        color: '#2089DC',
        fontWeight: 'bold',
      }
    },
    rightComponent: {
      style:{
       /* color: '#fff', */
      }
    },
  },
  Button: {
    color: 'white',
    buttonStyle: {
      backgroundColor: '#2089DC',
    }
  },
  leftIcon: {

    leftIconContainerStyle: {
      marginRight: "20",
    }
  },
  Input: {
    containerStyle: {
      width: SCREEN_WIDTH - 50,
    },
    inputContainerStyle: {
      borderRadius: 0,
      borderWidth: 0,
      borderColor: 'rgba(110, 120, 170, 1)',
      height: 50,
      marginVertical: 10,
    }
  },
  CheckBox: {
    center: true,
    size: 20,
  }
}

const styles = StyleSheet.create({
  defaultView: {
    backgroundColor: '#ccc',
  },
  inputContainerStyle: {
    marginTop: 16,
    width: '100%',
  },
  checkBoxStyle: {
    flexDirection: 'row',
    marginVertical: 0.1,
    marginRight: 0.5,
  },
});
