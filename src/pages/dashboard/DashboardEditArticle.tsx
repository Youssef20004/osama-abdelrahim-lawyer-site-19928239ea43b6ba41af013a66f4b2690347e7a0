
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Save, XCircle, Upload } from "lucide-react";

const categories = [
  { id: 'criminal', name: 'القضايا الجنائية' },
  { id: 'family', name: 'الأحوال الشخصية' },
  { id: 'realestate', name: 'القضايا العقارية' },
  { id: 'labor', name: 'قضايا العمل' },
  { id: 'commercial', name: 'القضايا التجارية' },
  { id: 'general', name: 'مقالات عامة' },
];

// Sample articles data (in a real app, this would come from an API)
const articlesData = [
  {
    id: 1,
    title: "10 نصائح ذهبية عند كتابة العقود التجارية",
    excerpt: "تعرف على أهم النصائح القانونية لصياغة عقود تجارية متينة تحمي حقوقك وتجنبك النزاعات المستقبلية في عالم الأعمال الحديث. نقدم لك خلاصة خبراتنا في هذا المجال.",
    content: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.",
    category: "commercial",
    status: "published",
    image: "/static/new-1.png"
  },
  {
    id: 2,
    title: "كيف تحمي نفسك قانونيًا عند شراء شقة أو عقار؟",
    excerpt: "دليلك الشامل للإجراءات القانونية الواجب اتباعها قبل وأثناء وبعد شراء العقارات لتجنب المشاكل القانونية. تعرف على الأوراق المطلوبة والإجراءات الصحيحة.",
    content: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.",
    category: "realestate",
    status: "published",
    image: "/static/new-2.png"
  },
  // Add other articles data as needed...
];

// Define form schema with zod
const articleSchema = z.object({
  title: z.string().min(10, { message: "العنوان يجب أن يكون 10 أحرف على الأقل" }),
  excerpt: z.string().min(30, { message: "الملخص يجب أن يكون 30 حرفًا على الأقل" }),
  content: z.string().min(100, { message: "المحتوى يجب أن يكون 100 حرف على الأقل" }),
  category: z.string({ required_error: "يرجى اختيار فئة" }),
  status: z.enum(["published", "draft"])
});

// Define the type for our form values
type ArticleFormValues = z.infer<typeof articleSchema>;

const DashboardEditArticle = () => {
  const { id } = useParams();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Define the form
  const form = useForm<ArticleFormValues>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: "",
      excerpt: "",
      content: "",
      category: "",
      status: "draft" as "published" | "draft" // Explicitly cast as the union type
    },
  });
  
  // Fetch article data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const articleId = parseInt(id || "0");
      const foundArticle = articlesData.find(a => a.id === articleId);
      
      if (foundArticle) {
        setArticle(foundArticle);
        setImagePreview(foundArticle.image);
        
        // Set form values - making sure status is cast to the correct type
        form.reset({
          title: foundArticle.title,
          excerpt: foundArticle.excerpt,
          content: foundArticle.content,
          category: foundArticle.category,
          status: foundArticle.status as "published" | "draft"
        });
      } else {
        toast({
          variant: "destructive",
          title: "خطأ",
          description: "لم يتم العثور على المقال المطلوب"
        });
        navigate("/dashboard/articles");
      }
      
      setLoading(false);
    }, 500);
  }, [id, navigate, toast, form]);
  
  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImagePreview(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Form submission handler
  const onSubmit = (data: ArticleFormValues) => {
    console.log("Updated article data:", data);
    console.log("Image:", imagePreview);
    
    // Show a toast notification
    toast({
      title: "تم تحديث المقال بنجاح",
      description: data.status === "published" 
        ? "تم نشر المقال المحدث على الموقع" 
        : "تم حفظ التعديلات كمسودة"
    });
    
    // Navigate back to articles list
    navigate("/dashboard/articles");
  };
  
  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-screen bg-muted/20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-muted-foreground">جاري تحميل بيانات المقال...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">تعديل المقال</h1>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main content column */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>عنوان المقال</FormLabel>
                          <FormControl>
                            <Input placeholder="أدخل عنوان المقال هنا..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="excerpt"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ملخص المقال</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="اكتب ملخصًا قصيرًا للمقال..." 
                              className="resize-none h-20"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            سيظهر هذا الملخص في صفحة المقالات الرئيسية
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>محتوى المقال</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="اكتب محتوى المقال هنا..." 
                              className="resize-none min-h-[300px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar column */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>حالة النشر</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="اختر حالة النشر" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="published">نشر</SelectItem>
                              <SelectItem value="draft">حفظ كمسودة</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>الفئة</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="اختر فئة المقال" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category.id} value={category.id}>
                                  {category.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="space-y-2">
                      <Label htmlFor="image">صورة المقال</Label>
                      <div className="border-2 border-dashed rounded-md p-4 text-center cursor-pointer hover:bg-muted/50 transition-colors">
                        <input
                          id="image"
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={handleImageChange}
                        />
                        <label htmlFor="image" className="cursor-pointer block">
                          {imagePreview ? (
                            <div className="space-y-2">
                              <img
                                src={imagePreview}
                                alt="Image preview"
                                className="mx-auto h-40 w-full object-cover rounded-md"
                              />
                              <p className="text-sm text-muted-foreground">
                                انقر لتغيير الصورة
                              </p>
                            </div>
                          ) : (
                            <div className="py-4 flex flex-col items-center space-y-2">
                              <Upload className="h-8 w-8 text-muted-foreground" />
                              <p className="text-sm font-medium">
                                اضغط لاختيار صورة
                              </p>
                              <p className="text-xs text-muted-foreground">
                                JPG أو PNG بحجم أقصى 5 ميجابايت
                              </p>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/dashboard/articles")}
                  >
                    <XCircle className="ml-2 h-4 w-4" />
                    إلغاء
                  </Button>
                  <Button type="submit">
                    <Save className="ml-2 h-4 w-4" />
                    حفظ التغييرات
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DashboardEditArticle;
