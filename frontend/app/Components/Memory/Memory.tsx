import React from 'react';
import './Memory.css';

export interface MemoryStackItem {
  variableName?: any;
  dataType?: any;
  bytesize: string | number;
  time: string | number;
  functionName?: any;
}

export type MemoryProps = {
  memoryStackItems: MemoryStackItem[];
};

const MemoryTable: React.FC<MemoryProps> = ({ memoryStackItems }) => {
  return (
    <div className="table">
      <table border={1}>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Memory</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {memoryStackItems.map((variable, index) => (
            <tr key={index}>
              <td>{variable.variableName || variable.functionName}</td>
              <td>{variable.bytesize}</td>
              <td>{variable.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemoryTable;
