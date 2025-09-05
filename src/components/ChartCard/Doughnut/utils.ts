import type { ShareholderType } from 'src/types';

type DataPie = {
  name: string;
  value: number;
};

export const convertToPieFormat = (shareholders: ShareholderType[]): DataPie[] => {
  return shareholders.map(({ holder, share_percent }) => ({
    name: holder,
    value: Number(share_percent),
  }));
};
