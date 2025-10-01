import express from 'express';
import bodyParser from 'body-parser';
import { Expo } from 'expo-server-sdk';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Initialize Expo SDK
let expo = new Expo();

// Endpoint to send push notification
app.post('/send-notification', async (req, res) => {
  const { token, title, body } = {
    token: 'ExponentPushToken[Mwfg6HOkEZM05Aewyt4E7w]',
    title: "Alert Message From Kripya",
    body: "Your attention is required immediately. Please check the app for details."
  };

  if (!Expo.isExpoPushToken(token)) {
    return res.status(400).send({ error: 'Invalid Expo push token' });
  }

  const messages = [{
    to: token,
    sound: 'default',
    title: title || 'Notification',
    body: body || 'Hello from Express!',
    data: { someData: 'goes here' },
  }];

  let chunks = expo.chunkPushNotifications(messages);
  let tickets = [];

  try {
    for (let chunk of chunks) {
      let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
      tickets.push(...ticketChunk);
    }
    res.send({ success: true, tickets });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
