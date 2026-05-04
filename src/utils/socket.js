import { io } from "socket.io-client";

export const socket = io(
  "https://hagonoytides-backend-1.onrender.com",
  //"https://hagonoytides-backend-production.up.railway.app",
  {
    autoConnect: navigator.onLine,
    withCredentials: true,
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 1000,
  }
);

window.addEventListener("offline", () => socket.disconnect());
window.addEventListener("online", () => socket.connect());
