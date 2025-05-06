
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card pt-16 pb-6 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/static/logo2.webp" alt="مكتب الأستاذ اسامة عبدالرحيم للمحاماه" className="h-14 w-auto" />
            </div>
            <p className="text-muted-foreground">
              مكتب محاماة متخصص في تقديم الخدمات القانونية المتميزة بخبرة تمتد لأكثر من 5 أعوام في مختلف مجالات القانون.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://www.facebook.com/Lawyer.Osama.Abdelrhim" target="_blank" rel="noopener noreferrer" className="bg-muted hover:bg-primary hover:text-primary-foreground rounded-full p-2 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">فيسبوك</span>
              </a>
              <a href="https://www.linkedin.com/in/osama-abdelrhim" target="_blank" rel="noopener noreferrer" className="bg-muted hover:bg-primary hover:text-primary-foreground rounded-full p-2 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">لينكدإن</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-muted hover:bg-primary hover:text-primary-foreground rounded-full p-2 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">انستغرام</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">نبذة عنا</a>
              </li>
              <li>
                <a href="/services" className="text-muted-foreground hover:text-primary transition-colors">خدماتنا القانونية</a>
              </li>
              <li>
                <a href="/articles" className="text-muted-foreground hover:text-primary transition-colors">المقالات</a>
              </li>
              <li>
                <a href="/consult" className="text-muted-foreground hover:text-primary transition-colors">طلب استشارة</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary">الخدمات القانونية</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services#criminal" className="text-muted-foreground hover:text-primary transition-colors">القضايا الجنائية</a>
              </li>
              <li>
                <a href="/services#family" className="text-muted-foreground hover:text-primary transition-colors">قضايا الأحوال الشخصية</a>
              </li>
              <li>
                <a href="/services#realestate" className="text-muted-foreground hover:text-primary transition-colors">المعاملات العقارية</a>
              </li>
              <li>
                <a href="/services#labor" className="text-muted-foreground hover:text-primary transition-colors">قضايا العمل</a>
              </li>
              <li>
                <a href="/services#commercial" className="text-muted-foreground hover:text-primary transition-colors">الاستشارات التجارية</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:osamaabdelrhim@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  osamaabdelrhim@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+201206281444" className="text-muted-foreground hover:text-primary transition-colors">
                  +201206281444
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 translate-y-1" />
                <span className="text-muted-foreground">
                  فلمنج - شارع مصطفى كامل - الإسكندرية
                </span>
              </li>
            </ul>
            
            <Button className="mt-6 w-full" asChild>
              <a href="/consult">احجز استشارة مجانية</a>
            </Button>
          </div>
        </div>
        
        <hr className="border-border my-8" />
        
        <div className="text-center text-muted-foreground text-sm">
          <p>© {currentYear} جميع الحقوق محفوظة لمكتب الأستاذ أسامة عبدالرحيم للمحاماة</p>
          <p className="mt-2">
            تصميم وتطوير <span className="text-primary font-medium">Lucrative Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
