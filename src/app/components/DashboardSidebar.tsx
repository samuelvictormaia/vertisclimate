import { LayoutDashboard, Calculator, ShoppingCart, Sun, FileText, Settings, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation, useNavigate } from "react-router";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/platform" },
  { icon: Calculator, label: "Simulador", path: "/platform/simulator" },
  { icon: ShoppingCart, label: "Marketplace", path: "/platform/marketplace" },
  { icon: Sun, label: "Financiamento", path: "/platform/financing" },
  { icon: FileText, label: "Relatórios", path: "/platform/reports" },
  { icon: Settings, label: "Configurações", path: "/platform/settings" }
];

export function DashboardSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-800 cursor-pointer" onClick={() => navigate("/")}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Zap size={24} />
          </div>
          <div>
            <h2 className="font-bold">EnergyFin</h2>
            <p className="text-xs text-slate-400">Gestão Inteligente</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={index}
                variant={isActive ? "secondary" : "ghost"}
                className={`w-full justify-start gap-3 ${
                  isActive
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
                onClick={() => navigate(item.path)}
              >
                <Icon size={18} />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-sm font-medium mb-1">Suporte</p>
          <p className="text-xs text-slate-400 mb-3">
            Precisa de ajuda? Entre em contato com nossa equipe.
          </p>
          <Button variant="outline" size="sm" className="w-full">
            Falar com Suporte
          </Button>
        </div>
      </div>
    </aside>
  );
}
