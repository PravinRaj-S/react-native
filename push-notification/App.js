import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    requestPermissions();

    const configurePushNotifications = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;

      if (status !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }

      // ✅ FIX: Await the token
      const pushTokenData = await Notifications.getExpoPushTokenAsync();
      console.log("Push token:", pushTokenData.data); // use .data to get the actual string
    };

    configurePushNotifications();

    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        const data = notification.request.content.data;
        console.log("Data:", data);
      }
    );

    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(
          "Notification response received:",
          response.notification.request.content.data
        );
      }
    );

    return () => {
      subscription.remove();
      subscription2.remove();
    };
  }, []);

  async function requestPermissions() {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Permission not granted!");
    }
  }

  Notifications.setNotificationHandler({
    handleNotification: async () => {
      return {
        shouldShowBanner: true, // ✅ correct key is shouldShowAlert (not shouldShowBanner)
        shouldPlaySound: true,
        shouldSetBadge: false,
      };
    },
  });

  const scheduleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body of the notification",
        data: { userName: "Max" },
      },
      trigger: {
        seconds: 5,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Schedule Notification" onPress={scheduleNotification} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
