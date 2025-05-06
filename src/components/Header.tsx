import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // إغلاق القائمة عند تغيير الصفحة
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img src="/static/logo2.webp" alt="مكتب الأستاذ اسامة عبدالرحيم للمحاماه" className="h-20 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
          <nav className="flex items-center space-x-6 rtl:space-x-reverse text-foreground font-medium">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-primary font-bold' : 'hover:text-primary'}`}
            >
              الرئيسية
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-primary font-bold' : 'hover:text-primary'}`}
            >
              عن المكتب
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${isActive('/services') ? 'text-primary font-bold' : 'hover:text-primary'}`}
            >
              خدماتنا
            </Link>
            <Link 
              to="/articles" 
              className={`transition-colors ${isActive('/articles') ? 'text-primary font-bold' : 'hover:text-primary'}`}
            >
              المقالات
            </Link>

            <Link to="/login" className="text-foreground py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              لوحة التحكم
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <ThemeToggle />
            <Button asChild>
              <Link to="/consult">طلب استشارة</Link>
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 rtl:space-x-reverse lg:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-foreground">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* القائمة للأجهزة المحمولة */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container flex flex-col py-4 space-y-3 text-foreground font-medium">
            <Link 
              to="/" 
              className={`py-2 transition-colors ${isActive('/') ? 'text-primary font-bold' : 'hover:text-primary'}`}
            >
              الرئيسية
            </Link>
            <Link 
              to="/about" 
              className={`py-2 transition-colors ${isActive('/about') ? 'text-primary font-bold' : 'hover:text-primary'}`}
            >
              عن المكتب
            </Link>
            <Link 
              to="/services" 
              className={`py-2 transition-colors ${isActive('/services') ? 'text-primary font-bold' : 'hover:text-primary'}`}
            >
              خدماتنا
            </Link>
            <Link 
              to="/articles" 
              className={`py-2 transition-colors ${isActive('/articles') ? 'text-primary font-bold' : 'hover:text-primary'}`}
            >
              المقالات
            </Link>
            <Button className="w-full mt-4" asChild>
              <Link to="/consult">طلب استشارة</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
// import { ThemeToggle } from "@/components/ThemeToggle";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="fixed w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
//       <div className="container flex h-16 items-center justify-between">
//         <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
//           <Link to="/" className="flex items-center space-x-2">
//             <img src="/static/logo2.webp" alt="Logo" className="h-12 w-auto" />
//           </Link>
//         </div>
        
//         <div className="hidden md:flex items-center gap-6">
//           <NavigationMenu dir="rtl">
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <Link to="/">
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     الرئيسية
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <Link to="/about">
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     عن المحامي
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <Link to="/services">
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     الخدمات
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <Link to="/articles">
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     المقالات
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <Link to="/consult">
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     طلب استشارة
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <Link to="/login">
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     لوحة التحكم
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//           <ThemeToggle />
//         </div>
        
//         <div className="md:hidden">
//           <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </Button>
//         </div>
//       </div>
      
//       {isMenuOpen && (
//         <div className="md:hidden border-t">
//           <div className="container py-4" dir="rtl">
//             <nav className="flex flex-col space-y-2">
//               <Link to="/" className="text-foreground py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
//                 الرئيسية
//               </Link>
//               <Link to="/about" className="text-foreground py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
//                 عن المحامي
//               </Link>
//               <Link to="/services" className="text-foreground py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
//                 الخدمات
//               </Link>
//               <Link to="/articles" className="text-foreground py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
//                 المقالات
//               </Link>
//               <Link to="/consult" className="text-foreground py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
//                 طلب استشارة
//               </Link>
//               <Link to="/login" className="text-foreground py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
//                 لوحة التحكم
//               </Link>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
