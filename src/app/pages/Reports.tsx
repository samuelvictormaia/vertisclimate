import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { FileText, Download, Calendar as CalendarIcon, TrendingUp, Zap, DollarSign } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const reportTypes = [
  {
    id: "consumption",
    title: "Relatório de Consumo",
    description: "Análise detalhada do consumo energético por período",
    icon: Zap,
    color: "blue"
  },
  {
    id: "savings",
    title: "Relatório de Economia",
    description: "Demonstrativo de economia gerada e comparativo histórico",
    icon: TrendingUp,
    color: "green"
  },
  {
    id: "financial",
    title: "Relatório Financeiro",
    description: "Custos, investimentos e retorno financeiro",
    icon: DollarSign,
    color: "purple"
  },
  {
    id: "contracts",
    title: "Relatório de Contratos",
    description: "Status e vencimentos de contratos ativos",
    icon: FileText,
    color: "orange"
  }
];

const recentReports = [
  {
    name: "Consumo_Marco_2026.pdf",
    type: "Consumo",
    date: "2026-04-15",
    size: "2.4 MB"
  },
  {
    name: "Economia_Q1_2026.pdf",
    type: "Economia",
    date: "2026-04-10",
    size: "1.8 MB"
  },
  {
    name: "Financeiro_2025_Anual.pdf",
    type: "Financeiro",
    date: "2026-01-05",
    size: "3.2 MB"
  },
  {
    name: "Contratos_Fevereiro_2026.pdf",
    type: "Contratos",
    date: "2026-03-01",
    size: "1.5 MB"
  }
];

export function Reports() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Relatórios</h1>
          <p className="text-gray-600">Gere e baixe relatórios personalizados sobre sua gestão energética</p>
        </div>

        {/* Report Generator */}
        <Card>
          <CardHeader>
            <CardTitle>Gerar Novo Relatório</CardTitle>
            <CardDescription>Selecione o tipo e período para gerar seu relatório</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select defaultValue="consumption">
                <SelectTrigger>
                  <SelectValue placeholder="Tipo de Relatório" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consumption">Consumo</SelectItem>
                  <SelectItem value="savings">Economia</SelectItem>
                  <SelectItem value="financial">Financeiro</SelectItem>
                  <SelectItem value="contracts">Contratos</SelectItem>
                  <SelectItem value="complete">Completo</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="monthly">
                <SelectTrigger>
                  <SelectValue placeholder="Período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Mensal</SelectItem>
                  <SelectItem value="quarterly">Trimestral</SelectItem>
                  <SelectItem value="yearly">Anual</SelectItem>
                  <SelectItem value="custom">Personalizado</SelectItem>
                </SelectContent>
              </Select>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="justify-start text-left font-normal">
                    <CalendarIcon className="mr-2" size={16} />
                    {date ? format(date, "PPP", { locale: ptBR }) : "Selecionar data"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => newDate && setDate(newDate)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <Button className="w-full">
                <FileText className="mr-2" size={18} />
                Gerar Relatório
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Report Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reportTypes.map((report) => {
            const Icon = report.icon;
            const colorClasses = {
              blue: "bg-blue-100 text-blue-600",
              green: "bg-green-100 text-green-600",
              purple: "bg-purple-100 text-purple-600",
              orange: "bg-orange-100 text-orange-600"
            }[report.color];

            return (
              <Card key={report.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 ${colorClasses} rounded-lg flex items-center justify-center mb-3`}>
                    <Icon size={24} />
                  </div>
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {report.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" size="sm">
                    Gerar
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Relatórios Recentes</CardTitle>
                <CardDescription>Acesse seus relatórios gerados anteriormente</CardDescription>
              </div>
              <Button variant="outline">Ver Todos</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <FileText className="text-gray-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">{report.name}</p>
                      <p className="text-sm text-gray-500">
                        {report.type} • {format(new Date(report.date), "dd/MM/yyyy")} • {report.size}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download size={18} />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Export Options */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Exportação Automática</h3>
                <p className="text-sm text-blue-800">
                  Configure o envio automático de relatórios mensais por e-mail
                </p>
              </div>
              <Button variant="default">
                Configurar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
