import { MetricsCards } from "../components/MetricsCards";
import { ConsumptionChart } from "../components/ConsumptionChart";
import { SavingsDistribution } from "../components/SavingsDistribution";
import { ContractsTable } from "../components/ContractsTable";
import { useTranslation } from "react-i18next";

export function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="p-4 sm:p-6">
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{t('dashboard.title')}</h1>
          <p className="text-sm sm:text-base text-gray-600">{t('dashboard.subtitle')}</p>
        </div>

        <MetricsCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <ConsumptionChart />
          <SavingsDistribution />
        </div>

        <ContractsTable />
      </div>
    </div>
  );
}
