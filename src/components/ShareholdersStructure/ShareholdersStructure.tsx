import { ChartCard } from 'src/components/ChartCard/ChartCard.tsx';
import { ShareholdersTable } from 'src/components/ShareholdersTable/ShareholdersTable.tsx';
import type { ShareholderType } from 'src/types/';

import './ShareholdersStructure.scss';

type ShareholdersStructureProps = {
  shareholders: ShareholderType[];
};

export const ShareholdersStructure = ({ shareholders }: ShareholdersStructureProps) => {
  return (
    <div className="content-wrapper">
      <div className="page-header">
        <h2 className="title">Структура акционеров</h2>
      </div>

      <div className="main-content">
        <ShareholdersTable shareholders={shareholders} />
        <ChartCard shareholders={shareholders} />
      </div>
    </div>
  );
};
