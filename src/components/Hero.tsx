
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        <img 
          src="/static/office.webp" 
          alt="مكتب محاماة" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 space-y-6 text-right animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground">
            مكتب الأستاذ <span className="text-primary">اسامة عبدالرحيم</span> للمحاماه
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            مكتبنا في الإسكندرية تحت إشراف الأستاذ أسامة عبدالرحيم الحاصل على درجة الماجستير في القانون العام 
            يقدم خدمات قانونية متخصصة باحترافية عالية
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="text-lg">
              طلب استشارة قانونية
            </Button>
            <Button size="lg" variant="outline" className="text-lg group">
              تعرف علينا أكثر
              <ChevronLeft className="ms-2 h-5 w-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex gap-6 pt-6">
            <a href="https://www.facebook.com/Lawyer.Osama.Abdelrhim" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/osama-abdelrhim" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://wa.me/201206281444" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <div className="relative w-[260px] h-[500px] md:w-[320px] md:h-[580px] animate-scale-in">
            <div className="absolute inset-0 bg-primary rounded-2xl rotate-3"></div>
            <img 
              src="/static/osama.webp" 
              alt="الأستاذ اسامة عبدالرحيم" 
              className="relative z-10 object-cover w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
