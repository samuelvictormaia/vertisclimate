import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "Out", consumo: 2650, economia: 850 },
  { month: "Nov", consumo: 2780, economia: 920 },
  { month: "Dez", consumo: 2890, economia: 980 },
  { month: "Jan", consumo: 2720, economia: 890 },
  { month: "Fev", consumo: 2650, economia: 920 },
  { month: "Mar", consumo: 2590, economia: 1050 },
  { month: "Abr", consumo: 2847, economia: 1247 }
];

export function ConsumptionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Consumo e Economia</CardTitle>
        <CardDescription>Últimos 7 meses (MWh)</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="consumo"
              stroke="#3b82f6"
              strokeWidth={2}
              name="Consumo Total"
            />
            <Line
              type="monotone"
              dataKey="economia"
              stroke="#10b981"
              strokeWidth={2}
              name="Economia Gerada"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
