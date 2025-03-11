
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{text: string; fromUser: boolean}[]>([
    { text: "👋 Hello! How can the Flexsurf Net team help you today?", fromUser: false }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // Add user message
    setMessages([...messages, { text: message, fromUser: true }]);
    setMessage('');
    
    // Simulate response after a delay
    setTimeout(() => {
      const responses = [
        "Thanks for your message! A support agent will get back to you soon.",
        "I understand your concern. Let me connect you with our technical team.",
        "Thank you for contacting Flexsurf Net. How else can we assist you?",
        "We appreciate your question. Our team is looking into this for you."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: randomResponse, fromUser: false }]);
      
      toast.success("Support agent notified", {
        description: "We'll get back to you shortly"
      });
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-flexsurf-blue to-flexsurf-blue-dark text-white shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 rounded-xl shadow-xl overflow-hidden glass-card border border-gray-100"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 20 }}
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-flexsurf-blue to-flexsurf-blue-dark text-white flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-bold">Live Support</h3>
                <p className="text-xs text-blue-100">We typically reply in a few minutes</p>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-4 bg-white/50">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`mb-3 flex ${msg.fromUser ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index % 3) }}
                >
                  <div 
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      msg.fromUser 
                        ? 'bg-flexsurf-blue text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Message Input */}
            <div className="p-3 border-t border-gray-100 bg-white/70 flex items-center">
              <textarea
                className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-flexsurf-blue/50 resize-none text-sm"
                placeholder="Type your message here..."
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button 
                className="ml-2 bg-flexsurf-blue hover:bg-flexsurf-blue-dark"
                size="icon"
                onClick={handleSendMessage}
              >
                <Send size={18} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatSupport;
