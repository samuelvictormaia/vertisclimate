import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Calculator, TrendingDown, Zap, DollarSign } from "lucide-react";

export function Simulator() {
  const [consumption, setConsumption] = useState("");
  const [avgCost, setAvgCost] = useState("");
  const [segment, setSegment] = useState("");
  const [results, setResults] = useState<any>(null);

  const calculateSavings = () => {
    const consumptionNum = parseFloat(consumption);
    const costNum = parseFloat(avgCost);

    if (!consumptionNum || !costNum) return;

    const savingsPercent = segment === "industry" ? 0.35 : segment === "commerce" ? 0.28 : 0.25;
    const monthlyCost = consumptionNum * costNum;
    const monthlySavings = monthlyCost * savingsPercent;
    const yearlySavings = monthlySavings * 12;

    setResults({
      currentCost: monthlyCost,
      newCost: monthlyCost - monthlySavings,
      monthlySavings,
      yearlySavings,
      savingsPercent: savingsPercent * 100,
      paybackMonths: 0
    });
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Simulador de Economia</h1>
          <p className="text-gray-600">Descubra quanto sua empresa pode economizar com energia no mercado livre</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Dados de Consumo</CardTitle>
              <CardDescription>Preencha as informações da sua empresa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="segment">Segmento</Label>
                <Select value={segment} onValueChange={setSegment}>
                  <SelectTrigger id="segment">
                    <SelectValue placeholder="Selecione o segmento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="industry">Indústria (até 35% economia)</SelectItem>
                    <SelectItem value="commerce">Comércio (até 28% economia)</SelectItem>
                    <SelectItem value="services">Serviços (até 25% economia)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="consumption">Consumo Mensal (kWh)</Label>
                <Input
                  id="consumption"
                  type="number"
                  placeholder="Ex: 50000"
                  value={consumption}
                  onChange={(e) => setConsumption(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="avgCost">Custo Médio por kWh (R$)</Label>
                <Input
                  id="avgCost"
                  type="number"
                  step="0.01"
                  placeholder="Ex: 0.85"
                  value={avgCost}
                  onChange={(e) => setAvgCost(e.target.value)}
                />
              </div>

              <Button className="w-full" size="lg" onClick={calculateSavings}>
                <Calculator className="mr-2" size={20} />
                Calcular Economia
              </Button>
            </CardContent>
          </Card>

          {results && (
            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Economia Estimada</CardTitle>
                  <CardDescription className="text-green-100">
                    Potencial de redução nos custos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">
                    {results.savingsPercent.toFixed(1)}%
                  </div>
                  <p className="text-green-100">de economia mensal</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="text-red-600" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Custo Atual Mensal</p>
                        <p className="font-semibold">
                          R$ {results.currentCost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <TrendingDown className="text-green-600" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Novo Custo Mensal</p>
                        <p className="font-semibold text-green-600">
                          R$ {results.newCost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Zap className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Economia Mensal</p>
                        <p className="font-semibold text-blue-600">
                          R$ {results.monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Calculator className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Economia Anual</p>
                        <p className="font-semibold text-purple-600 text-lg">
                          R$ {results.yearlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <p className="text-sm text-blue-900 mb-3">
                    <strong>Próximos Passos:</strong>
                  </p>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>✓ Análise detalhada do seu perfil de consumo</li>
                    <li>✓ Comparação de fornecedores do mercado livre</li>
                    <li>✓ Proposta personalizada sem compromisso</li>
                  </ul>
                  <Button className="w-full mt-4" variant="default">
                    Falar com Especialista
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {!results && (
            <Card className="flex items-center justify-center">
              <CardContent className="text-center py-12">
                <Calculator className="mx-auto text-gray-400 mb-4" size={64} />
                <p className="text-gray-600">
                  Preencha os dados ao lado para ver sua simulação
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
