import { Preloader } from '@/components/Preloader';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Check, Calendar, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ConsultPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    caseType: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // هنا يمكن إضافة كود للتواصل مع API لإرسال بيانات الاستمارة
    
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "تم إرسال طلبك بنجاح",
        description: "سنقوم بالتواصل معك في أقرب وقت ممكن لتحديد موعد الاستشارة.",
      });
      
      // إعادة تعيين النموذج
      setFormData({
        name: '',
        phone: '',
        email: '',
        caseType: '',
        message: '',
      });
    }, 1500);
  };

  const consultationSteps = [
    {
      title: "تعبئة النموذج",
      description: "قم بملء النموذج بالمعلومات الأساسية حول قضيتك لنتمكن من فهم احتياجاتك"
    },
    {
      title: "تحديد الموعد",
      description: "سنتواصل معك لتحديد موعد مناسب للاستشارة سواء حضورياً أو عبر وسائل الاتصال المرئي"
    },
    {
      title: "الاستشارة",
      description: "استشارة مجانية مع محامي متخصص لمدة 30 دقيقة لتقييم قضيتك وتقديم النصائح الأولية"
    },
    {
      title: "خطة العمل",
      description: "بعد الاستشارة، سنقدم لك خطة عمل واضحة والخطوات التالية في قضيتك"
    },
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      <Preloader />
      <Header />
      
      <div className="pt-28 pb-16">
        {/* بانر الصفحة */}
        <div className="relative bg-muted/30 py-16">
          <div className="container text-center">
            <h1 className="text-4xl font-bold mb-4">احجز استشارة قانونية مجانية</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              استفد من خبرتنا القانونية الواسعة، واحصل على استشارة مجانية لمدة 30 دقيقة مع محامٍ متخصص لمناقشة قضيتك وتقييم خياراتك القانونية.
            </p>
          </div>
        </div>
        
        {/* خطوات الاستشارة */}
        <div className="container py-16">
          <h2 className="text-3xl font-bold text-center mb-12">كيف تعمل الاستشارة القانونية؟</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationSteps.map((step, index) => (
              <Card key={index} className="border-primary/10 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* نموذج الاستشارة */}
        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">احجز استشارتك الآن</h2>
              <p className="text-muted-foreground">
                املأ النموذج التالي وسنقوم بالتواصل معك في أقرب وقت ممكن لتحديد موعد الاستشارة المجانية مع أحد محامينا المتخصصين.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Check className="h-5 w-5" />
                  <span>استشارة مجانية لمدة 30 دقيقة</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Check className="h-5 w-5" />
                  <span>تقييم أولي لقضيتك</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Check className="h-5 w-5" />
                  <span>نصائح قانونية من محامٍ متخصص</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Check className="h-5 w-5" />
                  <span>سرية تامة لمعلوماتك</span>
                </div>
              </div>
              
              <div className="bg-muted/40 p-6 rounded-lg mt-8">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-bold">مواعيد العمل</h3>
                    <p className="text-muted-foreground">السبت - الخميس: 9:00 ص - 5:00 م</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <MessageSquare className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-bold">اتصل بنا مباشرة</h3>
                    <p className="text-muted-foreground">+201206281444</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-6">نموذج طلب الاستشارة</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">الاسم الكامل</label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">رقم الهاتف</label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="أدخل رقم هاتفك"
                      dir="ltr"
                      className="text-right"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">البريد الإلكتروني</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="أدخل بريدك الإلكتروني"
                    dir="ltr"
                    className="text-right"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="caseType" className="text-sm font-medium">نوع القضية</label>
                  <select 
                    id="caseType"
                    name="caseType"
                    value={formData.caseType}
                    onChange={handleChange}
                    required
                    className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">اختر نوع القضية</option>
                    <option value="criminal">قضية جنائية</option>
                    <option value="family">قضية أحوال شخصية</option>
                    <option value="realestate">قضية عقارية</option>
                    <option value="labor">قضية عمالية</option>
                    <option value="commercial">قضية تجارية</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">تفاصيل القضية</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="اشرح تفاصيل قضيتك باختصار..."
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg" disabled={loading}>
                  {loading ? "جارٍ الإرسال..." : "إرسال طلب الاستشارة"}
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  جميع البيانات المقدمة تخضع لسياسة الخصوصية وسرية المعلومات
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ConsultPage;
