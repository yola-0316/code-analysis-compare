import { Link } from 'react-router-dom';

import dataSource from '../constants/compare-data';

const columns = [
  { key: 'name', title: 'Name' },
  {
    key: 'languageSupport',
    title: 'Language Support',
  },
  {
    key: 'ideEditorIntegration',
    title: 'IDE/Editor Integration',
  },
  { key: 'features', title: 'Features' },
  { key: 'pros', title: 'Pros' },
  { key: 'cons', title: 'Cons' },
  { key: 'pricing', title: 'Pricing' },
  { key: 'notes', title: 'Notes' },
];

export default function Home() {
  return (
    <div>
      <table className="table-auto w-full">
        <thead>
          {columns.map((col) => (
            <th className="text-left">{col.title}</th>
          ))}
        </thead>
        <tbody>
          {dataSource.map((data) => (
            <tr>
              <td>
                <Link
                  className="text-blue-600 hover:text-blue-500 underline"
                  to="/sonarsource"
                >
                  {data.name}
                </Link>
              </td>
              <td>{data.languageSupport}</td>
              <td>{data.ideEditorIntegration}</td>
              <td>{data.features}</td>
              <td>{data.pros}</td>
              <td>{data.cons}</td>
              <td>{data.pricing}</td>
              <td>{data.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
