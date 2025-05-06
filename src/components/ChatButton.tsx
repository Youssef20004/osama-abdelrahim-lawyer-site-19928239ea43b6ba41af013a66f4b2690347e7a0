
import { MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ChatDialog } from "./ChatDialog";

export const ChatButton = () => {
  const [open, setOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Show button with animation after a delay
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Button 
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 left-6 rounded-full h-16 w-16 shadow-lg 
          flex items-center justify-center p-0 z-50 bg-gradient-to-br 
          from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70
          transition-all duration-300 border-2 border-primary/20
          ${showAnimation ? 'animate-scale-in' : 'opacity-0'}`}
        aria-label="افتح المحادثة"
      >
        <div className="relative">
          <MessageSquareText className="h-7 w-7 text-white" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
        </div>
      </Button>
      <ChatDialog open={open} setOpen={setOpen} />
    </>
  );
};
