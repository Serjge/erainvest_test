import type { FC } from 'react';

import styles from 'src/components/ChartCard/Doughnut/ShareholderTooltip/ShareholderTooltip.module.scss';

type ShareholderTooltipProps = {
  companyName: string;
  percentage: number;
  position?: { x: number; y: number };
};

export const ShareholderTooltip: FC<ShareholderTooltipProps> = ({
  companyName,
  percentage,
  position = { x: 0, y: 0 },
}) => {
  return (
    <div
      className={styles.tooltip}
      style={{
        left: position.x - 40,
        top: position.y - 110,
      }}
    >
      <div className={styles.content}>
        <div className={styles.name}>{companyName}</div>
        <div className={styles.percentage}>{percentage.toFixed(2)} %</div>
      </div>

      <div className={styles.arrow}></div>
    </div>
  );
};
