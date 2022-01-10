const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("Connected to server ✅");
});

socket.addEventListener("message", (message) => {
  console.log("New Message:", message.data);
});

socket.addEventListener("close", () => {
  console.log("connected from Server❌");
});

setTimeout(() => {
  socket.send("Hello from the Browser!!");
}, 5000);

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(input.value);
  input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);
