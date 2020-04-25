import React, { useState, Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Platform,
  Dimensions, 
  ScrollView
} from 'react-native';
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
  CheckBox 
} from 'react-native-elements';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { render } from 'react-dom';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function App() {
  //#region Hook inports
  //#region font import see: ./assets/fonts
  let [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    'Inter-BlackItalic': require('./assets/fonts/Inter-BlackItalic.otf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.otf'),
    'Inter-ExtraBoldItalic': require('./assets/fonts/Inter-ExtraBoldItalic.otf'),
    'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.otf'),
    'Inter-Italic': require('./assets/fonts/Inter-Italic.otf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.otf'),
    'Inter-LightItalic': require('./assets/fonts/Inter-LightItalic.otf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.otf'),
    'Inter-MediumItalic': require('./assets/fonts/Inter-MediumItalic.otf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.otf'),
    'Inter-SemiBoldItalic': require('./assets/fonts/Inter-SemiBoldItalic.otf'),
    'Inter-Thin': require('./assets/fonts/Inter-Thin.otf'),
    'Inter-ThinItalic': require('./assets/fonts/Inter-ThinItalic.otf'),
    'Inter-V': require('./assets/fonts/Inter-V.otf'),
  });
  //#endregion
  //#region States
  // useState Hook from Compononents
  let [gender, setGenderState] = useState({
    checkedGenderMale: false,
    checkedGenderFemale: false,
    checkedGenderOther: false,
  });
  let [covidRslt, setCovidRsltState] = useState({
    checkedPositive: false,
    checkedNegative: false,
    checkedNotTested: false,
  });
  let [smoker, setSmokerState] = useState({
    checkedYes: false,
    checkedNo: false,
  });
  let [chronicIllnes, setChronicIllnesState] = useState({
    checkedYes: false,
    checkedNo: false,
  });
  let [showSymtopms, setShowSymtopms] = useState({
    show: false,
  })
  ////#endregion
  //#endregion

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      //#region UI components
      <ThemeProvider theme={theme}>
        <ScrollView style={styles.defaultView}>
          
          <Header 
            statusBarProps={{ barStyle: 'light-content' }}
            centerComponent={{ text: 'CoVid-CareBot', style: { color: '#fff' } }}
            containerStyle={{
              backgroundColor: '#3D6DCC',
              justifyContent: 'space-around',
            }}
          />
          
          <View style={styles.inputYearOfBirth}>
            <Text h4>Year of Birth</Text>
            <Input
              leftIcon={
                <Icon name="user-plus"/>
              }
              leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
              containerStyle={styles.inputContainerStyle}
              placeholder="Year"
              keyboardType="numeric"
              maxLength={4}
            />
          </View>
          <View>
            <Text h4>Gender</Text>
            <View style={styles.checkBoxStyle}>
            
              { /*<Icon name="venus-mars" style={styles.genderIcon}/> */}
              <CheckBox 
                title="Male"
                checked={gender.checkedGenderMale}
                onPress={() => setGenderState({checkedGenderMale: !gender.checkedGenderMale})}/>
              <CheckBox 
                title="Female"
                checked={gender.checkedGenderFemale}
                onPress={() => setGenderState({checkedGenderFemale: !gender.checkedGenderFemale})}/>
              <CheckBox 
                title="Other"
                checked={gender.checkedGenderOther}
                onPress={() => setGenderState({checkedGenderOther: !gender.checkedGenderOther})}/>
            </View>
            <Divider/>
          </View>

          <View style={styles.inputYearOfBirth}>
            <Text h4>ZIP Code</Text>
            <Input
              leftIcon={
                <Icon name="compass"/>
              }
              leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
              containerStyle={styles.inputContainerStyle}
              placeholder="ZIP Code"
              keyboardType="numeric"
              maxLength={4}
            />
          </View>
          <View style={styles.houseHold}>
          <Text h4>Size of your houshold</Text>
            <Input
              leftIcon={
                <Icon name="sort-numeric-asc"/>
              }
              leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
              containerStyle={styles.inputContainerStyle}
              placeholder="Size"
              keyboardType="numeric"
              maxLength={4}
            />
          </View>
          <View style={styles.testResultCovid}>
              <Text h4>What is your tet result on CoVid-19?</Text>
              <View style={styles.checkBoxStyle}>
                <CheckBox 
                  title="Positive"
                  checked={covidRslt.checkedPositive}
                  onPress={() => setCovidRsltState({checkedPositive: !covidRslt.checkedPositive})}/>
                <CheckBox 
                  title="Negativ"
                  checked={covidRslt.checkedNegative}
                  onPress={() => setCovidRsltState({checkedNegative: !covidRslt.checkedNegative})}/>
                <CheckBox 
                  title="Not tested"
                  checked={covidRslt.checkedNotTested}
                  onPress={() => setCovidRsltState({checkedNotTested: !covidRslt.checkedNotTested})}/>
              </View>
              <Divider/>
          </View>
          <View style={styles.testResultCovid}>
              <Text h4>Have you had contact with someone who has been diagnosed with COVID-19 during the last 14 days?</Text>
              <View style={styles.checkBoxStyle}>
                <CheckBox title="Yes"/>
                <CheckBox title="I think so"/>
                <CheckBox title="No"/>
                <CheckBox title="I don't know"/>
              </View>
              <Divider/>
          </View>
          <View style={styles.testResultCovid}>
              <Text h4>Do you smoke or vape?</Text>
              <View style={styles.checkBoxStyle}>
                <CheckBox 
                  title="Yes"
                  checked={smoker.checkedYes}
                  onPress={() => setSmokerState({checkedYes: !smoker.checkedYes})}/>
                <CheckBox 
                  title="No"
                  checked={smoker.checkedNo}
                  onPress={() => setSmokerState({checkedNo: !smoker.checkedNo})}/>
              </View>
              <Divider/>
          </View>
          <View style={styles.testResultCovid}>
              <Text h4>Do you suffer from a chronic illness or other illness?</Text>
              <View style={styles.checkBoxStyle}>
                <CheckBox 
                  title="Yes"
                  checked={chronicIllnes.checkedYes}
                  onPress={() => { 
                    setChronicIllnesState({checkedYes: !chronicIllnes.checkedYes}); 
                    setShowSymtopms({show: !showSymtopms.show})
                  }}
                />
                <CheckBox 
                  title="No"
                  checked={chronicIllnes.checkedNo}
                  onPress={() => { 
                    setChronicIllnesState({checkedNo: !chronicIllnes.checkedNo}); 
                    setShowSymtopms({show: false})
                  }}
                />
              </View>
              <Divider/>
          </View>
          {
            // conditional view display, if chronic illnes is checked with yes it will display
            // for all other options it don't
            showSymtopms.show === true ?
            <View style={styles.symptopmsList}>
                <Text h4>Which of the following symptoms do you have?</Text>
                <View style={styles.checkBoxStyle2}>
                  <CheckBox title="Fever"/>
                  <CheckBox title="Cough"/>
                  <CheckBox title="Shortness of Breath"/>
                  <CheckBox title="Muscle ache"/>
                  <CheckBox title="Sore Throat"/>
                  <CheckBox title="Headache"/>
                  <CheckBox title="Chest Pain"/>
                  <CheckBox title="Loss of sense of taste"/>
                  <CheckBox title="Chest Pain"/>
                </View>
                <Divider/> 
            
            </View> : null
          }
          <View style={styles.inputYearOfBirth}>
            <Text h4>How many people in your houshold do not have access to the survey?</Text>
            <Input
              leftIcon={
                <Icon name="sort-numeric-asc"/>
              }
              leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
              containerStyle={styles.inputContainerStyle}
              placeholder="Quantity"
              keyboardType="numeric"
              maxLength={2}
            />
          </View>



        </ScrollView>        
      </ThemeProvider>
      //#endregion
    );
  }
}

