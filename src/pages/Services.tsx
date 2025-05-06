import { Preloader } from '@/components/Preloader';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Scale, FileText, Building, Users, Briefcase, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const ServicesPage = () => {
  const services = [
    {
      id: "criminal",
      icon: <Scale className="h-16 w-16 text-primary" />,
      title: "القضايا الجنائية",
      description: "نقدم تمثيلاً قانونياً احترافياً في جميع أنواع القضايا الجنائية. يتميز فريقنا بخبرة واسعة في بناء استراتيجيات دفاعية قوية تهدف إلى حماية حقوقك.",
      features: [
        "الدفاع في قضايا الجنح والجنايات",
        "تقديم الاستشارات القانونية في المسائل الجنائية",
        "التمثيل أمام النيابة العامة ومحاكم الجنايات",
        "إعداد المذكرات القانونية وتقديم الطعون",
        "متابعة إجراءات الإفراج والتحقيقات الأولية"
      ],
    },
    {
      id: "family",
      icon: <FileText className="h-16 w-16 text-primary" />,
      title: "قضايا الأحوال الشخصية",
      description: "نتعامل مع قضايا الأحوال الشخصية بحساسية واحترافية، مع مراعاة الجوانب الإنسانية والاجتماعية إلى جانب الجوانب القانونية.",
      features: [
        "قضايا الطلاق والخلع والتطليق",
        "دعاوى النفقة والحضانة والرؤية",
        "إثبات النسب وتصحيح الأسماء",
        "الوصاية والولاية على المال والنفس",
        "قسمة التركات والمواريث"
      ],
    },
    {
      id: "realestate",
      icon: <Building className="h-16 w-16 text-primary" />,
      title: "المعاملات العقارية",
      description: "نقدم استشارات قانونية شاملة في مجال المعاملات العقارية، بما في ذلك صياغة العقود وفحص الملكية وحل النزاعات العقارية.",
      features: [
        "صياغة ومراجعة عقود البيع والشراء والإيجار",
        "فحص الملكية والتحقق من سلامة الإجراءات",
        "تمثيل الموكلين في نزاعات الملكية العقارية",
        "التعامل مع قضايا الشهر العقاري",
        "المساعدة في إجراءات التسجيل ونقل الملكية"
      ],
    },
    {
      id: "labor",
      icon: <Users className="h-16 w-16 text-primary" />,
      title: "قضايا العمل",
      description: "نوفر دعماً قانونياً متكاملاً للموظفين وأصحاب العمل في مختلف نزاعات العمل وقضايا الحقوق العمالية والفصل التعسفي.",
      features: [
        "تمثيل العمال في قضايا الفصل التعسفي",
        "مساعدة أصحاب العمل في صياغة عقود العمل",
        "التعامل مع نزاعات التأمينات الاجتماعية",
        "استرداد مستحقات العمال ومكافآت نهاية الخدمة",
        "تمثيل الموكلين أمام مكاتب العمل والمحاكم العمالية"
      ],
    },
    {
      id: "commercial",
      icon: <Briefcase className="h-16 w-16 text-primary" />,
      title: "الاستشارات التجارية",
      description: "نقدم خدمات قانونية متكاملة للشركات والمؤسسات التجارية، من تأسيس الشركات إلى حماية العلامات التجارية وحل النزاعات.",
      features: [
        "تأسيس الشركات بمختلف أنواعها القانونية",
        "صياغة ومراجعة العقود التجارية",
        "حماية العلامات التجارية وحقوق الملكية الفكرية",
        "تمثيل الشركات في النزاعات التجارية",
        "الاستشارات القانونية في مجال الضرائب والتمويل"
      ],
    },
    {
      id: "general",
      icon: <Shield className="h-16 w-16 text-primary" />,
      title: "استشارات قانونية عامة",
      description: "نقدم حلولاً قانونية مخصصة لمختلف القضايا والاستفسارات، مع اتباع نهج استباقي لحماية مصالح عملائنا في مختلف المجالات.",
      features: [
        "تقديم الرأي القانوني في مختلف المسائل",
        "صياغة ومراجعة العقود والاتفاقيات",
        "المساعدة في التوفيق والوساطة لحل النزاعات",
        "تقديم الدعم القانوني للأفراد والشركات",
        "إعداد الدراسات القانونية المتخصصة"
      ],
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
            <h1 className="text-4xl font-bold mb-4">خدماتنا القانونية</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              نقدم لعملائنا مجموعة شاملة من الخدمات القانونية المتخصصة التي تلبي احتياجاتهم المختلفة، مع التركيز على الاحترافية والدقة في كل تفاصيل القضية.
            </p>
          </div>
        </div>
        
        {/* الخدمات القانونية */}
        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service) => (
              <Card key={service.id} id={service.id} className="overflow-hidden border-primary/10 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 px-6 md:px-8">
                  <div className="flex gap-6 items-start">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      
                      <h3 className="text-lg font-semibold mb-3">ما نقدمه في {service.title}:</h3>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/30 p-6">
                  <Button size="lg" className="w-full" asChild>
                    <a href="/consult">احصل على استشارة في {service.title}</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* دعوة للعمل */}
        <div className="bg-primary/10 py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">نحن هنا لمساعدتك في قضيتك القانونية</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              سواء كنت فرداً أو شركة، نحن نلتزم بتقديم خدمات قانونية متميزة تساعدك على تحقيق أهدافك وحماية حقوقك. تواصل معنا اليوم لمناقشة كيف يمكننا مساعدتك.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/consult">احجز استشارة مجانية</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+201206281444">اتصل بنا: +201206281444</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
