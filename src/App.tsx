import { ShareholdersStructure } from 'src/components/ShareholdersStructure/ShareholdersStructure.tsx';
import companySharesData from 'src/mock/data.json';
import type { CompanySharesType } from 'src/types';
import { filterDuplicateShareholders } from 'src/utils/';

const companyShares: CompanySharesType = companySharesData;

const App = () => {
  const data = filterDuplicateShareholders(companyShares);
  return (
    <main className={'container'}>
      <ShareholdersStructure shareholders={data['SBER']} />
    </main>
  );
};

export default App;
