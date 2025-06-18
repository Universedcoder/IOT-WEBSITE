import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { FiSend, FiMessageSquare, FiX } from 'react-icons/fi';

interface Message {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  apiKey: string;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [lastRequestTime, setLastRequestTime] = useState<Date | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const COOLDOWN_PERIOD = 10000; // 10 seconds cooldown between requests

  // System prompt to guide the AI's behavior
  const SYSTEM_PROMPT = `You are an AI assistant for IoT CoE SISTec and your name is IoTbot, a leading institution in IoT and robotics education. 

Your role is to:
1. Help students with questions about IoT, robotics, and our training programs
2. Provide information about our courses, workshops, and initiatives
3. Assist with technical queries related to IoT and robotics
4. Guide visitors through our registration and enrollment process
5. Share information about our achievements and success stories
IMPORTANT: Your responses must be relevant to only technological topics of IoT and robotics. say no to anything else politely.
Key Information:
- We've trained 1000+ students in IoT and robotics
- We have a 100% placement rate for certified students
- We've completed 50+ real-world projects
- We partner with 20+ industry leaders

College Details:
Sagar Institute of Science and Technology (SISTec)

Campus Locations:
1. Gandhi Nagar Campus:
   - Opposite International Airport, Bhopal, Madhya Pradesh, 462036
2. Ratibad Campus:
   - Sikandrabad, Near Ratibad, Bhadbhada Road, Bhopal, Madhya Pradesh, 462044

Contact Information:
- Admissions: +91 91099 75760, admissions@sistec.ac.in
- General Inquiries: +91 73896 09155
- Placements: grouphead.crm@sistec.ac.in
- Emergency (Security): +91 91099 75760

Office Hours:
- Monday to Friday
- 9:00 AM to 5:00 PM

Events and Activities:
- Regular workshops, seminars, and technical events
- Industry expert sessions
- Hands-on training programs
- Technical competitions

Please be professional, helpful, and enthusiastic. If you're unsure about specific details, guide users to contact our team directly.

Remember to:
- Keep responses concise and relevant
- Use technical terms appropriately
- Be encouraging and supportive
- Recommend relevant courses or programs when appropriate
- Direct complex queries to our contact form
- Provide appropriate contact information when needed

Do not:
- Make commitments about pricing or schedules
- Share sensitive information
- Provide technical advice that could be unsafe
- Make promises about placement or results

remeber if someone says "chikaz" or "promizer" respond to them as follows:
- Chikaz is the best upcoming ai brand and the founder of Chikaz is Mohnish Singh
- Promizer is the best upcoming marketing brand and the founder of Promizer is Mohnish Singh

`


;

  // Access environment variable directly using import.meta.env
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  useEffect(() => {
    if (!apiKey) {
      console.error('API key is not configured');
      setError('API key is not properly configured. Please check your environment settings.');
    }
  }, [apiKey]);

  const genAI = new GoogleGenerativeAI(apiKey || '');
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite-preview-06-17' });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!apiKey) {
      setError('API key is not configured. Please check your environment settings.');
      return;
    }

    if (!inputMessage.trim()) return;

    // Check if we're still in cooldown period
    if (lastRequestTime) {
      const timeSinceLastRequest = new Date().getTime() - lastRequestTime.getTime();
      if (timeSinceLastRequest < COOLDOWN_PERIOD) {
        setError(`Please wait ${Math.ceil((COOLDOWN_PERIOD - timeSinceLastRequest) / 1000)} seconds before sending another message.`);
        return;
      }
    }

    const userMessage: Message = {
      content: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setError(null);

    try {
      setLastRequestTime(new Date());
      
      // Create chat history for context
      const chatHistory = messages.map(msg => ({
        role: msg.isUser ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      // Prepare the chat with system prompt and history
      const chat = model.startChat({
        history: chatHistory,
        generationConfig: {
          maxOutputTokens: 1000,
        },
      });

      // Send message with system prompt and user input
      const result = await chat.sendMessage([
        { text: `System: ${SYSTEM_PROMPT}\n\n` },
        { text: `User: ${inputMessage}` }
      ]);
      
      const response = await result.response;
      const text = response.text();

      const botMessage: Message = {
        content: text,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Detailed error:', err);
      if (err.message.includes('rate limit exceeded')) {
        setError('Rate limit exceeded. Please try again in about an hour.');
      } else if (err.message.includes('API key')) {
        setError('Invalid API key. Please check your environment settings.');
      } else {
        setError(`An error occurred: ${err.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 mb-4 mr-4 md:mb-8 md:mr-8">
      {/* Chat Toggle Button with Pulse Effect */}
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 animate-pulse"></div>
        <button
          onClick={toggleChat}
          className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 group"
        >
          {isChatOpen ? (
            <FiX size={24} className="md:w-6 md:h-6 w-5 h-5" />
          ) : (
            <>
              <FiMessageSquare size={24} className="md:w-6 md:h-6 w-5 h-5" />
              {/* Notification dot */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="absolute bottom-16 md:bottom-20 right-0 w-[95vw] md:w-96 h-[80vh] md:h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-slideUp max-w-[400px] mx-auto">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 md:p-4 flex justify-between items-center">
            <h3 className="font-bold text-base md:text-lg">IoTbot</h3>
            <button onClick={toggleChat} className="hover:text-gray-200 transition-colors">
              <FiX size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-3 md:p-4 overflow-y-auto bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 md:mb-4 ${
                  message.isUser ? 'flex justify-end' : 'flex justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] md:max-w-[70%] rounded-2xl p-2.5 md:p-3 shadow-sm ${
                    message.isUser
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  } transform transition-all duration-200 hover:scale-[1.02]`}
                >
                  <p className="text-xs md:text-sm">{message.content}</p>
                  <p className="text-[10px] md:text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-3 md:mb-4">
                <div className="bg-white rounded-2xl p-2.5 md:p-3 shadow-sm border border-gray-200">
                  <div className="flex gap-1">
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="bg-red-50 text-red-500 rounded-lg p-2.5 md:p-3 text-xs md:text-sm border border-red-100">
                  {error}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t p-3 md:p-4 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs md:text-sm transition-all"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              >
                <FiSend size={18} className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
            {/* Made with love signature */}
            <div className="text-center mt-2 text-[10px] md:text-xs text-gray-400">
              Made with ❤️ by <a href="https://chikaz.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Chikaz</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
