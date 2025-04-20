import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Антиэкстремизм</span>
            </div>
            <p className="text-sm">
              Ресурс для информирования и противодействия экстремистской деятельности
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Полезные ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">О проекте</Link></li>
              <li><Link to="/materials" className="hover:text-primary transition-colors">Материалы</Link></li>
              <li><Link to="/prevention" className="hover:text-primary transition-colors">Профилактика</Link></li>
              <li><Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Контакты</h3>
            <address className="not-italic text-sm space-y-2">
              <p>Телефон доверия: 8-800-000-00-00</p>
              <p>Email: info@antiextremism.ru</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-4 text-sm text-center">
          <p>© {new Date().getFullYear()} Антиэкстремизм. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
