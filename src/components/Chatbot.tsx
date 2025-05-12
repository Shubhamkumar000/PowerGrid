"use client"
import axios from 'axios';
import { useEffect, useState, useRef } from "react"
import { MessageCircleIcon, SendIcon, XIcon } from "lucide-react"
interface Message {
  text: string
  isBot: boolean
  timestamp: Date
}
export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your PowerPredict assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  const handleSend = async () => {
    if (!input.trim()) return
    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        text: input,
        isBot: false,
        timestamp: new Date(),
      },
    ])
    // Simulate bot response
    setTimeout(() => {
      const response = getBotResponse(input)
      setMessages((prev) => [
        ...prev,
        {
          text: response,
          isBot: true,
          timestamp: new Date(),
        },
      ])
    }, 1000)
    setInput("")
  }
   const getBotResponse = async (message: string):  Promise<string> => {
    const lowerMessage = message.toLowerCase()
    // if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    //   return "Hello! How can I assist you with PowerPredict today?"
    // }
    // if (lowerMessage.includes("forecast") || lowerMessage.includes("prediction")) {
    //   return "Our AI-powered system provides accurate electricity demand forecasts using historical data, weather patterns, and machine learning algorithms."
    // }
    // if (lowerMessage.includes("data") || lowerMessage.includes("upload")) {
    //   return "You can upload your data in Excel format. We support various data formats and provide real-time analysis and visualization."
    // }
    // if (lowerMessage.includes("download") || lowerMessage.includes("report")) {
    //   return "You can download forecasts and analysis reports in PDF format from the dashboard. Look for the download button next to each chart."
    // }
    // if (lowerMessage.includes("profit") || lowerMessage.includes("business")) {
    //   return "Check our Business Insights page to learn how you can optimize operations and maximize profits using our predictions."
    // }
    try {
    const response = await axios.post('http://127.0.0.1:6969/ask', { question: lowerMessage });
    console.log(response.data);// Assuming the response contains the bot's reply
    return response.data.answer; 

    } catch (error) {
    console.error('Error sending message to bot:', error);
    //return "I'm here to help with any questions about PowerPredict's features. Feel free to ask about forecasts, data upload, reports, or business insights!";
  }
  }
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 h-96 flex flex-col">
          <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-medium">PowerPredict Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${message.isBot ? "bg-gray-100 text-gray-800" : "bg-blue-600 text-white"}`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-50">{message.timestamp.toLocaleTimeString()}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              />
              <button onClick={handleSend} className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700">
                <SendIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700"
        >
          <MessageCircleIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
