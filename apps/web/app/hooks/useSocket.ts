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
      const key = JSON.parse(event.data).stock as string;
      const price = JSON.parse(event.data).price as number;
      setData((prev) => ({ ...prev, [key]: price }));
    };

    return () => socket.close();
  }, [url]);

  return { data, socket };
}
