import { Bell, Search, User, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function DashboardHeader() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const userEmail = localStorage.getItem("user_email") || "usuario@empresa.com";
  const companyName = localStorage.getItem("company_name") || "Empresa";

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_email");
    localStorage.removeItem("company_name");
    navigate("/login");
  };

  return (
    <header className="border-b bg-white px-4 sm:px-6 py-3 sm:py-4 lg:ml-0 ml-0">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
          <h1 className="font-semibold text-base sm:text-lg md:text-xl truncate">Dashboard de Energia</h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative w-32 sm:w-48 md:w-64 lg:w-80 hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder={t('common.search')}
              className="pl-10 text-sm"
            />
          </div>

          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Bell size={20} />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium truncate">{companyName}</p>
                  <p className="text-xs text-gray-500 truncate">{userEmail}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Meu Perfil</DropdownMenuItem>
              <DropdownMenuItem>{t('sidebar.settings')}</DropdownMenuItem>
              <DropdownMenuItem>{t('sidebar.support')}</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                <LogOut className="mr-2" size={16} />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
