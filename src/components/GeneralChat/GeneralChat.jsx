import { useEffect, useRef, useState } from "react";
import { Loader, Send } from "lucide-react";
import { formatDateOrTime } from "../../utils/dateFormatter";
import { socket } from "../../utils/socket";
import Message from "../Message/Message";
import MessageSkeleton from "../Message/MessageSkeleton";
import MessageInputSkeleton from "../Message/MessageInputSkeleton";
import "./general-chat.css";

function GeneralChat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isConnecting, setIsConnecting] = useState(true);

  const scrollContainerRef = useRef(null);

  //handle fetching all previous messages
  async function handleFetchMessages() {
    if (!navigator.onLine) {
      setIsConnecting(true);
      return console.log("NO FETCH MESSAGE BCS OFFLINE HEHE");
    }
    try {
      const res = await fetch(
        "https://hagonoytides-backend-1.onrender.com/chats/messages"
        //"https://hagonoytides-backend-production.up.railway.app/chats/messages"
      );
      const data = await res.json();

      setMessages(data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong, please try again");
    }
  }

  //handle fetching the decoded coordinates of a user
  async function handleFetchDecodeCoordinates(lat, lon) {
    try {
      const res = await fetch(
        `https://hagonoytides-backend-1.onrender.com/chats/senderLocation?lat=${lat}&lon=${lon}`
        //`https://hagonoytides-backend-production.up.railway.app/chats/senderLocation?lat=${lat}&lon=${lon}`
      );

      const data = await res.json();
      const senderLoc = data.features[0].properties.name;

      console.log("senderLOcation::::::", senderLoc);
      console.log("HOYYYYYYYYYYYY");
      return senderLoc;
    } catch (error) {
      console.error("Something went wrong decoding coordinates", error);
    }
  }

  //handle sending new messages
  function handleSend(location) {
    if (!text.trim()) return;

    socket.emit("sendMessage", {
      senderLocation: location || "From Unknown Location",
      message: text,
    });

    console.log("message sent!", text);
    setText("");
    setIsSending(false);
  }

  function handleRequestLocationPermission() {
    if (!navigator.geolocation) {
      return alert(
        "Sorry, you cannot send a message since your browser is not supported with geolocation"
      );
    }

    setIsSending(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const location = await handleFetchDecodeCoordinates(
          latitude,
          longitude
        );

        handleSend(location);
      },
      (error) => {
        console.log(
          "something went wrong getting users current location",
          error
        );

        setText("");
        setIsSending(false);
        return alert("Location permission must be allowed to send a message.");
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  }

  // Automatically scrolls only the messages section cleanly
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [messages]);

  //get all previous messages using REST
  useEffect(() => {
    handleFetchMessages();
  }, []);

  //real-time messaging using WebSockets
  useEffect(() => {
    function handleOnline() {
      console.log("Back online");
      setIsConnecting(true);
      socket.connect();
    }

    function handleOffline() {
      console.log("Went offline");
      setIsConnecting(true);
      socket.disconnect();
    }

    // initial state check
    if (!navigator.onLine) {
      setIsConnecting(true);
      console.log("Offline mode - no chats for now");
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // connect socket if online
    if (navigator.onLine) {
      socket.connect();

      socket.on("connect", () => {
        console.log("Connected:", socket.id);
        setIsConnecting(false);
      });

      socket.on("receivedMessage", (data) => {
        setMessages((prev) => [...prev, data]);
      });
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);

      socket.off("connect");
      socket.off("receivedMessage");
      socket.disconnect();
    };
  }, []);

  return (
    <section className="w-full flex flex-col gap-4 px-4 sm:px-5">
      {/* Header */}
      <header className="pt-1">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[22px] sm:text-2xl font-semibold tracking-[-0.025em] text-white">
              General Chat
            </h1>

            <p className="mt-1.5 max-w-xl text-[13px] sm:text-sm leading-5 text-white/55">
              Chat anonymously with fellow Hagonoeños about tides, weather, and
              local conditions.
            </p>
          </div>

          {/* Online indicator */}
          <div
            className={`hidden sm:flex items-center gap-2 rounded-full px-3 py-1.5
              border backdrop-blur-xl
              ${
                isConnecting
                  ? "border-white/10 bg-white/[0.06] text-white/45"
                  : "border-emerald-400/15 bg-emerald-400/[0.08] text-emerald-300/80"
              }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isConnecting
                  ? "bg-white/30"
                  : "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]"
              }`}
            />

            <span className="text-[11px] font-medium tracking-wide">
              {isConnecting ? "Connecting" : "Online"}
            </span>
          </div>
        </div>
      </header>

      {/* Main Chat Container */}
      <div
        className="
          relative
          flex flex-col
          self-center
          w-full
          max-w-5xl
          h-[min(620px,calc(100vh-210px))]
          min-h-[400px]
          overflow-hidden
          rounded-[28px]
          border border-white/[0.12]
          bg-white/[0.055]
          backdrop-blur-[30px]
          shadow-[0_20px_70px_rgba(0,0,0,0.18)]
          ring-1 ring-black/5
        "
      >
        {/* Subtle glass highlight */}
        <div
          className="
            pointer-events-none
            absolute inset-x-0 top-0 h-px
            bg-gradient-to-r
            from-transparent
            via-white/25
            to-transparent
          "
        />

        {/* Top ambient glow */}
        <div
          className="
            pointer-events-none
            absolute
            -top-24
            left-1/2
            h-48
            w-72
            -translate-x-1/2
            rounded-full
            bg-indigo-400/[0.08]
            blur-3xl
          "
        />

        {isConnecting ? (
          <div className="relative flex h-full flex-col p-4 sm:p-6">
            {/* Skeleton messages */}
            <div className="flex flex-1 flex-col justify-start gap-4 overflow-hidden">
              <div
                className="
                  rounded-2xl
                  border border-white/[0.06]
                  bg-white/[0.035]
                  p-4
                "
              >
                <MessageSkeleton
                  senderLocationWidth="w-30"
                  messageWidth="w-60"
                  dateWidth="w-30"
                />
              </div>

              <div
                className="
                  rounded-2xl
                  border border-white/[0.06]
                  bg-white/[0.035]
                  p-4
                "
              >
                <MessageSkeleton
                  senderLocationWidth="w-40"
                  messageWidth="w-30"
                  dateWidth="w-20"
                />
              </div>
            </div>

            {/* Skeleton composer */}
            <div className="mt-4">
              <MessageInputSkeleton />
            </div>
          </div>
        ) : (
          <>
            {/* Messages */}
            <section
              ref={scrollContainerRef}
              className="
                relative
                flex-1
                min-h-0
                w-full
                overflow-y-auto
                px-4
                py-5
                sm:px-6
                sm:py-6
                scrollbar-thin
                scrollbar-track-transparent
                scrollbar-thumb-white/10
                hover:scrollbar-thumb-white/20
              "
            >
              <div className="mx-auto flex w-full max-w-4xl flex-col gap-3">
                {messages.length === 0 ? (
                  <div className="flex flex-1 items-center justify-center py-20">
                    <div className="text-center">
                      <div
                        className="
                          mx-auto mb-4
                          flex h-12 w-12
                          items-center justify-center
                          rounded-full
                          border border-white/10
                          bg-white/[0.06]
                          text-white/35
                          shadow-inner
                        "
                      >
                        <Send className="h-5 w-5" />
                      </div>

                      <p className="text-sm font-medium text-white/60">
                        No messages yet
                      </p>

                      <p className="mt-1 text-xs text-white/35">
                        Start the conversation with your community.
                      </p>
                    </div>
                  </div>
                ) : (
                  messages.map((m, index) => (
                    <div
                      key={index}
                      className="
                        animate-[fadeIn_0.25s_ease-out]
                        transition-transform
                        duration-200
                      "
                    >
                      <Message
                        senderLocation={m.senderLocation}
                        message={m.message}
                        date={formatDateOrTime(m.createdAt)}
                      />
                    </div>
                  ))
                )}
              </div>
            </section>

            {/* Composer area */}
            <section
              className="
                relative
                shrink-0
                border-t border-white/[0.08]
                bg-black/[0.08]
                px-3
                pb-3
                pt-3
                sm:px-5
                sm:pb-5
                sm:pt-4
                backdrop-blur-2xl
              "
            >
              {/* Top fade */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -top-8
                  left-0
                  right-0
                  h-8
                  bg-gradient-to-t
                  from-black/[0.08]
                  to-transparent
                "
              />

              <div className="mx-auto w-full max-w-4xl">
                <div
                  className="
                    group
                    flex
                    items-end
                    gap-2
                    rounded-[22px]
                    border
                    border-white/[0.12]
                    bg-white/[0.07]
                    p-1.5
                    shadow-[0_8px_30px_rgba(0,0,0,0.14)]
                    backdrop-blur-2xl
                    transition-all
                    duration-200
                    focus-within:border-white/[0.2]
                    focus-within:bg-white/[0.085]
                    focus-within:shadow-[0_10px_35px_rgba(0,0,0,0.18)]
                  "
                >
                  <textarea
                    className="
                      min-h-[42px]
                      max-h-32
                      flex-1
                      resize-none
                      overflow-y-auto
                      bg-transparent
                      px-3
                      py-2.5
                      text-[15px]
                      leading-5
                      text-white
                      outline-none
                      placeholder:text-white/35
                      scrollbar-thin
                      scrollbar-track-transparent
                      scrollbar-thumb-white/10
                    "
                    name="message"
                    id="message"
                    rows={1}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Message the community..."
                  />

                  <button
                    onClick={handleRequestLocationPermission}
                    disabled={isSending || !text.trim()}
                    aria-label="Send message"
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-200
                      ${
                        isSending || !text.trim()
                          ? `
                            cursor-not-allowed
                            bg-white/[0.07]
                            text-white/25
                          `
                          : `
                            cursor-pointer
                            bg-indigo-500
                            text-white
                            shadow-[0_4px_16px_rgba(99,102,241,0.35)]
                            hover:bg-indigo-400
                            hover:shadow-[0_6px_20px_rgba(99,102,241,0.45)]
                            active:scale-90
                          `
                      }
                    `}
                  >
                    {isSending ? (
                      <Loader className="h-[18px] w-[18px] animate-spin" />
                    ) : (
                      <Send className="h-[18px] w-[18px] translate-x-[1px]" />
                    )}
                  </button>
                </div>

                {/* Composer hint */}
                <p className="mt-2 hidden text-center text-[10px] tracking-wide text-white/25 sm:block">
                  Your location is shared with your message to identify the
                  general area.
                </p>
              </div>
            </section>
          </>
        )}
      </div>
    </section>
  );
}

export default GeneralChat;
