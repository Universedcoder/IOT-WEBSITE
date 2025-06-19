import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { FiSend, FiMessageSquare, FiX, FiCpu } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ChatBot.css'; // Import the new CSS file

interface Message {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [lastRequestTime, setLastRequestTime] = useState<Date | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const COOLDOWN_PERIOD = 10000; // 10 seconds

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
`;

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
    if (isChatOpen) {
        setTimeout(scrollToBottom, 300);
    }
  }, [messages, isChatOpen]);

  const handleSendMessage = async () => {
    if (!apiKey) {
      setError('API key is not configured.');
      return;
    }
    if (!inputMessage.trim()) return;

    if (lastRequestTime) {
      const timeSinceLastRequest = new Date().getTime() - lastRequestTime.getTime();
      if (timeSinceLastRequest < COOLDOWN_PERIOD) {
        setError(`Please wait ${Math.ceil((COOLDOWN_PERIOD - timeSinceLastRequest) / 1000)}s.`);
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
      
      const chatHistory = messages.map(msg => ({
        role: msg.isUser ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const chat = model.startChat({
        history: chatHistory,
        generationConfig: { maxOutputTokens: 1000 },
      });

      const result = await chat.sendMessage(SYSTEM_PROMPT + "\n\nUser: " + inputMessage);
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
      const errorMessage = err.message?.toLowerCase() || '';
      if (errorMessage.includes('rate limit')) {
        setError('Rate limit exceeded. Please try again later.');
      } else if (errorMessage.includes('api key')) {
        setError('Invalid API key. Please check settings.');
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute bottom-20 right-0 w-[calc(100vw-40px)] max-w-sm h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center gap-4">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white">
                <FiCpu size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">IoTbot</h3>
                <p className="text-sm text-green-500 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
              <button onClick={toggleChat} className="ml-auto text-gray-400 hover:text-gray-600 transition-colors">
                <FiX size={24} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto chatbot-gradient-bg">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className={`flex mb-4 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl ${message.isUser ? 'user-message-bg text-white rounded-br-lg' : 'bot-message-bg text-gray-800 rounded-bl-lg'}`}>
                    <div className="markdown-content text-sm" dangerouslySetInnerHTML={{ __html: message.content.replace(/\n/g, '<br />') }} />
                    <p className="text-xs mt-2 opacity-60 text-right">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bot-message-bg text-gray-800 rounded-2xl rounded-bl-lg p-3">
                    <div className="typing-indicator">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
              )}
              {error && (
                <div className="bg-red-100 text-red-700 rounded-lg p-3 text-sm border border-red-200">
                  {error}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about IoT..."
                  className="flex-1 w-full px-4 py-2 bg-gray-100 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
                >
                  <FiSend size={20} />
                </button>
              </div>
               <div className="text-center mt-2 text-[10px] md:text-xs text-gray-400">
                Made with ❤️ by <a href="https://chikaz.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Chikaz AAAgency</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Toggle Button */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 shadow-xl"
      >
        {isChatOpen ? <FiX size={28} /> : <FiMessageSquare size={28} />}
      </motion.button>
    </div>
  );
};

export default ChatBot;