//#region custom functions



//#endregion
const showSymptomList = {

}
//#region Theme style definitions
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
        fontFamily: 'Inter-Bold',
        fontSize: 20,
      }
    },
    rightComponent: {
      style:{
       /* color: '#fff', */
      }
    },
  },
  Text: {
      h4Style:{
        fontSize: 20,
        fontFamily: 'Inter-Light',
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,
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
      marginRight: "15",
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
      marginTop: 5,
      width: '100%',
    }
  },
  CheckBox: {
    center: true,
    size: 20,
    height: 50,
  },
  Icon: {
    type: "font-awesome",
    color: "#86939e",
    size: 25,
  },
  Divider: {
    style: {
      width: '94%',
      marginLeft: '2.5%',
      backgroundColor: 'rgb(110, 120, 170)'
    }
  },
}
//#endregion

//#region StyleSheet definitions
const styles = StyleSheet.create({
  defaultView: {
    backgroundColor: '#fff',

  },
  inputContainerStyle: {
    marginTop: 0,
    width: '100%',
  },
  checkBoxStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 0.1,
    marginRight: 0.5,
    marginBottom: 5,
    marginTop: 10,
    width: '100%',
  },
  checkBoxStyle2: {
    flexDirection: 'row',
    alignItems: "flex-end",
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginVertical: 0.1,
    marginRight: 0.5,
    marginTop: 10,
    marginBottom: 5,
  },
  genderIcon: {
    margin: 10,
  },
});
//#endregion