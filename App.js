import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Platform,
  Dimensions, 
  ScrollView,
  Alert,
  Keyboard
} from 'react-native';
import Slider from 'react-native-slider';
import Constants from 'expo-constants';
import { 
  ThemeProvider,
  Header,  
  Input,
  Divider,
  Text,
  Icon,
  CheckBox,
  Button 
} from 'react-native-elements';
import { useFonts } from '@use-expo/font';
import { AppLoading, Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const localNotification = {
  title: 'done',
  body: 'done!'
};

const onSubmit = text => {
  Keyboard.dismiss();
  const schedulingOptions = {
    time: new Date().getTime() + Number(text),
  };
  // Notifications show only when app is not active.
  // (ie. another app being used or device's screen is locked)
  Notifications.scheduleLocalNotificationAsync(
    localNotification,
    schedulingOptions,
  );
};
  handleNotification = () => {
  console.warn('ok! got your notif');
};

const askNotification = async () => {
  // We need to ask for Notification permissions for ios devices
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (Constants.isDevice && status === 'granted')
    console.log('Notification permissions granted.');
};

const TimerNotification = () => {
  useEffect(() => {
    askNotification();
    // If we want to do something with the notification when the app
    // is active, we need to listen to notification events and
    // handle them in a callback
    const listener = Notifications.addListener(handleNotification);
    return () => listener.remove();
  }, []);

  return <Input onChangeText={onSubmit} label="time in ms" />;
};


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
  //#region Hooks
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
  let [hadContact, setHadContact] = useState({
    checkedYes: false,
    checkedNo: false,
    checkedThinkSo: false,
    checkedDontThinkSo: false,
  })
  let [sFever, setFever] = useState({
    fever: false,
  })
  let [sCough, setCough] = useState({
    cough: false,
  })
  let [sShortBreath, setShortBreath] = useState({
    shortBreath: false,
  })
  let [sMuscleAche, setMuscleAche] = useState({
    muscleAche: false,
  })
  let [sSoreThroat, setSoreThroat] = useState({
    soreThroat: false,
  })
  let [sHeadache, setHeadache] = useState({
    headache: false,
  })
  let [sChestPain, setChestPain] = useState({
    chestPain: false,
  })
  let [sLossOfSmell, setLossOfSmell] = useState({
    lossOfSmell: false,
  })
    //#endregion
  
  //#endregion
  TimerNotification();
  onSubmit();
  //#region Notification implementation



 
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
              maxLength={2}
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
                <CheckBox 
                  title="Yes"
                  checked={hadContact.checkedYes}
                  onPress={() => setHadContact({checkedYes: !hadContact.checkedYes})}/>
                <CheckBox 
                  title="I think so"
                  checked={hadContact.checkedThinkSo}
                  onPress={() => setHadContact({checkedThinkSo: !hadContact.checkedThinkSo})}/>
                <CheckBox 
                  title="No"
                  checked={hadContact.checkedNo}
                  onPress={() => setHadContact({checkedNo: !hadContact.checkedNo})}/>
                <CheckBox 
                  title="I don't know"
                  checked={hadContact.checkedDontThinkSo}
                  onPress={() => setHadContact({checkedDontThinkSo: !hadContact.checkedDontThinkSo})}/>
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
                  <CheckBox 
                    title="Fever"
                    checked={sFever.fever}
                    onPress={() => {
                      setFever({fever: !sFever.fever})
                    }}/>
                  <CheckBox 
                    title="Cough"
                    checked={sCough.cough}
                    onPress={() => {
                      setCough({cough: !sCough.cough})
                    }}/>
                  <CheckBox 
                    title="Shortness of Breath"
                    checked={sShortBreath.shortBreath}
                    onPress={() => {
                      setShortBreath({shortBreath: !sShortBreath.shortBreath})
                    }}/>
                  <CheckBox 
                    title="Muscle ache"
                    checked={sMuscleAche.muscleAche}
                    onPress={() => {
                      setMuscleAche({muscleAche: !sMuscleAche.muscleAche})
                    }}/>
                  <CheckBox 
                    title="Sore Throat"
                    checked={sSoreThroat.soreThroat}
                    onPress={() => {
                      setSoreThroat({soreThroat: !sSoreThroat.soreThroat})
                    }}/>
                  <CheckBox 
                    title="Headache"
                    checked={sHeadache.headache}
                    onPress={() => {
                      setHeadache({headache: !sHeadache.headache})
                    }}/>
                  <CheckBox 
                    title="Chest Pain"
                    checked={sChestPain.chestPain}
                    onPress={() => {
                      setChestPain({chestPain: !sChestPain.chestPain})
                    }}/>
                  <CheckBox 
                    title="Loss of sense of taste"
                    checked={sLossOfSmell.lossOfSmell}
                    onPress={() => {
                      setLossOfSmell({lossOfSmell: !sLossOfSmell.lossOfSmell})
                    }}/>
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
        <View>
          <Button 
            icon={
              <Icon
                name="heartbeat"
                size={15}
                iconLeft
                color="white"
                iconStyle={{
                  marginRight: 20
                }}
                />
            }
            title="Submit"
            onPress={() => {
              Alert.alert("Thank you!")
            }}
          />
        </View>
      </ThemeProvider>
      //#endregion
    );
  }
}

//#region Theme style definitions
const theme = {
  colors: {
    default: 'red',
  },
  Header: {
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
        fontFamily: 'Inter-ExtraLight',
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
    fontFamily: 'Inter-ExtraLight',
    containerStyle: {
      backgroundColor: 'white',
      borderColor: 'white',
    }
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
      backgroundColor: 'rgb(110, 120, 170)',
      height: 0.75,
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