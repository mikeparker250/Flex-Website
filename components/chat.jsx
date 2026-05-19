// Live chat widget — placeholder, opens a small text thread.
const chatStyles = `
.fpc-chat-fab {
  position: fixed;
  bottom: 96px;
  right: 24px;
  z-index: 70;
  width: 60px; height: 60px;
  border-radius: 50%;
  background: var(--accent);
  color: #fff;
  border: 3px solid var(--ink);
  box-shadow: 4px 4px 0 0 var(--ink);
  display: grid; place-items: center;
  cursor: pointer;
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.fpc-chat-fab:hover {
  transform: translate(-2px, -2px) rotate(-6deg);
  box-shadow: 6px 6px 0 0 var(--ink);
}
.fpc-chat-fab .ping {
  position: absolute;
  top: -4px; right: -4px;
  width: 14px; height: 14px;
  border-radius: 50%;
  background: #ff4540;
  border: 2px solid var(--paper);
  box-shadow: 0 0 0 0 rgba(255,69,64,0.5);
  animation: ping 1.6s infinite;
}
@keyframes ping {
  0%   { box-shadow: 0 0 0 0 rgba(255,69,64,0.6); }
  100% { box-shadow: 0 0 0 14px rgba(255,69,64,0); }
}

.fpc-chat-panel {
  position: fixed;
  bottom: 96px;
  right: 24px;
  width: 360px;
  max-width: calc(100vw - 48px);
  z-index: 71;
  background: #fff;
  border: 2px solid var(--ink);
  box-shadow: 8px 8px 0 0 var(--accent);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: chatpop 200ms cubic-bezier(.2,.7,.2,1);
  max-height: 560px;
}
@keyframes chatpop {
  from { transform: translateY(12px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}
.fpc-chat-panel .head {
  background: var(--ink);
  color: #fff;
  padding: 16px 18px;
  display: flex; align-items: center; gap: 12px;
}
.fpc-chat-panel .head .av {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: var(--accent);
  display: grid; place-items: center;
  font: 800 14px var(--body);
  border: 2px solid #fff;
}
.fpc-chat-panel .head .who {
  flex: 1;
  font-family: var(--body);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.04em;
}
.fpc-chat-panel .head .who .status {
  display: flex; align-items: center; gap: 6px;
  font-weight: 500;
  font-size: 11px;
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-top: 2px;
}
.fpc-chat-panel .head .who .dot {
  width: 8px; height: 8px; background: #12d36e; border-radius: 50%; box-shadow: 0 0 6px #12d36e;
}
.fpc-chat-panel .head button {
  background: none; border: none; color: rgba(255,255,255,0.6); cursor: pointer; padding: 4px;
}
.fpc-chat-panel .head button:hover { color: #fff; }

.fpc-chat-body {
  flex: 1;
  padding: 16px;
  background: #f4f6f8;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  line-height: 1.5;
}
.fpc-chat-body .bub {
  max-width: 80%;
  padding: 10px 14px;
  border-radius: 16px;
  font-family: var(--body);
}
.fpc-chat-body .bub.them {
  background: #fff;
  color: var(--ink);
  border-bottom-left-radius: 4px;
  border: 1px solid #e3e7ec;
  align-self: flex-start;
}
.fpc-chat-body .bub.me {
  background: var(--accent);
  color: #fff;
  align-self: flex-end;
  border-bottom-right-radius: 4px;
  font-weight: 600;
}
.fpc-chat-body .chips {
  display: flex; flex-wrap: wrap; gap: 6px;
  align-self: flex-start;
}
.fpc-chat-body .chip {
  background: #fff;
  border: 1.5px solid var(--accent);
  color: var(--accent);
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  transition: background 160ms ease, color 160ms ease;
}
.fpc-chat-body .chip:hover {
  background: var(--accent); color: #fff;
}

.fpc-chat-input {
  display: flex; gap: 8px;
  padding: 12px;
  border-top: 1px solid #e3e7ec;
  background: #fff;
}
.fpc-chat-input input {
  flex: 1; border: 1.5px solid #e3e7ec;
  border-radius: 2px;
  padding: 10px 12px;
  font: 600 14px var(--body);
  background: #fff;
  outline: none;
}
.fpc-chat-input input:focus { border-color: var(--accent); }
.fpc-chat-input button {
  background: var(--accent);
  border: 2px solid var(--ink);
  box-shadow: 3px 3px 0 0 var(--ink);
  color: #fff;
  padding: 8px 14px;
  font: 800 italic 13px var(--body);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
}

.typing {
  display: inline-flex; gap: 4px; padding: 12px 14px;
  background: #fff;
  border: 1px solid #e3e7ec;
  border-radius: 16px;
  border-bottom-left-radius: 4px;
}
.typing span {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: dotty 1s infinite;
}
.typing span:nth-child(2) { animation-delay: 0.15s; }
.typing span:nth-child(3) { animation-delay: 0.3s; }
@keyframes dotty {
  0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
  30% { opacity: 1; transform: translateY(-3px); }
}
`;

