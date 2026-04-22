import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Sun, TrendingUp, Calendar, DollarSign, Zap, CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function SolarFinancing() {
  const [systemSize, setSystemSize] = useState("");
  const [installationCost, setInstallationCost] = useState("");
  const [term, setTerm] = useState("60");
  const [results, setResults] = useState<any>(null);

  const calculateFinancing = () => {
    const cost = parseFloat(installationCost);
    if (!cost) return;

    const termMonths = parseInt(term);
    const interestRate = 0.012; // 1.2% a.m.
    const monthlyPayment = (cost * interestRate * Math.pow(1 + interestRate, termMonths)) /
                          (Math.pow(1 + interestRate, termMonths) - 1);

    const monthlyGeneration = parseFloat(systemSize) * 120; // kWh per month
    const monthlySavings = monthlyGeneration * 0.85; // R$/kWh
    const paybackMonths = cost / monthlySavings;

    setResults({
      monthlyPayment,
      totalAmount: monthlyPayment * termMonths,
      monthlyGeneration,
      monthlySavings,
      paybackMonths,
      roi: ((monthlySavings * 300 - cost) / cost) * 100 // 25 year ROI
    });
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Financiamento de Energia Solar</h1>
          <p className="text-gray-600">Simule o financiamento do seu sistema de energia solar com taxas especiais</p>
        </div>

        <Tabs defaultValue="simulator" className="space-y-6">
          <TabsList>
            <TabsTrigger value="simulator">Simulador</TabsTrigger>
            <TabsTrigger value="benefits">Benefícios</TabsTrigger>
            <TabsTrigger value="process">Como Funciona</TabsTrigger>
          </TabsList>

          <TabsContent value="simulator" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dados do Projeto Solar</CardTitle>
                  <CardDescription>Preencha as informações do sistema</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="systemSize">Potência do Sistema (kWp)</Label>
                    <Input
                      id="systemSize"
                      type="number"
                      placeholder="Ex: 100"
                      value={systemSize}
                      onChange={(e) => setSystemSize(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="installationCost">Custo de Instalação (R$)</Label>
                    <Input
                      id="installationCost"
                      type="number"
                      placeholder="Ex: 350000"
                      value={installationCost}
                      onChange={(e) => setInstallationCost(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="term">Prazo do Financiamento</Label>
                    <Select value={term} onValueChange={setTerm}>
                      <SelectTrigger id="term">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="36">36 meses (3 anos)</SelectItem>
                        <SelectItem value="48">48 meses (4 anos)</SelectItem>
                        <SelectItem value="60">60 meses (5 anos)</SelectItem>
                        <SelectItem value="84">84 meses (7 anos)</SelectItem>
                        <SelectItem value="120">120 meses (10 anos)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-900">
                      <strong>Taxa de juros:</strong> 1,2% a.m. (15,39% a.a.)
                    </p>
                    <p className="text-sm text-blue-800 mt-1">
                      Taxas especiais para projetos de energia renovável
                    </p>
                  </div>

                  <Button className="w-full" size="lg" onClick={calculateFinancing}>
                    <Sun className="mr-2" size={20} />
                    Calcular Financiamento
                  </Button>
                </CardContent>
              </Card>

              {results ? (
                <div className="space-y-4">
                  <Card className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
                    <CardHeader>
                      <CardTitle className="text-white">Parcela Mensal</CardTitle>
                      <CardDescription className="text-yellow-100">
                        Durante {term} meses
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold mb-2">
                        R$ {results.monthlyPayment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </div>
                      <p className="text-yellow-100">por mês</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-center justify-between pb-4 border-b">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <Sun className="text-green-600" size={20} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Geração Mensal Estimada</p>
                            <p className="font-semibold">
                              {results.monthlyGeneration.toLocaleString('pt-BR')} kWh
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pb-4 border-b">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <DollarSign className="text-blue-600" size={20} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Economia Mensal</p>
                            <p className="font-semibold text-green-600">
                              R$ {results.monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pb-4 border-b">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Calendar className="text-purple-600" size={20} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Payback</p>
                            <p className="font-semibold">
                              {results.paybackMonths.toFixed(0)} meses ({(results.paybackMonths / 12).toFixed(1)} anos)
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pb-4 border-b">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                            <TrendingUp className="text-orange-600" size={20} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">ROI (25 anos)</p>
                            <p className="font-semibold text-orange-600">
                              {results.roi.toFixed(0)}%
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                            <Zap className="text-red-600" size={20} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Valor Total Financiado</p>
                            <p className="font-semibold">
                              R$ {results.totalAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 className="text-green-600 mt-0.5" size={20} />
                        <div>
                          <p className="font-semibold text-green-900 mb-1">Vantagens Deste Financiamento</p>
                          <ul className="space-y-1 text-sm text-green-800">
                            <li>✓ Economia cobre a parcela do financiamento</li>
                            <li>✓ ROI positivo em {(results.paybackMonths / 12).toFixed(1)} anos</li>
                            <li>✓ Valorização do imóvel</li>
                            <li>✓ Redução da pegada de carbono</li>
                          </ul>
                        </div>
                      </div>
                      <Button className="w-full mt-3">
                        Solicitar Proposta
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Card className="flex items-center justify-center">
                  <CardContent className="text-center py-12">
                    <Sun className="mx-auto text-gray-400 mb-4" size={64} />
                    <p className="text-gray-600">
                      Preencha os dados ao lado para simular seu financiamento
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="benefits">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <TrendingUp className="text-green-600 mb-3" size={32} />
                  <CardTitle>Economia Garantida</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Reduza até 95% na conta de energia. O sistema gera economia desde o primeiro mês de operação.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <DollarSign className="text-blue-600 mb-3" size={32} />
                  <CardTitle>Taxas Especiais</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Linhas de crédito exclusivas para energia renovável com taxas abaixo do mercado e prazos flexíveis.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Sun className="text-yellow-600 mb-3" size={32} />
                  <CardTitle>Vida Útil Longa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Painéis solares com garantia de 25 anos. Continue economizando muito tempo após pagar o financiamento.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="process">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Simulação e Análise</h3>
                      <p className="text-gray-600">
                        Fazemos uma análise detalhada do seu consumo e do potencial de geração solar no seu imóvel.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Projeto Personalizado</h3>
                      <p className="text-gray-600">
                        Desenvolvemos o projeto do sistema solar ideal para suas necessidades e aprovamos junto à concessionária.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Aprovação do Financiamento</h3>
                      <p className="text-gray-600">
                        Auxiliamos em todo processo de aprovação do crédito com nossos parceiros financeiros.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Instalação Profissional</h3>
                      <p className="text-gray-600">
                        Equipe técnica especializada instala todo o sistema em 3-5 dias úteis.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Monitoramento e Suporte</h3>
                      <p className="text-gray-600">
                        Sistema de monitoramento em tempo real e suporte técnico por toda vida útil do equipamento.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
