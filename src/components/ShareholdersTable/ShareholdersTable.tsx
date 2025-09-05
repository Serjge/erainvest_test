import 'src/components/ShareholdersTable/ShareholdersTable.scss';

import type { ShareholderType } from 'src/types';
import { formatDate } from 'src/utils';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

type ShareholdersTableProps = {
  shareholders: ShareholderType[];
};

export const ShareholdersTable = ({ shareholders }: ShareholdersTableProps) => {
  const columns: ColumnsType<ShareholderType> = [
    {
      title: 'Держатель акции',
      dataIndex: 'holder',
      key: 'holder',
      className: 'shareholder-name-column',
    },
    {
      title: '% Доли',
      dataIndex: 'share_percent',
      key: 'share_percent',
      render: (value: number) => `${value} %`,
      className: 'percentage-column',
    },
  ];

  const tableData = shareholders.map((item, index) => ({
    ...item,
    key: index,
  }));

  const date = new Date();

  return (
    <section className="table-section">
      <div className="table-wrapper">
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={false}
          className="shareholders-table"
          size="middle"
        />
      </div>

      <div className="update-info">
        <p>Дата последнего обновления этой структуры: {formatDate(date)} </p>
      </div>
    </section>
  );
};
