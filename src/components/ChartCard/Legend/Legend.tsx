import React from 'react';

import type { ShareholderType } from 'src/types';

import styles from './Legend.module.scss';

type LegendProps = {
  items: ShareholderType[];
  colors: string[];
};

const Legend: React.FC<LegendProps> = ({ items, colors }) => {
  return (
    <div className={styles.legend}>
      <div className={styles.items}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <div
              className={styles.color}
              style={{ backgroundColor: `${colors[index]}` }}
            ></div>
            <span className={styles.label}>{item.holder}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
