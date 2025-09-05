import type { CompanySharesType } from 'src/types';

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
};

export const filterDuplicateShareholders = (
  data: CompanySharesType,
): CompanySharesType => {
  const result: CompanySharesType = {};

  Object.entries(data).forEach(([ticker, shareholders]) => {
    const seen = new Set<string>();

    result[ticker] = shareholders.filter(shareholder => {
      const key = `${shareholder.holder}-${shareholder.share_percent}`;

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    });
  });

  return result;
};
