import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Mail, ExternalLink, Sparkles, MessageSquare, Phone } from 'lucide-react';

export default function ResumeModal({ 
  isOpen, 
  onClose, 
  resumeUrl = "https://drive.google.com/file/d/1kbarcKrs1S8VzsdSAZM1I4b-duYUOLpO/view?usp=sharing",
  email = "chinmayworkpandey@gmail.com",
  phone = null 
}) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    if (phone) {
      navigator.clipboard.writeText(phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-200 relative p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
              title="Close"
            >
              <X size={20} />
            </button>

            {/* Icon Header */}
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-accent flex items-center justify-center mb-6 shadow-xs border border-indigo-100">
              <Sparkles size={24} />
            </div>

            {/* Witty Copy Headline */}
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-snug mb-3">
              Why do you need this 1-page doc? 😉
            </h3>
            
            <p className="text-base sm:text-lg font-medium text-accent mb-6 leading-snug">
              Even with all this proof of work...
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-5 mb-8">
              <p className="text-sm sm:text-base font-semibold text-gray-800 flex items-center gap-2 mb-1">
                <MessageSquare size={18} className="text-accent flex-shrink-0" />
                <span>Anyways... we should connect instead and have a conversation!</span>
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 pl-6">
                Direct conversations always beat resume bullet points. Reach out directly below:
              </p>
            </div>

            {/* Contact Action Buttons */}
            <div className="space-y-3 mb-8">
              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between bg-textMain text-white px-5 py-3.5 rounded-xl font-semibold text-sm hover:bg-accent transition-colors shadow-sm cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-indigo-200 group-hover:text-white transition-colors" />
                  <span className="truncate">{email}</span>
                </div>
                <div className="flex items-center gap-1 text-xs bg-white/20 px-2.5 py-1 rounded-md ml-2 flex-shrink-0">
                  {copiedEmail ? (
                    <>
                      <Check size={14} className="text-green-300" />
                      <span className="text-green-200 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email</span>
                    </>
                  )}
                </div>
              </button>

              {/* Optional Phone Button */}
              {phone && (
                <button
                  onClick={handleCopyPhone}
                  className="w-full flex items-center justify-between bg-indigo-50 border border-indigo-100 text-accent px-5 py-3.5 rounded-xl font-semibold text-sm hover:bg-accent hover:text-white transition-colors shadow-sm cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={18} />
                    <span>{phone}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs bg-white/50 px-2.5 py-1 rounded-md ml-2 flex-shrink-0">
                    {copiedPhone ? (
                      <>
                        <Check size={14} className="text-green-600" />
                        <span className="text-green-600 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy Phone</span>
                      </>
                    )}
                  </div>
                </button>
              )}
            </div>

            {/* Direct Send Email Link */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
              <span className="text-xs text-gray-500 font-medium">Prefer opening your email client?</span>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-indigo-700 transition-colors"
              >
                <span>Send Email directly</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
