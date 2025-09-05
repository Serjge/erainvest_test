import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { ShareholderTooltip } from 'src/components/ChartCard/Doughnut/ShareholderTooltip/ShareholderTooltip.tsx';

import type { TooltipContentProps } from 'recharts';
export const CustomTooltip = ({
  active,
  payload,
}: TooltipContentProps<ValueType, NameType>) => {
  const isVisible = active && payload && payload.length;
  console.log(payload);
  return (
    <div style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
      {isVisible && (
        <div>
          <ShareholderTooltip
            companyName={payload[0].name}
            percentage={payload[0].value}
          />
          <p style={{ visibility: 'hidden' }}>{payload[0].value}</p>
        </div>
      )}
    </div>
  );
};
