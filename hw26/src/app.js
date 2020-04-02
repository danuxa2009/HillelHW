import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/theme.css";
import "./css/styles.css";

const ws = new WebSocket("wss://fep-app.herokuapp.com/");
const enteredAuthor = document.getElementById("author");
const enteredMessage = document.getElementById("message");

const container = document.getElementById("listOfMessages");
document.addEventListener("submit", onSubmitAction);

ws.onmessage = onSocketMessage;

function getData() {
  const message = {
    author: enteredAuthor.value,
    message: enteredMessage.value
  };
  return message;
}

function onSubmitAction(e) {
  e.preventDefault();
  notifyMessage();
}

function onSocketMessage(message) {
  const packetData = JSON.parse(message.data);
  createNewMessage(packetData.payload);
}

function createNewMessage(packetData) {
  const el = document.createElement("div");
  el.className = "eleven columns";
  el.innerHTML = `<span style="font-weight: bold;">${packetData.author}</span> : <span style="font-style: italic;">${packetData.message}</span>`;
  container.append(el);
}

function notifyMessage() {
  ws.send(
    JSON.stringify({
      action: "message",
      payload: getData()
    })
  );
}
