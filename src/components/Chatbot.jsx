import React, { useState } from "react";


const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I’m your shopping assistant. Ask me anything!" }
  ]);
  const [input, setInput] = useState("");

  const botReplies = {
    "hi": "Hey there 👋 How can I help you today?",
    "hello": "Hello 😊 Need help with products or your cart?",
    "cart": "Go to the Cart page 🛒 to see your items.",
    "checkout": "Click 'Proceed to Checkout' in your cart 💳",
    "products": "You can browse all products in the Products page 🔍",
    "default": "I’m still learning 🤖 Try asking about cart, products, or checkout."
  };

  const handleSend = () => {
    if (!input) return;

    const userMsg = { from: "user", text: input };
    setMessages(prev => [...prev, userMsg]);

    const key = input.toLowerCase();
    const reply = botReplies[key] || botReplies.default;

    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: reply }]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "black",
          color: "white",
          padding: "15px",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 1000
        }}
      >
        💬
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div style={{
          position: "fixed",
          bottom: "80px",
          right: "20px",
          width: "300px",
          height: "400px",
          background: "white",
          border: "1px solid #c72d2d",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          zIndex: 1000
        }}>

          {/* messages */}
          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                textAlign: msg.from === "user" ? "right" : "left",
                margin: "5px 0"
              }}>
                <span style={{
                  background: msg.from === "user" ? "#0673e7" : "#c6da98",
                  color: msg.from === "user" ? "white" : "black",
                  padding: "5px 10px",
                  borderRadius: "10px",
                  display: "inline-block"
                }}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* input */}
          <div style={{ display: "flex", borderTop: "1px solid #c8e06f" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              style={{ flex: 1, padding: "10px", border: "none" }}
            />
            <button onClick={handleSend} style={{ padding: "10px" }}>
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default Chatbot
