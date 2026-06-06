import { ArrowRight } from "lucide-react";

export default function ActionCard({
  icon,
  title,
  badge,
  fields,
}) {
  const Icon = icon;

  return (
    <div className="card p-5">
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-2 items-center">
          <Icon size={18} />
          <h3 className="text-card-title">{title}</h3>
        </div>

        <div className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-small">
          {badge}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {fields.map((field) => (
          <div key={field.label}>
            <div className="text-small text-muted">
              {field.label}
            </div>

            <div className="mt-1 font-medium">
              {field.value}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button className="flex gap-2 items-center text-[var(--primary)]">
          View Details
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}