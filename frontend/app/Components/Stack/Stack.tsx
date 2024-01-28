// Stack.tsx
import React from 'react';
import styled from 'styled-components';

interface StackProps {
  items: string[];
}

const StackContainer = styled.div`
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 150px;
  margin: 13px;
`;

const StackItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 8px;
`;

const Stack: React.FC<StackProps> = ({ items }) => {
  return (
    <StackContainer>
      <div>Execution Stack</div>
      {items.map((item, index) => (
        <StackItem key={index}>{item}</StackItem>
      ))}
    </StackContainer>
  );
};

export default Stack;
