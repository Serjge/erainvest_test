import { Doughnut } from 'src/components/ChartCard/Doughnut/Doughnut.tsx';
import Legend from 'src/components/ChartCard/Legend/Legend.tsx';
import { COLORS } from 'src/const';
import type { ShareholderType } from 'src/types';

import styles from './ChartCard.module.scss';

type ChartCardProps = {
  shareholders: ShareholderType[];
};

export const ChartCard = ({ shareholders }: ChartCardProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.container}>
          <Doughnut items={shareholders} colors={COLORS} />
          <Legend items={shareholders} colors={COLORS} />
        </div>
      </div>
    </section>
  );
};
