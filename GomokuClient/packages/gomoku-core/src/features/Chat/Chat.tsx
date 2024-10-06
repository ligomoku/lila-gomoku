import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { useMobileDesign } from "@/hooks/useMobileDesign";

export interface ChatProps {
  messages: string[];
  isConnected: boolean;
  sendMessage: (message: string) => Promise<void>;
  username: string;
}

export const Chat = ({
  messages,
  isConnected,
  sendMessage,
  username,
}: ChatProps) => {
  const [messageInput, setMessageInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const MAX_MESSAGE_LENGTH = 50;
  const isMobile = useMobileDesign();

  const handleSendMessage = async () => {
    if (username && messageInput.trim()) {
      setIsSending(true);
      try {
        await sendMessage(messageInput);
        setMessageInput("");
      } catch (error) {
        console.error("Failed to send message", error);
      } finally {
        setIsSending(false);
      }
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      if (!isSending && messageInput.trim()) {
        handleSendMessage();
      }
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Card
      className="border-[#2b2b2b] bg-[#2b2b2b]"
      style={{
        width: isMobile ? "100%" : "400px",
        maxWidth: isMobile ? "100%" : "400px",
        color: "#bababa",
      }}
    >
      <CardHeader>
        <CardTitle>Chat</CardTitle>
      </CardHeader>
      <CardContent>
        {isConnected ? (
          <div className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => {
                  if (e.target.value.length <= MAX_MESSAGE_LENGTH) {
                    setMessageInput(e.target.value);
                  }
                }}
                onKeyDown={handleKeyDown}
                className="flex-1 rounded-md border px-3 py-2"
                placeholder={"Type a message..."}
                maxLength={MAX_MESSAGE_LENGTH}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!messageInput.trim() || isSending}
                className="border-[#3e3e3e] bg-[#3e3e3e] text-base text-[#bababa] hover:bg-[#4a4a4a] sm:h-14 sm:text-xl"
              >
                {isSending ? "Sending..." : "Send"}
              </Button>
            </div>
            <div className="text-sm text-[#bababa]">
              {messageInput.length}/{MAX_MESSAGE_LENGTH} characters
            </div>
            <ScrollArea
              ref={scrollAreaRef}
              className="h-[300px] w-full overflow-y-auto rounded-md border p-4"
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 rounded p-2 ${
                    msg.startsWith(`${username}:`)
                      ? "bg-blue-100 text-blue-900"
                      : "bg-gray-100 text-gray-900"
                  }`}
                  style={{ wordWrap: "break-word", maxWidth: "100%" }}
                >
                  {msg}
                </div>
              ))}
            </ScrollArea>
          </div>
        ) : (
          <div>
            Connecting...
            <div className="text-gray-500">
              No messages yet. Start the conversation!
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
