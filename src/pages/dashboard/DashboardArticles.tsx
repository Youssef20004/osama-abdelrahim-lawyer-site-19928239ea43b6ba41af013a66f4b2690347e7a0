
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, Search, Pencil, Trash2, Eye } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

// Sample article data (in a real app, this would come from an API)
const initialArticles = [
  {
    id: 1,
    title: "10 نصائح ذهبية عند كتابة العقود التجارية",
    category: "commercial",
    date: "15 أبريل، 2025",
    status: "published",
  },
  {
    id: 2,
    title: "كيف تحمي نفسك قانونيًا عند شراء شقة أو عقار؟",
    category: "realestate",
    date: "10 أبريل، 2025",
    status: "published",
  },
  {
    id: 3,
    title: "الفرق بين القضايا الجنائية والمدنية في القانون المصري",
    category: "criminal",
    date: "5 أبريل، 2025",
    status: "published",
  },
  {
    id: 4,
    title: "حقوقك القانونية في قضايا العمل والفصل التعسفي",
    category: "labor",
    date: "1 أبريل، 2025",
    status: "published",
  },
  {
    id: 5,
    title: "أهم التعديلات في قانون الأحوال الشخصية الجديد",
    category: "family",
    date: "25 مارس، 2025",
    status: "published",
  },
  {
    id: 6,
    title: "إجراءات رفع دعوى قضائية في المحاكم المصرية",
    category: "general",
    date: "20 مارس، 2025",
    status: "published",
  },
  {
    id: 7,
    title: "حقوق الملكية الفكرية وحماية العلامات التجارية",
    category: "commercial",
    date: "15 مارس، 2025",
    status: "published",
  },
  {
    id: 8,
    title: "النفقة والحضانة في قضايا الطلاق",
    category: "family",
    date: "10 مارس، 2025",
    status: "published",
  },
  {
    id: 9,
    title: "كيف تؤسس شركة في مصر؟ الخطوات والإجراءات القانونية",
    category: "commercial",
    date: "5 مارس، 2025",
    status: "published",
  },
  {
    id: 10,
    title: "الإجراءات القانونية لإنشاء مؤسسة خيرية في مصر",
    category: "general",
    date: "1 مارس، 2025",
    status: "draft",
  },
];

const categories = [
  { id: 'all', name: 'جميع الفئات' },
  { id: 'criminal', name: 'القضايا الجنائية' },
  { id: 'family', name: 'الأحوال الشخصية' },
  { id: 'realestate', name: 'القضايا العقارية' },
  { id: 'labor', name: 'قضايا العمل' },
  { id: 'commercial', name: 'القضايا التجارية' },
  { id: 'general', name: 'مقالات عامة' },
];

const DashboardArticles = () => {
  const [articles, setArticles] = useState(initialArticles);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const { toast } = useToast();
  
  const handleDeleteArticle = (id: number) => {
    if (window.confirm('هل أنت متأكد من رغبتك في حذف هذا المقال؟')) {
      setArticles(articles.filter(article => article.id !== id));
      toast({
        title: "تم حذف المقال بنجاح",
        description: "تم حذف المقال من قاعدة البيانات",
      });
    }
  };
  
  const filteredArticles = articles.filter(article => {
    // Filter by search query
    if (searchQuery && !article.title.includes(searchQuery)) {
      return false;
    }
    
    // Filter by category
    if (categoryFilter !== 'all' && article.category !== categoryFilter) {
      return false;
    }
    
    // Filter by status
    if (statusFilter !== 'all' && article.status !== statusFilter) {
      return false;
    }
    
    return true;
  });

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">إدارة المقالات</h1>
        <Button asChild>
          <Link to="/dashboard/articles/new">
            <PlusCircle className="ml-2 h-4 w-4" />
            مقال جديد
          </Link>
        </Button>
      </div>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="البحث في المقالات..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
        </div>
        
        <div className="w-[180px]">
          <Select
            defaultValue="all"
            value={categoryFilter}
            onValueChange={setCategoryFilter}
          >
            <SelectTrigger>
              <SelectValue placeholder="الفئة" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="w-[180px]">
          <Select
            defaultValue="all"
            value={statusFilter}
            onValueChange={setStatusFilter}
          >
            <SelectTrigger>
              <SelectValue placeholder="الحالة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">جميع الحالات</SelectItem>
              <SelectItem value="published">منشور</SelectItem>
              <SelectItem value="draft">مسودة</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Articles table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-right">الرقم</TableHead>
              <TableHead className="text-right">عنوان المقال</TableHead>
              <TableHead className="text-right">الفئة</TableHead>
              <TableHead className="text-right">تاريخ النشر</TableHead>
              <TableHead className="text-right">الحالة</TableHead>
              <TableHead className="text-right w-[100px]">الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell>{article.id}</TableCell>
                  <TableCell className="font-medium">{article.title}</TableCell>
                  <TableCell>{getCategoryName(article.category)}</TableCell>
                  <TableCell>{article.date}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={article.status === "published" ? "default" : "outline"} 
                      className={article.status === "published" ? "bg-green-500 hover:bg-green-600" : ""}
                    >
                      {article.status === "published" ? "منشور" : "مسودة"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" asChild>
                        <Link to={`/articles/${article.id}`} target="_blank">
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <Link to={`/dashboard/articles/edit/${article.id}`}>
                          <Pencil className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleDeleteArticle(article.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                  لا توجد مقالات تطابق معايير البحث
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Article count */}
      <div className="mt-4 text-sm text-muted-foreground">
        إجمالي المقالات: {filteredArticles.length} من {articles.length}
      </div>
    </div>
  );
};

export default DashboardArticles;
