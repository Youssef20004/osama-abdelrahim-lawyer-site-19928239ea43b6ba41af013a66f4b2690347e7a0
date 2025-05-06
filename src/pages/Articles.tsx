import { Preloader } from '@/components/Preloader';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Calendar } from 'lucide-react';

type ArticleType = {
  id: number;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
}

const ArticlesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const articles: ArticleType[] = [
    {
      id: 1,
      image: "/static/new-1.png",
      date: "15 أبريل، 2025",
      title: "10 نصائح ذهبية عند كتابة العقود التجارية",
      excerpt: "تعرف على أهم النصائح القانونية لصياغة عقود تجارية متينة تحمي حقوقك وتجنبك النزاعات المستقبلية في عالم الأعمال الحديث. نقدم لك خلاصة خبراتنا في هذا المجال.",
      category: "commercial"
    },
    {
      id: 2,
      image: "/static/new-2.png",
      date: "10 أبريل، 2025",
      title: "كيف تحمي نفسك قانونيًا عند شراء شقة أو عقار؟",
      excerpt: "دليلك الشامل للإجراءات القانونية الواجب اتباعها قبل وأثناء وبعد شراء العقارات لتجنب المشاكل القانونية. تعرف على الأوراق المطلوبة والإجراءات الصحيحة.",
      category: "realestate"
    },
    {
      id: 3,
      image: "/static/photo1.webp",
      date: "5 أبريل، 2025",
      title: "الفرق بين القضايا الجنائية والمدنية في القانون المصري",
      excerpt: "شرح تفصيلي للفروق الجوهرية بين أنواع القضايا وكيفية التعامل مع كل منها بشكل صحيح. اكتشف الاختلافات في الإجراءات والعقوبات والمحاكم المختصة.",
      category: "criminal"
    },
    {
      id: 4,
      image: "/static/new-1.png",
      date: "1 أبريل، 2025",
      title: "حقوقك القانونية في قضايا العمل والفصل التعسفي",
      excerpt: "تعرف على حقوقك كموظف في حالات الفصل التعسفي وكيفية المطالبة بالتعويض المناسب. نستعرض أهم بنود قانون العمل المصري وكيفية تطبيقها في النزاعات العمالية.",
      category: "labor"
    },
    {
      id: 5,
      image: "/static/new-2.png",
      date: "25 مارس، 2025",
      title: "أهم التعديلات في قانون الأحوال الشخصية الجديد",
      excerpt: "نظرة على أحدث التعديلات التشريعية في قانون الأحوال الشخصية وتأثيرها على قضايا الأسرة. تعرف على حقوقك في ضوء التغييرات الجديدة في القانون.",
      category: "family"
    },
    {
      id: 6,
      image: "/static/photo1.webp",
      date: "20 مارس، 2025",
      title: "إجراءات رفع دعوى قضائية في المحاكم المصرية",
      excerpt: "دليل شامل للخطوات القانونية اللازمة لرفع دعوى قضائية في المحاكم المصرية، من تحرير الصحيفة وحتى صدور الحكم النهائي وتنفيذه.",
      category: "general"
    },
    {
      id: 7,
      image: "/static/new-1.png",
      date: "15 مارس، 2025",
      title: "حقوق الملكية الفكرية وحماية العلامات التجارية",
      excerpt: "كل ما تحتاج معرفته عن حماية علامتك التجارية وحقوق الملكية الفكرية في مصر. كيفية التسجيل والحماية القانونية والإجراءات ضد المنتهكين.",
      category: "commercial"
    },
    {
      id: 8,
      image: "/static/new-2.png",
      date: "10 مارس، 2025",
      title: "النفقة والحضانة في قضايا الطلاق",
      excerpt: "شرح مفصل لأحكام النفقة وحقوق الحضانة وفقاً لأحدث التشريعات المصرية. تعرف على العوامل التي تؤثر في تحديد النفقة ومدد الحضانة.",
      category: "family"
    },
    {
      id: 9,
      image: "/static/photo1.webp",
      date: "5 مارس، 2025",
      title: "كيف تؤسس شركة في مصر؟ الخطوات والإجراءات القانونية",
      excerpt: "دليلك الشامل لتأسيس شركة في مصر، من اختيار الشكل القانوني المناسب وحتى استخراج السجل التجاري والبطاقة الضريبية وبدء النشاط التجاري.",
      category: "commercial"
    },
  ];

  const categories = [
    { id: 'all', name: 'جميع المقالات' },
    { id: 'criminal', name: 'القضايا الجنائية' },
    { id: 'family', name: 'الأحوال الشخصية' },
    { id: 'realestate', name: 'القضايا العقارية' },
    { id: 'labor', name: 'قضايا العمل' },
    { id: 'commercial', name: 'القضايا التجارية' },
    { id: 'general', name: 'مقالات عامة' },
  ];

  const filteredArticles = articles.filter(article => {
    // تصفية حسب الفئة
    if (activeCategory !== 'all' && article.category !== activeCategory) {
      return false;
    }
    
    // تصفية حسب البحث
    if (searchQuery && !article.title.includes(searchQuery) && !article.excerpt.includes(searchQuery)) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen" dir="rtl">
      <Preloader />
      <Header />
      
      <div className="pt-28 pb-16">
        {/* بانر الصفحة */}
        <div className="relative bg-muted/30 py-16">
          <div className="container text-center">
            <h1 className="text-4xl font-bold mb-4">المقالات والأخبار القانونية</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              مجموعة من المقالات القانونية المتخصصة والأخبار المتعلقة بالتشريعات والقوانين الجديدة التي تهم المواطن المصري.
            </p>
          </div>
        </div>
        
        {/* قسم البحث والتصفية */}
        <div className="container py-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-xs">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="ابحث في المقالات..."
                className="pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* المقالات */}
        <div className="container py-8">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map(article => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3 text-sm text-primary">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 min-h-[3.5rem]">{article.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 min-h-[4.5rem]">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" className="w-full gap-2 group" asChild>
                      <a href={`/articles/${article.id}`}>
                        قراءة المزيد
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold mb-2">لا توجد نتائج</h3>
              <p className="text-muted-foreground">
                لم يتم العثور على مقالات تطابق معايير البحث الحالية. يرجى تعديل البحث أو اختيار فئة مختلفة.
              </p>
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
                عرض جميع المقالات
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArticlesPage;
