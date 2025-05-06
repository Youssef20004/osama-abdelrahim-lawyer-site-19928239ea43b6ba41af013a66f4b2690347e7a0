
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type ArticleType = {
  id: number;
  image: string;
  date: string;
  title: string;
  excerpt: string;
}

export const Articles = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const articles: ArticleType[] = [
    {
      id: 1,
      image: "/static/new-1.png",
      date: "15 أبريل، 2025",
      title: "10 نصائح ذهبية عند كتابة العقود التجارية",
      excerpt: "تعرف على أهم النصائح القانونية لصياغة عقود تجارية متينة تحمي حقوقك وتجنبك النزاعات المستقبلية"
    },
    {
      id: 2,
      image: "/static/new-2.png",
      date: "10 أبريل، 2025",
      title: "كيف تحمي نفسك قانونيًا عند شراء شقة أو عقار؟",
      excerpt: "دليلك الشامل للإجراءات القانونية الواجب اتباعها قبل وأثناء وبعد شراء العقارات لتجنب المشاكل القانونية"
    },
    {
      id: 3,
      image: "/static/photo1.webp",
      date: "5 أبريل، 2025",
      title: "الفرق بين القضايا الجنائية والمدنية في القانون المصري",
      excerpt: "شرح تفصيلي للفروق الجوهرية بين أنواع القضايا وكيفية التعامل مع كل منها بشكل صحيح"
    },
    {
      id: 4,
      image: "/static/new-1.png",
      date: "1 أبريل، 2025",
      title: "حقوقك القانونية في قضايا العمل والفصل التعسفي",
      excerpt: "تعرف على حقوقك كموظف في حالات الفصل التعسفي وكيفية المطالبة بالتعويض المناسب"
    },
    {
      id: 5,
      image: "/static/new-2.png",
      date: "25 مارس، 2025",
      title: "أهم التعديلات في قانون الأحوال الشخصية الجديد",
      excerpt: "نظرة على أحدث التعديلات التشريعية في قانون الأحوال الشخصية وتأثيرها على قضايا الأسرة"
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="articles" className="section-padding">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="max-w-lg mb-6 md:mb-0">
            <h2 className="text-primary text-2xl font-bold mb-3">المقالات القانونية</h2>
            <h3 className="text-3xl font-bold mb-4">أحدث المقالات والأخبار القانونية</h3>
            <p className="text-muted-foreground">
              نقدم لك أحدث التطورات القانونية والقرارات القضائية الهامة مع تحليل قانوني مبسط يساعدك على فهم تأثيرها على حقوقك والتزاماتك.
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" size="icon" onClick={scrollLeft} aria-label="تمرير لليسار">
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollRight} aria-label="تمرير لليمين">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div 
          ref={scrollRef} 
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {articles.map((article) => (
            <Card 
              key={article.id}
              className="min-w-[300px] max-w-[300px] flex-shrink-0 snap-start hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="pt-5">
                <p className="text-sm text-primary mb-2">{article.date}</p>
                <h4 className="text-lg font-bold mb-3 line-clamp-2">{article.title}</h4>
                <p className="text-muted-foreground text-sm line-clamp-3">{article.excerpt}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" size="sm" className="w-full gap-2 group" asChild>
                  <a href={`/articles/${article.id}`}>
                    قراءة المزيد
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button size="lg" asChild>
            <a href="/articles">عرض جميع المقالات</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
