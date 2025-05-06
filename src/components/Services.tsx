
import { Scale, FileText, Building, Users, Briefcase, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Scale className="h-12 w-12 text-primary" />,
    title: "القضايا الجنائية",
    description: "تمثيل قانوني احترافي في جميع أنواع القضايا الجنائية مع استراتيجيات دفاع قوية تحمي حقوقك.",
  },
  {
    icon: <FileText className="h-12 w-12 text-primary" />,
    title: "قضايا الأحوال الشخصية",
    description: "خبرة متخصصة في قضايا الطلاق والنفقة والحضانة والميراث مع مراعاة الجوانب الإنسانية.",
  },
  {
    icon: <Building className="h-12 w-12 text-primary" />,
    title: "المعاملات العقارية",
    description: "استشارات قانونية شاملة في شراء وبيع العقارات وصياغة العقود وحل النزاعات العقارية.",
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: "قضايا العمل",
    description: "دعم قانوني للموظفين وأصحاب العمل في نزاعات العمل والحقوق العمالية والفصل التعسفي.",
  },
  {
    icon: <Briefcase className="h-12 w-12 text-primary" />,
    title: "الاستشارات التجارية",
    description: "خدمات قانونية للشركات تشمل تأسيس الشركات وصياغة العقود التجارية وحماية العلامات التجارية.",
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "استشارات قانونية عامة",
    description: "حلول قانونية مخصصة لمختلف القضايا والاستفسارات مع نهج استباقي لحماية مصالحك.",
  }
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-2xl font-bold mb-3">خدماتنا القانونية</h2>
          <h3 className="text-3xl font-bold mb-6">أقوى المحامين للدفاع عن حقوقك</h3>
          <p className="text-muted-foreground">
            نحن نقدم لك دفاعًا قانونيًا قويًا يعتمد على الخبرة والاحترافية. نحرص على حماية مصالحك بكل دقة ونعمل على تحقيق أفضل النتائج لك. فريقنا المتخصص مستعد للوقوف بجانبك في أصعب القضايا لضمان حقوقك بكل قوة وعدالة.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "bg-background rounded-xl p-8 shadow-md hover:shadow-lg transition-all card-hover",
                "flex flex-col items-center text-center"
              )}
            >
              <div className="mb-5 p-4 rounded-full bg-primary/10">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Button variant="outline" className="mt-auto">تفاصيل أكثر</Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="text-lg">استكشف جميع خدماتنا</Button>
        </div>
      </div>
    </section>
  );
};
