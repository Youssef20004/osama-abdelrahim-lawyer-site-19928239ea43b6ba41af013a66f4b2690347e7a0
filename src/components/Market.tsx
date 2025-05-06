
import { ArrowRight } from 'lucide-react';

export const Market = () => {
  return (
    <section className="market">
      <div className="lawyer-container">
        <h1 className="title text-center text-2xl md:text-2xl lg:text-3xl">احجز استشارتك القانونية مجانًا</h1>
        <p className="dest text-center">
          فريقنا من المحامين الخبراء جاهز يسمعك باهتمام، ويفهم تفاصيل موقفك عشان نقدر نساعدك بأفضل شكل
        </p>

        <div className="cards flex flex-wrap justify-center gap-5 max-w-[1200px] xl:mx-[45px] 2xl:mx-[640px]">
          <a href="#" className="link-card">
            <div className="lawyer-card bg-lawyer-cardBg rounded-xl w-full max-w-[350px] p-5 shadow-lg">
              <img src="/static/Untitled+design+(4).png" alt="Scheduling" className="w-full h-auto rounded-lg" />
              <address className="text-black text-2xl">حدد الموعد اللي يناسبك</address>
              <p className="text-black">
                اختار اليوم والساعة اللي تريحك، ومحامينا هيكون متوفر يناقش قضيتك معاك بكل اهتمام
              </p>

              <a href="#" className="more flex items-center justify-center mt-4 text-lawyer-gold">
                <ArrowRight className="mr-1" />
                قراءة المزيد
              </a>
            </div>
          </a>
          
          <a href="#" className="link-card">
            <div className="lawyer-card bg-lawyer-cardBg rounded-xl w-full max-w-[350px] p-5 shadow-lg">
              <img src="/static/Untitled+design+(5).png" alt="In-person consultation" className="w-full h-auto rounded-lg" />
              <address className="text-black text-2xl">استشارتك القانونية وجهًا لوجه</address>
              <p className="text-black">
                في الموعد المحدد، هتقابل محامي متخصص يجاوب على أسئلتك ويوضح لك حقوقك وخياراتك القانونية.
              </p>

              <a href="#" className="more flex items-center justify-center mt-4 text-lawyer-gold">
                <ArrowRight className="mr-1" />
                قراءة المزيد
              </a>
            </div>
          </a>
          
          <a href="#" className="link-card">
            <div className="lawyer-card bg-lawyer-cardBg rounded-xl w-full max-w-[350px] p-5 shadow-lg">
              <img src="/static/Untitled+design+(6).png" alt="Legal plan" className="w-full h-auto rounded-lg" />
              <address className="text-black text-2xl">خطتك القانونية للنجاح</address>
              <p className="text-black">
                بعد ما نسمعك ونفهم كل التفاصيل، هنشتغل على إعداد خطة قانونية مخصصة تناسب حالتك وتحقق أفضل نتيجة ليك
              </p>
              
              <a href="#" className="more flex items-center justify-center mt-4 text-lawyer-gold">
                <ArrowRight className="mr-1" />
                قراءة المزيد
              </a>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
