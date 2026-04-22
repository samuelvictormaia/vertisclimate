import { MetricsCards } from "../components/MetricsCards";
import { ConsumptionChart } from "../components/ConsumptionChart";
import { SavingsDistribution } from "../components/SavingsDistribution";
import { ContractsTable } from "../components/ContractsTable";

export function Dashboard() {
  return (
    <div className="p-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-600">Visão geral da gestão energética da sua empresa</p>
        </div>

        <MetricsCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ConsumptionChart />
          <SavingsDistribution />
        </div>

        <ContractsTable />
      </div>
    </div>
  );
}
