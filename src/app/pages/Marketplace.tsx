import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Search, Zap, TrendingDown, Star, Award } from "lucide-react";

const suppliers = [
  {
    name: "Energia Verde SP",
    rating: 4.8,
    reviews: 127,
    price: 0.62,
    savings: 28,
    type: "Renovável",
    minContract: "12 meses",
    certified: true,
    featured: true
  },
  {
    name: "SolarPower Comercializadora",
    rating: 4.9,
    reviews: 203,
    price: 0.58,
    savings: 32,
    type: "Solar",
    minContract: "24 meses",
    certified: true,
    featured: true
  },
  {
    name: "PowerTech Energia",
    rating: 4.6,
    reviews: 89,
    price: 0.65,
    savings: 24,
    type: "Convencional",
    minContract: "12 meses",
    certified: true,
    featured: false
  },
  {
    name: "Renova Energia Ltda",
    rating: 4.7,
    reviews: 156,
    price: 0.60,
    savings: 30,
    type: "Eólica",
    minContract: "18 meses",
    certified: true,
    featured: false
  },
  {
    name: "Brasil Clean Energy",
    rating: 4.5,
    reviews: 94,
    price: 0.67,
    savings: 22,
    type: "Hidrelétrica",
    minContract: "12 meses",
    certified: false,
    featured: false
  },
  {
    name: "EcoEnergia Brasil",
    rating: 4.8,
    reviews: 178,
    price: 0.59,
    savings: 31,
    type: "Renovável",
    minContract: "24 meses",
    certified: true,
    featured: true
  }
];

export function Marketplace() {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Marketplace de Energia</h1>
          <p className="text-gray-600">Compare e contrate energia mais barata para sua empresa</p>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input placeholder="Buscar fornecedores..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Tipo de Energia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os Tipos</SelectItem>
                  <SelectItem value="renewable">Renovável</SelectItem>
                  <SelectItem value="solar">Solar</SelectItem>
                  <SelectItem value="wind">Eólica</SelectItem>
                  <SelectItem value="conventional">Convencional</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="savings">
                <SelectTrigger>
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="savings">Maior Economia</SelectItem>
                  <SelectItem value="price">Menor Preço</SelectItem>
                  <SelectItem value="rating">Melhor Avaliado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suppliers.map((supplier, index) => (
            <Card key={index} className={supplier.featured ? "border-blue-200 bg-blue-50/30" : ""}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{supplier.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="text-yellow-500 fill-yellow-500" size={16} />
                        <span className="font-semibold text-sm">{supplier.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({supplier.reviews} avaliações)</span>
                    </div>
                  </div>
                  {supplier.featured && (
                    <Badge className="bg-blue-600">Destaque</Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">{supplier.type}</Badge>
                  {supplier.certified && (
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      <Award size={12} className="mr-1" />
                      Certificado
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Preço por kWh</span>
                    <span className="font-bold text-lg">R$ {supplier.price.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Economia estimada</span>
                    <span className="font-semibold text-green-600 flex items-center gap-1">
                      <TrendingDown size={16} />
                      {supplier.savings}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Contrato mínimo</span>
                    <span className="text-sm font-medium">{supplier.minContract}</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <Button className="w-full">Ver Detalhes</Button>
                  <Button variant="outline" className="w-full">Solicitar Proposta</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Banner */}
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0">
          <CardContent className="py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-lg mb-1">Precisa de Ajuda para Escolher?</h3>
                <p className="text-blue-100 text-sm">
                  Nossa equipe de especialistas pode analisar seu perfil e recomendar as melhores opções
                </p>
              </div>
              <Button variant="secondary" size="lg" className="whitespace-nowrap">
                Falar com Especialista
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
