import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MoreVertical } from "lucide-react";

const contracts = [
  {
    id: "CTR-2024-001",
    client: "Indústria ABC Ltda",
    supplier: "Energia Verde SP",
    consumption: "485 MWh",
    savings: "R$ 42.850",
    savingsPercent: "28,5%",
    status: "active",
    dueDate: "15/12/2026"
  },
  {
    id: "CTR-2024-002",
    client: "Metalúrgica XYZ",
    supplier: "SolarPower Comercializadora",
    consumption: "892 MWh",
    savings: "R$ 98.420",
    savingsPercent: "35,2%",
    status: "active",
    dueDate: "22/01/2027"
  },
  {
    id: "CTR-2023-087",
    client: "Shopping Center Delta",
    supplier: "Energia Limpa Brasil",
    consumption: "1.245 MWh",
    savings: "R$ 156.890",
    savingsPercent: "31,8%",
    status: "active",
    dueDate: "08/08/2026"
  },
  {
    id: "CTR-2024-003",
    client: "Hospital São Lucas",
    supplier: "PowerTech Energia",
    consumption: "625 MWh",
    savings: "R$ 67.250",
    savingsPercent: "29,4%",
    status: "pending",
    dueDate: "30/06/2026"
  },
  {
    id: "CTR-2023-145",
    client: "Universidade Federal",
    supplier: "Renova Energia",
    consumption: "1.890 MWh",
    savings: "R$ 245.670",
    savingsPercent: "38,7%",
    status: "active",
    dueDate: "18/11/2026"
  }
];

const statusConfig = {
  active: { label: "Ativo", color: "bg-green-100 text-green-700" },
  pending: { label: "Pendente", color: "bg-yellow-100 text-yellow-700" },
  expired: { label: "Vencido", color: "bg-red-100 text-red-700" }
};

export function ContractsTable() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Contratos Ativos</CardTitle>
            <CardDescription>Gestão completa dos contratos de energia</CardDescription>
          </div>
          <Button>Novo Contrato</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID do Contrato</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Fornecedor</TableHead>
              <TableHead>Consumo</TableHead>
              <TableHead>Economia</TableHead>
              <TableHead>% Economia</TableHead>
              <TableHead>Vencimento</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contracts.map((contract) => {
              const status = statusConfig[contract.status as keyof typeof statusConfig];
              return (
                <TableRow key={contract.id}>
                  <TableCell className="font-medium">{contract.id}</TableCell>
                  <TableCell>{contract.client}</TableCell>
                  <TableCell>{contract.supplier}</TableCell>
                  <TableCell>{contract.consumption}</TableCell>
                  <TableCell>{contract.savings}</TableCell>
                  <TableCell>
                    <span className="font-semibold text-green-600">
                      {contract.savingsPercent}
                    </span>
                  </TableCell>
                  <TableCell>{contract.dueDate}</TableCell>
                  <TableCell>
                    <Badge className={status.color} variant="secondary">
                      {status.label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreVertical size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
