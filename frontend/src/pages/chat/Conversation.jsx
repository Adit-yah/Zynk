import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import useLenis from "../../hooks/useLenis";
import BackChevron from "../../svg/BackChevron";

const sampleMessages = [
  { id: 1, fromSelf: false, text: "Hey, how are you?" },
  { id: 2, fromSelf: true, text: "I'm good! Just working on a project." },
  { id: 3, fromSelf: false, text: "Oh nice 👌 Tell me more!" },
];

export default function ConversationPage() {


  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state || {};
  const [messages, setMessages] = useState(sampleMessages);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef(null);

  const lenis = useLenis('.main-content' , '.main-scroll')

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const msg = { id: Date.now(), fromSelf: true, text: newMessage };
    setMessages((prev) => [...prev, msg]);
    setNewMessage("");
    // TODO: send to backend
  };

  return (
    <main className="main-content  flex-1 bg-zinc-100/80 h-screen dark:bg-zinc-900 overflow-y-auto md:pt-0 pb-[50px] md:pb-0">
      <div className="main-scroll flex flex-col min-h-screen flex-1  shadow-md w-screen sm:max-w-[550px] md:max-w-[450px] mx-auto transition-colors bg-gray-100 dark:bg-zinc-900">
        {/* Header */}
        <header className="flex gap-2 fixed w-screen sm:max-w-[550px] md:max-w-[450px] top-0 items-center bg-white dark:bg-black px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <button onClick={() => navigate(-1)}>
            <BackChevron
              size={28}
              className="md:hidden  cursor-pointer text-primary dark:text-secondary"
            />
          </button>
          <img
            src={user?.image}
            alt={user?.username}
            className="w-10 h-10 rounded-full object-cover border border-gray-300 dark:border-gray-400/40"
          />
          <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
            {user?.username || "Unknown"}
          </h2>
        </header>

        {/* Messages */}
        <main
          ref={scrollRef}
          className="flex-1 overflow-y-auto  bg-gray-200/50 dark:bg-black/50  px-2 pt-17 pb-6 space-y-2"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.fromSelf ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl text-sm max-w-[70%] ${
                  msg.fromSelf
                    ? "dark:bg-secondary bg-primary text-white rounded-br-none"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </main>

        {/* Input Bar */}
        <footer className="flex fixed w-screen sm:max-w-[550px] md:max-w-[450px] bottom-0 bg-white dark:bg-black items-center gap-2 p-3 border-t border-gray-200 dark:border-gray-700">
          <input
            type="text"
            placeholder="Message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 outline-none text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-full dark:bg-secondary/80  bg-primary/80  hover:bg-primary dark:hover:bg-secondary text-white shadow-md transition"
          >
            <FaPaperPlane />
          </button>
        </footer>
      </div>
    </main>
  );
}
