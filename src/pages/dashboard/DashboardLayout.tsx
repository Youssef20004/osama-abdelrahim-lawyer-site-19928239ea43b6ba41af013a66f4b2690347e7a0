
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileText, LayoutDashboard, LogOut, PenSquare, Settings, User } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface DashboardLayoutProps {
  onLogout: () => void;
}

const DashboardLayout = ({ onLogout }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { toast } = useToast();
  
  const handleLogout = () => {
    onLogout();
    toast({
      title: "تم تسجيل الخروج بنجاح",
      description: "نتمنى أن نراك مرة أخرى قريبًا",
    });
  };
  
  return (
    <div className="flex h-screen overflow-hidden bg-background" dir="rtl">
      {/* Sidebar */}
      <aside
        className={`bg-card border-l relative transition-all duration-300 flex flex-col ${
          collapsed ? "w-[80px]" : "w-[250px]"
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <span className={`font-bold text-lg ${collapsed ? "hidden" : "block"}`}>
            لوحة التحكم
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="h-8 w-8 p-0"
          >
            {collapsed ? "→" : "←"}
          </Button>
        </div>
        
        <div className="flex-1 py-2">
          <nav className="space-y-1 px-2">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-foreground"
                } ${collapsed ? "justify-center" : ""}`
              }
            >
              <LayoutDashboard className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>الرئيسية</span>}
            </NavLink>
            
            <NavLink
              to="/dashboard/articles"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-foreground"
                } ${collapsed ? "justify-center" : ""}`
              }
            >
              <FileText className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>المقالات</span>}
            </NavLink>
            
            <NavLink
              to="/dashboard/articles/new"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-foreground"
                } ${collapsed ? "justify-center" : ""}`
              }
            >
              <PenSquare className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>مقال جديد</span>}
            </NavLink>
          </nav>
          
          <Separator className="my-4" />
          
          <nav className="space-y-1 px-2">
            <NavLink
              to="#"
              className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-muted text-foreground"
              style={{ justifyContent: collapsed ? "center" : "" }}
            >
              <User className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>الملف الشخصي</span>}
            </NavLink>
            <NavLink
              to="#"
              className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-muted text-foreground"
              style={{ justifyContent: collapsed ? "center" : "" }}
            >
              <Settings className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>الإعدادات</span>}
            </NavLink>
          </nav>
        </div>
        
        <div className="p-4 border-t">
          <Button
            variant="ghost"
            className={`w-full justify-start text-red-500 hover:text-red-500 hover:bg-red-50 ${
              collapsed ? "justify-center px-0" : ""
            }`}
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span className="mr-2">تسجيل الخروج</span>}
          </Button>
        </div>
      </aside>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-14 border-b bg-card/50 flex items-center justify-between px-4">
          <div>
            <h1 className="text-lg font-medium">لوحة تحكم المحامي</h1>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <a href="/" target="_blank">زيارة الموقع</a>
            </Button>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 overflow-auto bg-muted/20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
