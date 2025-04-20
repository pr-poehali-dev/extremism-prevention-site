import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, BookOpen, Users, AlertTriangle } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Противодействие экстремизму</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Информационный ресурс, направленный на профилактику и противодействие распространению экстремистской идеологии
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/materials">Материалы</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contacts">Сообщить о факте</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Key Info Section */}
        <section className="py-16 container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Ключевые направления</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-all hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle>Профилактика</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Информационно-просветительская работа по предупреждению распространения экстремистских идей
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="transition-all hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle>Образование</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Методические материалы и образовательные программы для формирования устойчивости к экстремистским идеологиям
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="transition-all hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle>Взаимодействие</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Координация действий государственных органов, общественных организаций и граждан
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-secondary py-12">
          <div className="container mx-auto text-center px-4">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="h-10 w-10 text-primary mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold">Заметили проявления экстремизма?</h2>
            </div>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Если вы столкнулись с фактами экстремистской деятельности или увидели запрещенные материалы в сети, сообщите об этом
            </p>
            <Button size="lg" asChild>
              <Link to="/contacts">Сообщить о факте</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
