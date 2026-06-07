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
        <h3 className="text-card-title">{title}</h3>
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
    </div>
  );
}