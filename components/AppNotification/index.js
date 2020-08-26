import React from 'react';
import { connect } from 'react-redux';
import { Button, View, AsyncStorage } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

const NOTIFICATION_KEY = 'Notification'

class AppNotification extends React.Component {

    componentDidMount() {

    }

    createNotification() {
        return {
            title: 'Log your stats!',
            body: "👋 don't forget to log your stats for today!",
            ios: {
                sound: true,
            },
            android: {
                sound: true,
                priority: 'high',
                sticky: false,
                vibrate: true,
            }
        }
    }

    clearLocalNotification() {
        return AsyncStorage.removeItem(NOTIFICATION_KEY)
            .then(Notifications.cancelAllScheduledNotificationsAsync)
    }

    setLocalNotification() {
        AsyncStorage.getItem(NOTIFICATION_KEY)
            .then(JSON.parse)
            .then((data) => {
                if (data === null) {
                    Permissions.askAsync(Permissions.NOTIFICATIONS)
                        .then(({ status }) => {
                            if (status === 'granted') {
                                Notifications.cancelAllScheduledNotificationsAsync()

                                // && new Date().getHours() <= 18
                                if (!this.props.areAnyDecksCompleted) {
                                    console.log(1)
                                    Notifications.presentNotificationAsync({
                                        content: {
                                            title: "Let's take a quiz !",
                                            body: "👋 You didn't take any quiz today",
                                            data: { data: "goes here" },
                                        },
                                    });
                                }



                                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                            }
                        })
                }
            })
    }

    render() {
        return <Button title="2-Button Alert" onPress={this.setLocalNotification} />
    }
}

function mapsStateToProps(state) {
    return {
        areAnyDecksCompleted: state.decks.some(deck => deck.isCompleted)
    }
}

export default connect(mapsStateToProps)(AppNotification)