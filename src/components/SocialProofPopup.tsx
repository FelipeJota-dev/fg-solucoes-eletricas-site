import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users } from 'lucide-react';

export function SocialProofPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Generate random visitor count between 3 and 12
    const generateCount = () => Math.floor(Math.random() * (12 - 3 + 1)) + 3;

    let showTimeout: NodeJS.Timeout;
    let hideTimeout: NodeJS.Timeout;

    const cyclePopup = () => {
      setVisitorCount(generateCount());
      setIsVisible(true);

      // Hide after 6 seconds
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 6000);
    };

    // Initial wait of 2 minutes (120000ms) before showing the first time, 
    // but for demo purposes/testing I'll use 15s (15000ms), wait let's follow instructions: 2 mins = 120000
    const INITIAL_DELAY = 120000;
    const REPEAT_DELAY = 120000;

    const startCycle = () => {
      cyclePopup();
      // Repeat every 2 minutes
      showTimeout = setInterval(cyclePopup, REPEAT_DELAY);
    };

    const initialTimer = setTimeout(startCycle, INITIAL_DELAY);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimeout);
      clearInterval(showTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 left-6 z-[60] bg-white text-[#121212] px-4 py-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 pointer-events-none"
        >
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 relative">
             <Users className="w-4 h-4" />
             <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <p className="text-sm font-semibold">{visitorCount} pessoas</p>
            <p className="text-xs text-gray-500">vendo este site agora</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
