
import { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type QuestionType = {
  question: string;
  answer: string;
}

export const Questions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const questions: QuestionType[] = [
    {
      question: "ما هي خطوات الاستشارة الأولية؟",
      answer: "الاستشارة الأولية مجانية لمدة 30 دقيقة، خلالها سنستمع لتفاصيل قضيتك القانونية، ونشرح لك إذا كان مكتبنا مناسباً للتعامل مع قضيتك. يمكنك حجز الاستشارة من خلال الموقع أو بالاتصال بنا مباشرة."
    },
    {
      question: "كيف يتم حساب أتعاب المحاماة؟",
      answer: "تختلف الأتعاب حسب نوع القضية، وتعقيدها، والوقت المتوقع لإنهائها. في الاستشارة الأولية نقدم لك تصوراً مبدئياً للتكاليف، سواء كانت نسبة من قيمة القضية، أو أتعاب ثابتة متفق عليها."
    },
    {
      question: "هل تتعاملون مع قضايا خارج مدينتكم أو في محافظات أخرى؟",
      answer: "نعم، مكتبنا يقدم خدمات قانونية في جميع المحافظات، ويمكننا أيضاً تمثيل موكلينا في بعض القضايا الدولية إذا تطلب الأمر ذلك. فريقنا لديه خبرة في التنسيق مع مكاتب قانونية خارجية إذا لزم الأمر."
    },
    {
      question: "هل يمكنني التحدث مع محامٍ على الفور؟",
      answer: "في الحالات العاجلة أو القضايا المستعجلة، نوفر خدمة الاتصال الفوري بأحد المحامين المتخصصين. يمكنك التواصل معنا على الخط الساخن أو إرسال رسالة واتساب وسنعاود الاتصال بك خلال دقائق."
    },
    {
      question: "هل السرية مضمونة في التعامل مع المكتب؟",
      answer: "بالتأكيد، جميع المعلومات التي تشاركها معنا سرية تماماً ويتم التعامل معها وفقاً لأعلى معايير الخصوصية القانونية."
    }
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="questions" className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-2xl font-bold mb-3">الأسئلة الشائعة</h2>
          <h3 className="text-3xl font-bold mb-6">استفسارات قانونية مهمة</h3>
          <p className="text-muted-foreground">
            نجيب على استفساراتك القانونية الأكثر شيوعاً. إذا كان لديك سؤال آخر، لا تتردد في التواصل معنا مباشرة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col space-y-6">
            {questions.slice(0, Math.ceil(questions.length / 2)).map((q, index) => (
              <Card key={index} className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'shadow-lg border-primary/50' : 'shadow-sm'}`}>
                <div 
                  className="p-5 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <h4 className="text-lg font-medium">{q.question}</h4>
                  <ChevronDown 
                    className={`transition-transform duration-300 text-primary ${activeIndex === index ? 'rotate-180' : ''}`} 
                  />
                </div>
                
                <CardContent className={`px-5 transition-all duration-300 ${activeIndex === index ? 'pb-5 pt-0' : 'h-0 p-0 overflow-hidden'}`}>
                  <p className="text-muted-foreground">{q.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col space-y-6">
            {questions.slice(Math.ceil(questions.length / 2)).map((q, index) => (
              <Card key={index + Math.ceil(questions.length / 2)} className={`overflow-hidden transition-all duration-300 ${activeIndex === index + Math.ceil(questions.length / 2) ? 'shadow-lg border-primary/50' : 'shadow-sm'}`}>
                <div 
                  className="p-5 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAnswer(index + Math.ceil(questions.length / 2))}
                >
                  <h4 className="text-lg font-medium">{q.question}</h4>
                  <ChevronDown 
                    className={`transition-transform duration-300 text-primary ${activeIndex === index + Math.ceil(questions.length / 2) ? 'rotate-180' : ''}`} 
                  />
                </div>
                
                <CardContent className={`px-5 transition-all duration-300 ${activeIndex === index + Math.ceil(questions.length / 2) ? 'pb-5 pt-0' : 'h-0 p-0 overflow-hidden'}`}>
                  <p className="text-muted-foreground">{q.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h4 className="text-xl font-bold mb-4">هل لديك سؤال آخر؟</h4>
          <Button size="lg" className="gap-2" asChild>
            <a href="/consult">
              <MessageSquare className="h-5 w-5" />
              احجز استشارة مجانية
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
