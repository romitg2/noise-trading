"use client";
import { useEffect, useState } from "react";

export function useSocket(url: string = "ws://localhost:8080") {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [data, setData] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);
    setSocket(socket);
    console.log("socket connected successfully!!");

    socket.onopen = () => {
      console.log("WebSocket connected");
      socket.send("Hello Server!");
    };

    socket.onmessage = (event) => {
        console.log("message received");
      console.log("Received:", event.data);
      const parsed = JSON.parse(event.data);
      const key = parsed.stock as string;
      const price = typeof parsed.price === 'number' ? parsed.price : parseFloat(parsed.price);
      if (!isNaN(price)) {
        setData((prev) => ({ ...prev, [key]: price }));
      }
    };

    return () => socket.close();
  }, [url]);

  return { data, socket };
}
