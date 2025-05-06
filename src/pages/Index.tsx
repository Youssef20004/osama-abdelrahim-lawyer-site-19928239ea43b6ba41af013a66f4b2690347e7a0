import { Preloader } from '@/components/Preloader';
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Articles } from "@/components/Articles";
import { Questions } from "@/components/Questions";
import { Market } from "@/components/Market";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Preloader />
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Articles />
      <Questions />
      <Footer />
    </div>
  );
};

export default Index;
