import { Component } from 'react';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';


const categories = [
    {
        actionId: 'userWellness',
        button: {
            submitButtonTitle:'Good',
            placeholder:'good',
        },
        buttonTitle:'Good',
        isDestructive: false,
        isAuthenticationRequired: false,
        button: {
            submitButtonTitle: 'Bad',
            placeholder: 'bad',
        },
        buttonTitle:'Bad',
        isDestructive: false,
        isAuthenticationRequired: false,
    },
    {
        actionId: 'dailyCheckup',
        buttonTitle:'Check-up',
        isDestructive: false,
        isAuthenticationRequired: false,
    }
];

export class NotificationWrapper {

    ERROR_DENIED = { code:-1, msg:"Access denied." };
    SUCCESS = { code:0, msg:"OK" };
1
    _Notifications = Notifications; // ?



    static addListener = Notifications.addListener;
    static push = Notifications.presentLocalNotificationAsync;

    static async init (){

        // permissions
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== 'granted'){
            alert("Notification permissions denied.");
            return Notification.ERROR_DENIED;
        }

        // notification channels/categories
        //console.log(categories);
        
        await Notifications.createCategoryAsync('notifyUser', [
            {
                actionId: 'good',
                button: {
                    submitButtonTitle:'Good',
                    placeholder:'good',
                },
                buttonTitle:'Good',
                isDestructive: false,
                isAuthenticationRequired: false,
                button: {
                    submitButtonTitle: 'Bad',
                    placeholder: 'bad',
                },
                buttonTitle:'Bad',
                isDestructive: false,
                isAuthenticationRequired: false,
            },
        ]);
        /*
       await Notifications.createCategoryAsync('notifyUser', [
        {
            actionId: 'userWellness',
            button: {
                submitButtonTitle:'Good',
                placeholder:'good',
            },
            buttonTitle:'Good',
            isDestructive: false,
            isAuthenticationRequired: false,
            button: {
                submitButtonTitle: 'Bad',
                placeholder: 'bad',
            },
            buttonTitle:'Bad',
            isDestructive: false,
            isAuthenticationRequired: false,
        }
       ]); */
    }



    /* push the notification async
    https://docs.expo.io/versions/latest/sdk/notifications/#arguments-2
    */ 
    static async pushNotification(notification, schedule){ // schedule?
        if (typeof notification == "undefined"){
            if (typeof this.notification == "undefined"){
                throw "No notification is given to push.";
            } else {
                notification = this.notification;
            }
        }
        dummyNotification.categoryId = 'good';
        return await Notifications.presentLocalNotificationAsync(dummyNotification);
    }


}

export class InitNotification extends Component {
        static inti(){}
        componentDidMount(){
            NotificationWrapper.init();
            
            /* this.notificationSubscriber = */
            NotificationWrapper.addListener(this.onNotificationPress);
            let dummyNotification = {
                title:"Good afternoon, Mr.Nobody",
                body:"How are you feeling today?",
                categoryId:"notifyUser", // see lib/notifications.js
            }
            NotificationWrapper.push(dummyNotification);
        }

        async onNotificationPress(notification){
            console.log(notification);
            Vibration.vibrate();
            Alert.alert("test");
        //Notification.setState({notification:notification})
        }
    
}