function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { from: 'them', text: "Hey! 👋 I'm Hannah from Flex. What's bugging you today?" },
  ]);
  const [chips, setChips] = React.useState(['Get a quote', 'Same-day service', 'Termites', 'Talk to a human']);
  const [typing, setTyping] = React.useState(false);
  const [text, setText] = React.useState('');
  const bodyRef = React.useRef(null);

  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing]);

  const reply = (userText) => {
    setMessages((m) => [...m, { from: 'me', text: userText }]);
    setChips([]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      let response;
      const low = userText.toLowerCase();
      if (low.includes('quote') || low.includes('price')) {
        response = "Easy — service starts at $55/mo for most homes. Want me to send a custom quote in 30 sec?";
        setChips(['Yes, send quote', 'I have more questions']);
      } else if (low.includes('same') || low.includes('today') || low.includes('asap')) {
        response = "We can usually be out same-day. Mind giving me a ZIP so I can confirm?";
      } else if (low.includes('termite')) {
        response = "Got it. Termites are time-sensitive — we'll prioritize you. Can I grab your phone number?";
      } else if (low.includes('human') || low.includes('call')) {
        response = "Absolutely — call (479) 404-0800 anytime Mon–Sat, or drop your number and I'll have someone ring you in 5 minutes.";
        setChips(['Call now', 'Send me a text']);
      } else {
        response = "Got it. Want me to text you a quote, or have someone call you in 5 minutes?";
        setChips(['Text me a quote', 'Call me back', 'Talk to a human']);
      }
      setMessages((m) => [...m, { from: 'them', text: response }]);
    }, 900);
  };

  const send = () => {
    const t = text.trim();
    if (!t) return;
    setText('');
    reply(t);
  };

  return (
    <React.Fragment>
      <style>{chatStyles}</style>
      {!open && (
        <button className="fpc-chat-fab" onClick={() => setOpen(true)} aria-label="Open live chat">
          <Ic.Chat width="24" height="24" />
          <span className="ping" />
        </button>
      )}
      {open && (
        <div className="fpc-chat-panel" role="dialog" aria-label="Live chat">
          <div className="head">
            <div className="av">HW</div>
            <div className="who">
              Hannah from Flex
              <div className="status"><span className="dot" /> Live · replies in ~ 2 min</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close"><Ic.X /></button>
          </div>
          <div className="fpc-chat-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div className={`bub ${m.from}`} key={i}>{m.text}</div>
            ))}
            {typing && (
              <div className="typing"><span /><span /><span /></div>
            )}
            {!typing && chips.length > 0 && (
              <div className="chips">
                {chips.map((c) => (
                  <button key={c} className="chip" onClick={() => reply(c)}>{c}</button>
                ))}
              </div>
            )}
          </div>
          <div className="fpc-chat-input">
            <input
              placeholder="Type a message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
            />
            <button onClick={send}>Send</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

window.ChatWidget = ChatWidget;
