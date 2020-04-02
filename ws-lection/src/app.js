import "./styles.css";

const MOVE_STEP = 20;

const balls = {};

// const ballEl = document.querySelector("#ball");
const ball = {
  id: Math.random(),
  color: "teal",
  name: "Danya",
  top: 50,
  left: 50
};

const ws = new WebSocket("wss://fep-app.herokuapp.com/");
ws.onopen = onSocketOpen;
ws.onmessage = onSocketMessage;

function onSocketMessage(message) {
  console.log(message);

  const packetDate = JSON.parse(message.data);
  console.log(packetDate);
  if (!balls[packetDate.payload.id]) {
    balls[packetDate.payload.id] = createBallElement(packetDate.payload);
  }

  updateState(ball);
}

function updateState(ball) {
  const ballEl = balls[ball.id];
  ballEl.style.top = ball.top + "px";
  ballEl.style.left = ball.left + "px";
  ballEl.style.backgroundColor = ball.color;
}

function onSocketOpen() {
  console.log("socket open");
  notifyStateChange();
}

function createBallElement(ball) {
  const el = document.createElement("div");
  el.textContent = ball.name;
  el.className = "ball";

  document.body.append(el);
  return el;
}

document.addEventListener("keydown", onKeyPress);

function onKeyPress(e) {
  console.log(e);
  switch (e.code) {
    case "ArrowUp":
      changeBallPosition(-MOVE_STEP, 0);
      break;
    case "ArrowLeft":
      changeBallPosition(0, -MOVE_STEP);
      break;
    case "ArrowDown":
      changeBallPosition(MOVE_STEP, 0);
      break;
    case "ArrowRight":
      changeBallPosition(0, MOVE_STEP);
      break;
  }
  notifyStateChange();
}

function notifyStateChange() {
  ws.send(
    JSON.stringify({
      action: "setState",
      payload: ball
    })
  );
}

function changeBallPosition(topDiff, leftDiff) {
  ball.top += topDiff;
  ball.left += leftDiff;
}

function moveBall(position) {
  ballEl.style.top = position.top + "px";
  ballEl.style.left = position.left + "px";
}

// {
//     action: 'setState',
//     payload: {}
// }

// {
//     action: 'move',
//     payload: {top,left}
// }
