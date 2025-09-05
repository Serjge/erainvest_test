import { useEffect, useState } from 'react';

import type { AxiosError } from 'axios';
import { api } from 'src/services/shareholdersApi.ts';
import type { ApiResponse, CompanySharesType } from 'src/types';

export function useShareholders() {
  const [data, setData] = useState<CompanySharesType>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await api.get<ApiResponse>('/api/shareholders');

        setData(response.data.data);
      } catch (err) {
        setError(err as AxiosError);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}
