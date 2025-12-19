import { useEffect, useState } from "react";
import Message from "../Message/Message";
import { Loader, Send } from "lucide-react";
import "./general-chat.css";
import { formatDate } from "../../utils/dateFormatter";
import { socket } from "../../utils/socket";

function GeneralChat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isConnecting, setIsConnecting] = useState(true);

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("Connected:", socket.id);
      setIsConnecting(false);
    });

    socket.on("receivedMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receivedMessage");
      socket.disconnect();
    };
  }, []);

  function handleSend() {
    setIsSending(true);
    if (!text.trim()) return;

    socket.on("sendMessage", {
      senderLocation: "Mecardo, Hagonoy, Bulacan",
      message: text,
    });

    console.log("message sent!", text);
    setText("");
    setIsSending(false);
  }
  return (
    <>
      {/** Title Header */}
      <section className="w-full">
        <h1 className="text-white text-lg font-semibold px-5">General Chat</h1>
      </section>

      {/** Main Conversation */}
      <div className="flex flex-col max-h-[400px] w-full gap-2 px-30 py-5 justify-start items-center bg-white/10 rounded-lg backdrop-blur-2xl overflow-y-scroll">
        {isConnecting ? (
          <p>Connecting...</p>
        ) : (
          <>
            {messages.map((m, index) => (
              <Message
                key={index}
                senderLocation={m.senderLocation}
                message={m.message}
                date={formatDate(m.createdAt)}
              />
            ))}

            <section className="flex gap-2 w-full ">
              <textarea
                className="w-full outline-none resize-none overflow-y-scroll px-4 py-2 text-white bg-white/10 rounded-lg"
                name="message"
                id="message"
                rows={2}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type a message..."
              />

              {isSending ? (
                <button>
                  <Loader className="text-white animate-spin" />
                </button>
              ) : (
                <button onClick={handleSend}>
                  <Send className="cursor-pointer text-white/50 transition-all duration-300 hover:text-white hover:scale-120" />
                </button>
              )}
            </section>
          </>
        )}
      </div>
    </>
  );
}

export default GeneralChat;
