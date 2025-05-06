import { Preloader } from '@/components/Preloader';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Award, Users, BookOpen, Scale, Clock } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    {
      value: "+15",
      label: "سنة خبرة",
      icon: <Clock className="h-8 w-8 text-primary" />
    },
    {
      value: "+500",
      label: "قضية ناجحة",
      icon: <Scale className="h-8 w-8 text-primary" />
    },
    {
      value: "+10",
      label: "محامين متخصصين",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      value: "+300",
      label: "عميل راضٍ",
      icon: <Award className="h-8 w-8 text-primary" />
    },
  ];

  const values = [
    {
      title: "الاحترافية",
      description: "نلتزم بأعلى معايير الممارسة القانونية ونسعى دائمًا للتميز في كل ما نقوم به."
    },
    {
      title: "النزاهة",
      description: "نؤمن بقيم الصدق والأمانة والشفافية في التعامل مع عملائنا وزملائنا والمحاكم."
    },
    {
      title: "الالتزام",
      description: "نكرس جهودنا وخبراتنا لخدمة مصالح عملائنا وتحقيق أفضل النتائج الممكنة."
    },
    {
      title: "التفاني",
      description: "نعمل بجد واجتهاد لدراسة كل قضية والإلمام بكافة جوانبها لضمان تقديم أفضل تمثيل قانوني."
    },
    {
      title: "الابتكار",
      description: "نتبنى الحلول الإبداعية ونطور من أساليبنا باستمرار لمواجهة التحديات القانونية المعقدة."
    },
    {
      title: "السرية",
      description: "نحافظ بشكل صارم على خصوصية وسرية معلومات عملائنا وقضاياهم في جميع الأوقات."
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
            <h1 className="text-4xl font-bold mb-4">نبذة عن المكتب</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              تعرف على مكتب الأستاذ أسامة عبدالرحيم للمحاماة وفريق العمل والرؤية التي نسعى لتحقيقها في المجال القانوني.
            </p>
          </div>
        </div>
        
        {/* رؤيتنا */}
        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">مكتب محاماة رائد يمثل مستقبل الخدمات القانونية في مصر</h2>
              <p className="text-muted-foreground mb-6">
                تأسس مكتب الأستاذ أسامة عبدالرحيم للمحاماة عام 2020، وخلال هذه السنوات اكتسب سمعة مرموقة كأحد المكاتب القانونية الرائدة في مصر، متخصصًا في مختلف المجالات القانونية.
              </p>
              <p className="text-muted-foreground mb-10">
                يتميز المكتب بفهم عميق للنظام القانوني المصري، مع القدرة على تقديم استشارات قانونية دقيقة وحلول عملية تتناسب مع احتياجات العملاء المتنوعة. نؤمن بأن النجاح القانوني يتطلب مزيجًا من المعرفة النظرية العميقة والتطبيق العملي الفعال.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center p-4 bg-primary/5 border-primary/20">
                    <CardContent className="p-0 space-y-2">
                      <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-background mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <a href="/consult">طلب استشارة قانونية</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/services">استكشف خدماتنا</a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute w-full h-full bg-primary/10 rounded-2xl -translate-x-4 translate-y-4"></div>
              <img 
                src="/static/osama-3.jpg"
                alt="الأستاذ أسامة عبدالرحيم" 
                className="rounded-2xl w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
        
        {/* قيمنا */}
        <div className="bg-muted/30 py-16">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">قيمنا ومبادئنا</h2>
              <p className="text-muted-foreground">
                تحكم هذه المبادئ والقيم كل عمل نقوم به وكل قرار نتخذه، وهي تمثل الأساس الذي بنينا عليه سمعتنا وثقة عملائنا.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-background hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* مؤسس المكتب */}
        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">الأستاذ أسامة عبدالرحيم</h2>
              <h3 className="text-xl text-primary mb-4">مؤسس المكتب - محامي بالنقض والدستورية العليا</h3>
              
              <div className="space-y-4 mb-6 text-muted-foreground">
                <p>
                  حاصل على درجة الماجستير في القانون العام، وعضو نقابة المحامين المصرية منذ عام 2019. تمتد خبرته القانونية لأكثر من 5 أعوام في مختلف فروع القانون.
                </p>
                <p>
                  عمل الأستاذ أسامة في العديد من القضايا البارزة، وحقق نجاحات كبيرة في مجالات متنوعة مثل القضايا الجنائية، الأحوال الشخصية، والنزاعات التجارية والعقارية.
                </p>
                <p>
                  يؤمن بأهمية التطوير المستمر، ويحرص على متابعة أحدث التشريعات والتطورات القانونية، مع المشاركة في العديد من المؤتمرات والندوات القانونية محلياً ودولياً.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <Button className="gap-2" asChild>
                  <a href="tel:+201206281444">
                    <Phone className="h-5 w-5" />
                    تواصل مباشرة: +201206281444
                  </a>
                </Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="/consult">
                    <BookOpen className="h-5 w-5" />
                    احجز استشارة قانونية
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute w-full h-full bg-primary/10 rounded-full -translate-x-4 translate-y-4"></div>
              <img 
                src="/static/osama.webp"
                alt="الأستاذ أسامة عبدالرحيم" 
                className="rounded-full w-full h-auto aspect-square object-cover object-top relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
