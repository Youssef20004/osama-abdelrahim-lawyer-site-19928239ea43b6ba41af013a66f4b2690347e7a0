
import { Card } from "@/components/ui/card";

const stats = [
  { icon: "/static/Icon-1.png", count: "10K+", label: "قضية منتهية" },
  { icon: "/static/Icon-2.png", count: "12K+", label: "محامي خبير" },
  { icon: "/static/Icon-1.png", count: "15K+", label: "عميل راضٍ" },
  { icon: "/static/Icon-2.png", count: "20K+", label: "جوائز محققة" },
];

export const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src="/static/lawerbuild.webp" 
            alt="مكتب محاماة" 
            className="w-full h-[300px] md:h-[350px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-sm flex items-center justify-center">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
              {stats.map((stat, index) => (
                <Card key={index} className="py-6 px-4 text-center bg-card/50 backdrop-blur-sm border-primary/20">
                  <div className="flex justify-center items-center mb-4">
                    <img src={stat.icon} alt="Icon" className="w-10 h-10" />
                    <h3 className="text-primary text-2xl font-bold whitespace-nowrap">{stat.count}</h3>
                  </div>
                  <span className="text-foreground">{stat.label}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">ما يقوله عملاؤنا عنا</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card text-card-foreground">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="inline-block w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4">"كان عندي مشكلة كبيرة في ورث بيني وبين قرايبي، والدنيا كانت معقدة جدًا ومكنتش عارف أبدأ منين. رحت لمكتب الأستاذ أسامة، وبصراحة من أول مقابلة حسّيت إن في حد فاهم وعارف بيعمل إيه. اتصرفوا في كل حاجة قانونيًا، وريحوني من ضغط كبير. شكراً ليهم على الاحتراف والدعم"</p>
              <div className="font-bold">أحمد محمود</div>
              <div className="text-sm text-muted-foreground">رجل أعمال</div>
            </Card>

            <Card className="p-6 bg-card text-card-foreground">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="inline-block w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4">"كان عندي مشكلة قانونية في شغلي، والموضوع كان ممكن يبوظ مستقبلي المهني. تواصلت مع مكتب الأستاذ أسامة، وبصراحة اتحركوا باحترافية، واهتموا بكل التفاصيل. بفضل شغلهم المنظم، اتحلت المشكلة بطريقة قانونية من غير ما يحصل أي تصعيد. شكراً ليهم جدًا"</p>
              <div className="font-bold">سارة أحمد</div>
              <div className="text-sm text-muted-foreground">مهندسة معمارية</div>
            </Card>

            <Card className="p-6 bg-card text-card-foreground">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="inline-block w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4">"كنت وقعت في مشكلة نصب كبيرة وخسرت فيها مبلغ مش قليل، وكنت تايه ومش عارف آخد حقي إزاي. حد رشّحلي مكتب الأستاذ أسامة، ومن أول لحظة حسّيت بالثقة. اتحركوا بسرعة، وفعلاً القضية اتحلت ورجعت جزء كبير من حقي. بشكرهم بجد على وقفتهم الجادة معايا"</p>
              <div className="font-bold">خالد يوسف</div>
              <div className="text-sm text-muted-foreground">صاحب شركة</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};