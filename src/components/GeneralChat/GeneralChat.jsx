import { useEffect, useState } from "react";
import Message from "../Message/Message";
import "./general-chat.css";

function GeneralChat() {
  const [messages, setMessages] = useState([]);

  async function handleFetchMessages() {
    const res = await fetch(
      "https://hagonoytides-backend-1.onrender.com/chats/messages"
    );
    const data = await res.json();

    setMessages(data);
  }

  useEffect(() => {
    handleFetchMessages();
  }, []);

  const chats = [
    {
      senderLocation: "Sagrada Familia, Hagonoy, Bulacan",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti, consectetur minima porro",
      date: "May 15, 2025, 7:30 PM",
    },
    {
      senderLocation: "Mercado, Hagonoy, Bulacan",
      message: "Lorem ipscing elit. Vero deleniti, consectetur minima porro",
      date: "August 15, 2025, 10:00 AM",
    },
    {
      senderLocation: "Sto. Rosario, Hagonoy, Bulacan",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti, conseconsectetur minima porconsectetur minima porconsectetur minima porctetur minima porro",
      date: "January 15, 2025, 11:30 PM",
    },
    {
      senderLocation: "Mercado, Hagonoy, Bulacan",
      message: "Lorem ipscing elit. Vero deleniti, consectetur minima porro",
      date: "August 15, 2025, 10:00 AM",
    },
    {
      senderLocation: "Sto. Rosario, Hagonoy, Bulacan",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti, conseconsectetur minima porconsectetur minima porconsectetur minima porctetur minima porro",
      date: "January 15, 2025, 11:30 PM",
    },
    {
      senderLocation: "Mercado, Hagonoy, Bulacan",
      message: "Lorem ipscing elit. Vero deleniti, consectetur minima porro",
      date: "August 15, 2025, 10:00 AM",
    },
    {
      senderLocation: "Sto. Rosario, Hagonoy, Bulacan",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti, conseconsectetur minima porconsectetur minima porconsectetur minima porctetur minima porro",
      date: "January 15, 2025, 11:30 PM",
    },
    {
      senderLocation: "Mercado, Hagonoy, Bulacan",
      message: "Lorem ipscing elit. Vero deleniti, consectetur minima porro",
      date: "August 15, 2025, 10:00 AM",
    },
    {
      senderLocation: "Sto. Rosario, Hagonoy, Bulacan",
      message: "Loremm rro",
      date: "January 15, 2025, 11:30 PM",
    },
  ];
  return (
    <>
      {/** Title Header */}
      <section className="w-full">
        <h1 className="text-white text-lg font-semibold px-5">General Chat</h1>
      </section>

      {/** Main Conversation */}
      <div className="flex flex-col max-h-[400px] w-full gap-2 p-15 justify-start items-center bg-white/10 rounded-lg backdrop-blur-2xl overflow-y-scroll">
        {messages.map((m, index) => (
          <Message
            key={index}
            senderLocation={m.senderLocation}
            message={m.message}
            date={m.date}
          />
        ))}
      </div>
    </>
  );
}

export default GeneralChat;
