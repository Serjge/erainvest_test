import type { SVGProps } from 'react';

import { CustomTooltip } from 'src/components/ChartCard/Doughnut/CustomTooltip.tsx';
import { convertToPieFormat } from 'src/components/ChartCard/Doughnut/utils.ts';
import type { ShareholderType } from 'src/types';

import { Cell, Pie, PieChart, Sector, Tooltip } from 'recharts';
import type { SectorProps } from 'recharts';

type Coordinate = {
  x: number;
  y: number;
};

type PieSectorData = {
  percent?: number;
  name?: string | number;
  midAngle?: number;
  middleRadius?: number;
  tooltipPosition?: Coordinate;
  value?: number;
  paddingAngle?: number;
  dataKey?: string;
  payload?: { name: string; value: number };
  active?: boolean;
};

type PieSectorDataItem = SVGProps<SVGPathElement> & Partial<SectorProps> & PieSectorData;

type DoughnutProps = {
  colors: string[];
  items: ShareholderType[];
};

const renderShape = ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  active,
}: PieSectorDataItem) => {
  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        style={{ opacity: active ? 1 : 0.3 }}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export const Doughnut = ({ items, colors }: DoughnutProps) => {
  return (
    <PieChart style={{ width: '100%' }} width={300} height={300}>
      <Pie
        activeShape={(props: PieSectorDataItem) =>
          renderShape({ ...props, active: true })
        }
        inactiveShape={(props: PieSectorDataItem) =>
          renderShape({ ...props, active: false })
        }
        data={convertToPieFormat(items)}
        innerRadius={90}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {items.map((entry, index) => (
          <Cell key={`cell-${entry.holder}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip isAnimationActive={false} content={CustomTooltip} />
    </PieChart>
  );
};
