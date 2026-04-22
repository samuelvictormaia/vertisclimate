import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { segment: "Indústria", economia: 485, contratos: 15 },
  { segment: "Comércio", economia: 342, contratos: 12 },
  { segment: "Serviços", economia: 267, contratos: 8 },
  { segment: "Saúde", economia: 98, contratos: 2 },
  { segment: "Educação", economia: 55, contratos: 1 }
];

export function SavingsDistribution() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Economia por Segmento</CardTitle>
        <CardDescription>Distribuição da economia gerada (R$ mil)</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="segment" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="economia" fill="#10b981" name="Economia (R$ mil)" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
