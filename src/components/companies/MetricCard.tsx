interface MetricCardProps {
  label: string;
  value: string;
  trend?: "up" | "down" | "neutral";
}

const trendStyles = {
  up: "text-emerald-600",
  down: "text-red-500",
  neutral: "text-slate-500",
};

const trendIcons = {
  up: "↑",
  down: "↓",
  neutral: "→",
};

export function MetricCard({ label, value, trend = "neutral" }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="mb-1 text-sm text-slate-500">{label}</p>
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-bold text-slate-900">{value}</p>
        {trend && (
          <span className={`text-sm font-medium ${trendStyles[trend]}`}>
            {trendIcons[trend]}
          </span>
        )}
      </div>
    </div>
  );
}
