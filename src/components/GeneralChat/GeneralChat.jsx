import UnderDevelopment from "../UnderDevelopment/UnderDevelopment";
import "./general-chat.css";

function GeneralChat() {
  return (
    <>
      {/** Title Header */}
      <section className="w-full">
        <h1 className="text-white text-lg font-semibold px-5">General Chat</h1>
      </section>

      {/** Main Conversation */}
      <div className="flex flex-1 justify-center items-center bg-white/10 rounded-lg w-full backdrop-blur-2xl overflow-hidden">
        <UnderDevelopment label={"This feature is under development"} />
      </div>
    </>
  );
}

export default GeneralChat;
