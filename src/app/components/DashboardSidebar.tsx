import { LayoutDashboard, Calculator, ShoppingCart, Sun, FileText, Settings, Zap, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function DashboardSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: t('sidebar.dashboard'), path: "/platform" },
    { icon: Calculator, label: t('sidebar.simulator'), path: "/platform/simulator" },
    { icon: ShoppingCart, label: t('sidebar.marketplace'), path: "/platform/marketplace" },
    { icon: Sun, label: t('sidebar.financing'), path: "/platform/financing" },
    { icon: FileText, label: t('sidebar.reports'), path: "/platform/reports" },
    { icon: Settings, label: t('sidebar.settings'), path: "/platform/settings" }
  ];

  const SidebarContent = () => (
    <>
      <div className="p-4 sm:p-6 border-b border-slate-800 cursor-pointer" onClick={() => { navigate("/"); setMobileOpen(false); }}>
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

      <nav className="flex-1 p-3 sm:p-4 overflow-y-auto">
        <div className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={index}
                variant={isActive ? "secondary" : "ghost"}
                className={`w-full justify-start gap-3 text-sm ${
                  isActive
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
                onClick={() => { navigate(item.path); setMobileOpen(false); }}
              >
                <Icon size={18} />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>

      <div className="p-3 sm:p-4 border-t border-slate-800">
        <div className="mb-3">
          <LanguageSwitcher />
        </div>
        <div className="bg-slate-800 rounded-lg p-3 sm:p-4">
          <p className="text-sm font-medium mb-1">{t('sidebar.support')}</p>
          <p className="text-xs text-slate-400 mb-3">
            {t('sidebar.needHelp')}
          </p>
          <Button variant="outline" size="sm" className="w-full text-xs">
            {t('sidebar.contactSupport')}
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-900 text-white hover:bg-slate-800"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        fixed lg:static
        inset-y-0 left-0
        w-64 bg-slate-900 text-white flex flex-col
        transition-transform duration-300 ease-in-out
        z-40
      `}>
        <SidebarContent />
      </aside>
    </>
  );
}
