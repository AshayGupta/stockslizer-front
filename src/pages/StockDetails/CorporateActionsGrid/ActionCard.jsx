import { Icons } from "@/common/icons";

export default function ActionCard({
  title,
  type,
  icon,
  color,
  fields,
}) {
  const Icon = icon;

  return (
    <div className="card">
      <div className="flex gap-3 mb-2 items-center">
        <Icon size={18} color={color} />
        <h3 className="text-card-title" style={{color}}>{title}</h3>
      </div>

      <div className="flex flex-col gap-2">
        {fields.map((field, idx) => (
          <div key={`${type}_${field.value}_${idx}`} className="flex flex-col">
            { field.label && 
              <span className="text-small text-muted">{field.label}</span>
            }
            <span >{field.value}</span>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-end mt-6">
        <button className="flex gap-2 items-center text-[var(--primary)]">
          View Details
          <Icons.ArrowRightIcon size={14} />
        </button>
      </div> */}
    </div>
  );
}