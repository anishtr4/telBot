// import { TelegramClient } from "telegram";
const {TelegramClient, Api} = require('telegram');
const {StringSession, StoreSession} = require('telegram/sessions');
const {NewMessage} = require('telegram/events');





// import { StringSession } from "telegram/sessions";
// import input from "input";
const input = require('input');


const apiId = 14225823;
const apiHash = "d99cd274bfe45514ea95f03283477505";
const stringSession = new StringSession(""); // fill this later with the value from session.save()
const storeSession = new StoreSession("my_session");


(async () => {
  console.log("Loading interactive example...");
  const client = new TelegramClient(storeSession, apiId, apiHash, {
    connectionRetries: 5,
  });
  await client.start({
    phoneNumber: async () => await input.text("Please enter your number: "),
    password: async () => await input.text("Please enter your password: "),
    phoneCode: async () =>
      await input.text("Please enter the code you received: "),
    onError: (err) => console.log(err),
  });
  console.log("You should now be connected.");
  console.log(client.session.save()); // Save this string to avoid logging in again
  // await client.sendMessage("me", { message: "Hello!" });

    await client.getMe();

     //console.log(client.getDialogs());
// for (key in client.getDialogs()) {

 
// }

 // const msgs = await client.getDialogs("me", {
      
 //    }); 
 // console.log("msg text is : ", msgs);
    // for (const msg of msgs) {
    //     //console.log("msg is",msg); // this line is very verbose but helpful for debugging
    //     console.log("msg text is : ", msg);
    // }

async function eventPrint(event) {
    const msg = event.message;
// console.log('message',message);
//       // await client.sendMessage(1646930135n, message)

//           const result = await client.invoke(
//         new Api.messages.sendMessage({
//             peer: 1646930135,
//             message: 'Hello there!',
//             randomId: BigInt('-4156887774564'),
//             scheduleDate: 43,
//         })
//     );


(async function run() {
    const result = await client.invoke(new Api.messages.SendMessage({
     
        peer: new Api.InputPeerChannel({ channelId: 1884113141n, accessHash: 2878740496341430629n }),
        message: msg.message,
        silent:false,
        background:false
        }));
    console.log(result); // prints the result
})();
}
// adds an event handler for new messages
client.addEventHandler(eventPrint, new NewMessage({}));


})();