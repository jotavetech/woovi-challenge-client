import { io } from "socket.io-client";

const WEBSOCKET_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL as string;

if (!WEBSOCKET_URL) {
  throw new Error("NEXT_PUBLIC_WEBSOCKET_URL is missing in .env.local");
}

const ioClient = io(WEBSOCKET_URL);

export default ioClient;
