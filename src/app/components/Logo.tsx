import { Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  onClick?: () => void;
}

export function Logo({ size = "md", showTagline = false, onClick }: LogoProps) {
  const { t } = useTranslation();

  const sizes = {
    sm: { icon: 20, box: "w-8 h-8", text: "text-base", tagline: "text-xs" },
    md: { icon: 24, box: "w-10 h-10", text: "text-xl", tagline: "text-xs" },
    lg: { icon: 32, box: "w-14 h-14", text: "text-2xl", tagline: "text-sm" }
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${onClick ? 'cursor-pointer' : ''}`} onClick={onClick}>
      <div className={`${s.box} bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg`}>
        <Leaf className="text-white" size={s.icon} />
      </div>
      <div>
        <h2 className={`font-bold ${s.text} bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent`}>
          {t('companyName')}
        </h2>
        {showTagline && (
          <p className={`${s.tagline} text-gray-500`}>
            {t('tagline')}
          </p>
        )}
      </div>
    </div>
  );
}
