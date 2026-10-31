
// // 1. NotificationService interfeysi
// class NotificationService {
//     send(recipient, message) {
//         throw new Error("send() metodi amalga oshirilmagan");
//     }
// }

// // 2. SMS xizmati
// class SmsNotificationService extends NotificationService {
//     send(recipient, message) {
//         console.log(`SMS yuborildi: ${recipient}`);
//         console.log(`Xabar: ${message}`);
//     }
// }

// // 3. TelegramClient
// // Bu klassning asl metodini o'zgartirmaymiz
// class TelegramClient {
//     sendTelegramMessage(chatId, text) {
//         console.log(`Telegram xabari yuborildi: ${chatId}`);
//         console.log(`Xabar: ${text}`);
//     }
// }

// // 4. EmailClient
// // Bu klassning asl metodini o'zgartirmaymiz
// class EmailClient {
//     sendEmail(emailAddress, subject, body) {
//         console.log(`Email yuborildi: ${emailAddress}`);
//         console.log(`Mavzu: ${subject}`);
//         console.log(`Xabar: ${body}`);
//     }
// }

// // 5. TelegramAdapter
// class TelegramAdapter extends NotificationService {
//     constructor(telegramClient) {
//         super();
//         this.telegramClient = telegramClient;
//     }

//     send(recipient, message) {
//         this.telegramClient.sendTelegramMessage(
//             recipient,
//             message
//         );
//     }
// }

// // 6. EmailAdapter
// class EmailAdapter extends NotificationService {
//     constructor(emailClient) {
//         super();
//         this.emailClient = emailClient;
//     }

//     send(recipient, message) {
//         this.emailClient.sendEmail(
//             recipient,
//             "Yangi bildirishnoma",
//             message
//         );
//     }
// }

// // 7. NotificationManager
// class NotificationManager {
//     constructor(notificationService) {
//         this.notificationService = notificationService;
//     }

//     sendNotification(recipient, message) {
//         this.notificationService.send(recipient, message);
//     }
// }

// // 8. Main - dasturni tekshirish

// // SMS
// const smsService = new SmsNotificationService();
// const smsManager = new NotificationManager(smsService);

// smsManager.sendNotification(
//     "+998901234567",
//     "Salom! Bu SMS xabari."
// );

// console.log("----------------------");

// // Telegram
// const telegramClient = new TelegramClient();
// const telegramAdapter = new TelegramAdapter(telegramClient);
// const telegramManager = new NotificationManager(telegramAdapter);

// telegramManager.sendNotification(
//     "123456789",
//     "Salom! Bu Telegram xabari."
// );

// console.log("----------------------");

// // Email
// const emailClient = new EmailClient();
// const emailAdapter = new EmailAdapter(emailClient);
// const emailManager = new NotificationManager(emailAdapter);

// emailManager.sendNotification(
//     "example@gmail.com",
//     "Salom! Bu Email xabari."
// );



