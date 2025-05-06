
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, PlusCircle, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">مرحبًا، المحامي</h1>
        <Button asChild>
          <Link to="/dashboard/articles/new">
            <PlusCircle className="ml-2 h-4 w-4" />
            مقال جديد
          </Link>
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المقالات</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">9</div>
            <p className="text-xs text-muted-foreground">
              +2 منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">الزيارات اليومية</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">+120</div>
            <p className="text-xs text-muted-foreground">
              +12% منذ الأسبوع الماضي
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">موعد النشر القادم</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">الخميس، 9 مايو 2025</div>
            <p className="text-xs text-muted-foreground">
              بعد 3 أيام
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent activity */}
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>النشاط الأخير</CardTitle>
          <CardDescription>
            آخر الإجراءات التي تمت في لوحة التحكم
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="ml-4 bg-primary/10 p-2 rounded-full">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">تم إضافة مقال جديد: كيف تحمي نفسك قانونيًا عند شراء شقة أو عقار؟</p>
                <p className="text-sm text-muted-foreground">منذ 3 أيام</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="ml-4 bg-primary/10 p-2 rounded-full">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">تم تعديل مقال: 10 نصائح ذهبية عند كتابة العقود التجارية</p>
                <p className="text-sm text-muted-foreground">منذ 5 أيام</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="ml-4 bg-primary/10 p-2 rounded-full">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">وصول زيارات المقال "حقوقك القانونية في قضايا العمل والفصل التعسفي" إلى 500 زيارة</p>
                <p className="text-sm text-muted-foreground">منذ أسبوع</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;
