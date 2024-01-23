import { useState } from "react";
import { SendeSvg } from "./Others";
import Typerwriter from "typewriter-effect";

export const NewUi = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, How can i assist you today?",
      isBotReplying: false,
    },
  ]);

  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleSend = () => {
    setMessages([
      ...messages,
      { text: input, isBotReplying: false },
      { text: "resp", isBotReplying: true },
    ]);
    setInput("");
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      e.preventDefault();
      handleSend();
    }
  };
  return (
    <>
      {/* Main Container  */}
      <div className="relative bg-[#1E2A34] w-screen h-screen text-white">
        {/* Animated Text  */}
        {/* <div className="absolute left-0 right-0 flex  justify-center mx-auto top-2">
          <Typerwriter
            options={{
              autoStart: true,
              loop: false,
            }}
            onInit={(text) => {
              text
                .typeString(
                  `<span style='background: linear-gradient(0deg, #00F0D1, #1F7BF4);-webkit-background-clip: text;-webkit-text-fill-color: transparent;'>Chat Bot</span>`
                )
                .pause(5000)
                .deleteAll()
                .start();
            }}
          />
        </div> */}
        {/* Chat Body  */}
        <div
          id="chatBody"
          className="flex flex-col gap-10 mx-2 md:mx-32 px-2 md:px-5 py-10  h-[calc(100vh-100px)] overflow-y-auto"
        >
          {/* User & Bot Message  */}
          {messages.map((message, i) => (
            <div key={i} className="flex gap-4 bg-[#25313bd7] p-4 rounded-lg">
              <span>{message.isBotReplying ? "Bot" : "User"}</span>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        {/* Chat Footer  */}
        <div className="flex md:mx-32 px-2 md:px-4 mx-3 mt-3">
          <textarea
            id="userInput"
            value={input}
            onChange={handleInput}
            onKeyDown={handleEnterKey}
            className="w-full px-4 py-2  bg-[#0f0f0f42] outline-none resize-none rounded-lg"
            placeholder="Type Here..."
            style={{
              paddingTop: "18px",
              lineHeight: "80%",
            }}
          ></textarea>
          <button className="pl-2" onClick={handleSend}>
            <SendeSvg />
          </button>
        </div>
      </div>
    </>
  );
};
