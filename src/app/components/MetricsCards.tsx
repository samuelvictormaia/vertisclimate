import { TrendingDown, Zap, FileText, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useTranslation } from "react-i18next";

export function MetricsCards() {
  const { t } = useTranslation();

  const metrics = [
    {
      title: t('dashboard.totalSavings'),
      value: "R$ 1.247.890",
      change: "+23,5%",
      icon: DollarSign,
      trend: "up",
      description: "vs. mês anterior"
    },
    {
      title: t('dashboard.activeContracts'),
      value: "38",
      change: "+3",
      icon: FileText,
      trend: "up",
      description: "novos este mês"
    },
    {
      title: t('dashboard.totalConsumption'),
      value: "2.847 MWh",
      change: "-12,3%",
      icon: Zap,
      trend: "down",
      description: "redução mensal"
    },
    {
      title: t('dashboard.avgSavings'),
      value: "32,8%",
      change: "+4,2%",
      icon: TrendingDown,
      trend: "up",
      description: "por contrato"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">
                {metric.title}
              </CardTitle>
              <Icon className="text-gray-400" size={18} />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">{metric.value}</div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mt-2">
                <span className={`text-xs sm:text-sm font-medium ${
                  metric.trend === "up" ? "text-green-600" : "text-blue-600"
                }`}>
                  {metric.change}
                </span>
                <span className="text-xs sm:text-sm text-gray-500">{metric.description}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
