import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Shield, Info, Book, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Антиэкстремизм</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Главная
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Информация</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem to="/about" title="О проекте" icon={<Info className="h-4 w-4 mr-2" />}>
                    Информация о целях и задачах проекта
                  </ListItem>
                  <ListItem to="/materials" title="Материалы" icon={<Book className="h-4 w-4 mr-2" />}>
                    Образовательные материалы и публикации
                  </ListItem>
                  <ListItem to="/prevention" title="Профилактика" icon={<Shield className="h-4 w-4 mr-2" />}>
                    Методы профилактики экстремизма
                  </ListItem>
                  <ListItem to="/contacts" title="Контакты" icon={<Phone className="h-4 w-4 mr-2" />}>
                    Контактная информация и форма обратной связи
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

interface ListItemProps {
  to: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const ListItem = ({ to, title, children, icon }: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
        >
          <div className="flex items-center text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default Navbar;
