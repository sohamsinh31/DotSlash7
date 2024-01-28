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

const RoundedStackItem = styled.div`
color:black;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #fff; /* Set your preferred background color */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Stack: React.FC<StackProps> = ({ items }) => {
    return (
        <StackContainer>
            <div>Execution Stack</div>
            {items.map((item, index) => (
                <RoundedStackItem key={index}>{item}</RoundedStackItem>
            ))}
        </StackContainer>
    );
};

export default Stack;
