import { Redis } from "ioredis";
import { NoiseGenerator } from "./generator";

const redis = new Redis({
  host: "localhost",
  port: 6379,
});

const generator = new NoiseGenerator();

const noises = [
  { symbol: "AAPL", price: 150 },
  { symbol: "MSFT", price: 300 },
  { symbol: "GOOGL", price: 200 },
  { symbol: "AMZN", price: 350 },
  { symbol: "FB", price: 250 },
  { symbol: "TSLA", price: 500 },
  { symbol: "JPM", price: 100 },
];

async function tick() {
  console.log("generated tick successfully !!!");
  for (const noise of noises) {
    const newPrice = noise.price * (0.95 + Math.random() * 0.1); // ±5%
    await redis.set(`stock:${noise.symbol}`, newPrice);
    await redis.publish(
      `stock:${noise.symbol}`,
      JSON.stringify({ symbol: noise.symbol, price: newPrice })
    );
  }

  setTimeout(tick, 1000);
}

tick();