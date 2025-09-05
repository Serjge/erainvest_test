import axios from 'axios';
import companySharesData from 'src/mock/data.json';

export const api = axios.create();

import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(api);

mock.onGet('/api/shareholders').reply(200, {
  success: true,
  data: companySharesData,
});
