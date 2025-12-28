import { useEffect, useRef, useState } from "react";
import { Loader, Send } from "lucide-react";
import { formatDateOrTime } from "../../utils/dateFormatter";
import { socket } from "../../utils/socket";
import Message from "../Message/Message";
import "./general-chat.css";
import Skeleton from "../ui/Skeleton";
import MessageSkeleton from "../Message/MessageSkeleton";

function GeneralChat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isConnecting, setIsConnecting] = useState(true);
  const messagesEndRef = useRef(null);

  //handle fetching all previous messages
  async function handleFetchMessages() {
    try {
      const res = await fetch(
        "https://hagonoytides-backend-1.onrender.com/chats/messages"
      );
      const data = await res.json();

      setMessages(data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong, please try again");
    }
  }

  //handle sending new messages
  function handleSend() {
    setIsSending(true);
    if (!text.trim()) return;

    socket.emit("sendMessage", {
      senderLocation: "Sagrada Familia, Hagonoy, Bulacan",
      message: text,
    });

    console.log("message sent!", text);
    setText("");
    setIsSending(false);
  }

  //auto scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  //get all previous messages using REST
  useEffect(() => {
    handleFetchMessages();
  }, []);

  //real-time messaging using WebSockets
  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("Connected:", socket.id);
      // setIsConnecting(false);
    });

    socket.on("receivedMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receivedMessage");
      socket.disconnect();
    };
  }, []);

  return (
    <>
      {/** Title Header */}
      <section className="w-full">
        <h1 className="text-white text-xl font-semibold px-5">General Chat</h1>
      </section>

      {/** Main Conversation */}
      <p className="text-yellow-200 text-sm italic px-5">
        Notice (Early Testing Stage): The general chat is anonymous, however to
        lessen misinformation a location-based message identifier will be
        enforced, currently the location is fixed.
      </p>
      <div className="flex flex-col self-center max-h-[400px] w-[96%] gap-3 px-3 md:px-10 lg:px-30 py-5 justify-start items-center bg-white/10 rounded-3xl backdrop-blur-2xl custom-inset-shadow">
        {isConnecting ? (
          <>
            <div className="flex flex-col gap-1 px-5 py-2 rounded-2xl w-full bg-gray-500/30 animate-pulse border-white/10">
              <Skeleton className={`w-30 h-3`} />
              <Skeleton className={`w-60 h-3`} />
              <Skeleton className={`w-30 h-3 self-end`} />
            </div>

            <div className="flex flex-col gap-1 px-5 py-2 rounded-2xl w-full bg-gray-500/30 animate-pulse border-white/10">
              <Skeleton className={`w-40 h-3`} />
              <Skeleton className={`w-30 h-3`} />
              <Skeleton className={`w-20 h-3 self-end`} />
            </div>
          </>
        ) : (
          <>
            {/** All Messages */}
            <section className="flex flex-col gap-3 w-full overflow-y-scroll">
              {messages.map((m, index) => (
                <Message
                  key={index}
                  senderLocation={m.senderLocation}
                  message={m.message}
                  date={formatDateOrTime(m.createdAt)}
                />
              ))}

              <div ref={messagesEndRef} />
            </section>

            {/** Creating and Sending a Message Section */}
            <section className="w-full px-4">
              <div
                className="flex items-end gap-3 max-w-4xl mx-auto 
                  bg-white/5 backdrop-blur-md 
                  border border-white/10 
                  rounded-2xl p-2 shadow-lg"
              >
                <textarea
                  className="flex-1 resize-none bg-transparent text-white 
                 placeholder:text-white/40 
                 outline-none px-3 py-2 
                 max-h-32 overflow-y-auto"
                  name="message"
                  id="message"
                  rows={1}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type a message..."
                />

                <button
                  onClick={handleSend}
                  disabled={isSending || !text.trim()}
                  className={`flex items-center justify-center 
                  w-10 h-10 rounded-full 
                  transition-all duration-300
                  ${
                    isSending || !text.trim()
                      ? "bg-white/10 text-white/40 cursor-not-allowed"
                      : "bg-indigo-500 hover:bg-indigo-400 text-white hover:scale-105 cursor-pointer"
                  }`}
                >
                  {isSending ? (
                    <Loader className="animate-spin w-5 h-5" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
}

export default GeneralChat;
