import { TrendingDown, Zap, FileText, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const metrics = [
  {
    title: "Economia Total",
    value: "R$ 1.247.890",
    change: "+23,5%",
    icon: DollarSign,
    trend: "up",
    description: "vs. mês anterior"
  },
  {
    title: "Contratos Ativos",
    value: "38",
    change: "+3",
    icon: FileText,
    trend: "up",
    description: "novos este mês"
  },
  {
    title: "Consumo Total",
    value: "2.847 MWh",
    change: "-12,3%",
    icon: Zap,
    trend: "down",
    description: "redução mensal"
  },
  {
    title: "Média de Economia",
    value: "32,8%",
    change: "+4,2%",
    icon: TrendingDown,
    trend: "up",
    description: "por contrato"
  }
];

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {metric.title}
              </CardTitle>
              <Icon className="text-gray-400" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center gap-2 mt-2">
                <span className={`text-sm font-medium ${
                  metric.trend === "up" ? "text-green-600" : "text-blue-600"
                }`}>
                  {metric.change}
                </span>
                <span className="text-sm text-gray-500">{metric.description}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
