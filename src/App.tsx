
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import ArticlesPage from "./pages/Articles";
import ConsultPage from "./pages/Consult";
import NotFound from "./pages/NotFound";
import { ChatButton } from "./components/ChatButton";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import DashboardArticles from "./pages/dashboard/DashboardArticles";
import DashboardNewArticle from "./pages/dashboard/DashboardNewArticle";
import DashboardEditArticle from "./pages/dashboard/DashboardEditArticle";
import Login from "./pages/Login";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Check if lawyer is logged in
    const authStatus = localStorage.getItem("lawyer-auth");
    if (authStatus === "authenticated") {
      setIsAuthenticated(true);
    }
  }, []);

  // Function to handle login
  const handleLogin = (password: string) => {
    // Simple password validation - in a real app this would be more secure
    if (password === "lawyer123") {
      localStorage.setItem("lawyer-auth", "authenticated");
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("lawyer-auth");
    setIsAuthenticated(false);
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="lawyer-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/consult" element={<ConsultPage />} />
              <Route path="/login" element={<Login onLogin={handleLogin} isAuthenticated={isAuthenticated} />} />
              
              {/* Dashboard protected routes */}
              <Route path="/dashboard" element={
                isAuthenticated ? 
                <DashboardLayout onLogout={handleLogout} /> : 
                <Navigate to="/login" replace />
              }>
                <Route index element={<DashboardHome />} />
                <Route path="articles" element={<DashboardArticles />} />
                <Route path="articles/new" element={<DashboardNewArticle />} />
                <Route path="articles/edit/:id" element={<DashboardEditArticle />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ChatButton />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
