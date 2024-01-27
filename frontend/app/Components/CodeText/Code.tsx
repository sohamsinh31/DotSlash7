// CodeTextArea.jsx
import React from 'react';

type CodeTextAreaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const CodeTextArea: React.FC<CodeTextAreaProps> = ({ value, onChange }) => (
  <textarea
    style={{ fontFamily: 'monospace', padding: '10px', borderRadius: '5px', minHeight: '200px', width: '92%' }}
    className="codepen"
    value={value}
    onChange={onChange}
  />
);

export default CodeTextArea;
