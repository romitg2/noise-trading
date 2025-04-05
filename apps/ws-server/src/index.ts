import { WebSocketServer } from "ws";
import { Redis } from "ioredis";
import WebSocket from "ws";

const wss = new WebSocketServer({ port: 8080 });
const redis = new Redis({
  host: "localhost",
  port: 6379,
});

wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.on("message", (message) => {
    console.log("Received message:", message);
  });
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

setInterval(async () => {
  const stocks = await redis.keys("stock:*");
  for (const stock of stocks) {
    const priceStr = await redis.get(stock);
    const price = parseFloat(priceStr || '0');
    wss.clients.forEach((ws) => {
      if (ws.readyState === WebSocket.OPEN) {
        console.log("Sending stock update:", stock, price);
        ws.send(JSON.stringify({ stock, price }));
      }
    });
  }
}, 1000);
