import { Platform } from "react-native";
import firebase from "react-native-firebase";
import { Notification } from "react-native-firebase/notifications";

export const firebaseNotificationListener = () => {
    const channel = new firebase.notifications.Android.Channel(
        'afterwords',
        'Afterwords Notification',
        firebase.notifications.Android.Importance.Max,
    ).setDescription('A description of the channel');
    firebase.notifications().android.createChannel(channel);
    
    return firebase
        .notifications()
        .onNotification((notification: Notification) => {
            if (Platform.OS === 'android') {
                const localNotification = new firebase.notifications.Notification()
                    .setNotificationId(notification.notificationId)
                    .setTitle(notification.title)
                    .setSubtitle(notification.subtitle!)
                    .setBody(notification.body)
                    .setData(notification.data)
                    .setSound('default')
                    .android.setChannelId('afterwords')
                    .android.setSmallIcon('ic_launcher')
                    .android.setColor('#ffffff')
                    .android.setPriority(firebase.notifications.Android.Priority.Max);

                firebase
                    .notifications()
                    .displayNotification(localNotification)
                    .catch((err) => console.error(err));
            } else if (Platform.OS === 'ios') {
                const localNotification = new firebase.notifications.Notification()
                    .setNotificationId(notification.notificationId)
                    .setTitle(notification.title)
                    .setSubtitle(notification.subtitle!)
                    .setBody(notification.body)
                    .setData(notification.data)
                    .ios.setBadge(notification.ios.badge!);

                firebase
                    .notifications()
                    .displayNotification(localNotification)
                    .catch((err) => console.error(err));
            }
        });
}