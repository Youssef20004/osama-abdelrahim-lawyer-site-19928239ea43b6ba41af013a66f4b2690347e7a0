
import { useEffect, useState } from 'react';

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-lawyer-bg grid place-content-center z-50 transition-opacity duration-250 overflow-hidden ${!isLoading ? 'invisible opacity-0' : ''}`}>
      <div className="relative">
        <img 
          src="/static/logo2.webp" 
          alt="Osama Abdelrahim Law Office" 
          width="150" 
          height="150" 
          className="animate-bounce"
          loading="lazy"
        />
        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-4/5 h-[10px] bg-black blur-sm -z-10 animate-dropShadow"></div>
      </div>
    </div>
  );
};
