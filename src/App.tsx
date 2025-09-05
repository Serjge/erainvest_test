import { ShareholdersStructure } from 'src/components/ShareholdersStructure/ShareholdersStructure.tsx';
import { useShareholders } from 'src/hooks/useShareholders.ts';
import { filterDuplicateShareholders } from 'src/utils/';

const App = () => {
  const { loading, data, error } = useShareholders();
  console.log(loading, data, error);
  console.log(filterDuplicateShareholders(data));
  const filterData = filterDuplicateShareholders(data);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <main className={'container'}>
      <ShareholdersStructure shareholders={filterData['SBER']} />
    </main>
  );
};

export default App;
