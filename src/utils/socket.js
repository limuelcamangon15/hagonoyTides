import { io } from "socket.io-client";

export const socket = io("https://hagonoytides-backend-1.onrender.com", {
  autoConnect: false,
  withCredentials: true,
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
});
