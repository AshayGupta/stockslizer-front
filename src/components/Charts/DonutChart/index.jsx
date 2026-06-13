import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const DonutChart = ({data = []}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-30 h-30">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={40}
              outerRadius={60}
              paddingAngle={1}
            >
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex-1 space-y-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded"
                style={{ backgroundColor: item.fill }}
              />
              <span className="">{item.name}</span>
            </div>

            <span className="font-medium" style={{color: item.fill}}>{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;