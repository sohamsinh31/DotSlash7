import React, { useState } from 'react';
import Button from '../Button';
import Card from '../Card';
import './Content.css';
import { analyzeCode } from '@/Services/CodeT';
import getOutput from '../../Services/Compiler.js';
import HomePage from '@/Services/Data';
import MemoryTable, { MemoryStackItem } from '../Memory/Memory';

const Content = () => {
  const [output, setOutput] = useState('');

  const [code, setCode] = useState(`#include <stdio.h>

int main(int argc, char *argv[]) {
    int sum = 10;
    printf("Hello world");
    return 0;
}`);

  const [memoryStack, setMemoryStack] = useState<MemoryStackItem[]>([]);

  const handleRunButtonClick = async () => {
    console.log('button clicked');
    setOutput(await getOutput(code));
    console.log(output);
    setMemoryStack(analyzeCode(code));
  };

  return (
    <div className="content">
      <div className="upperBar">
        <div className="textbar">
          <HomePage />
        </div>
        <div className="imageBar">
          <img className="imageR" src="Assets/clang.png" alt="" />
        </div>
      </div>
      <div className="lowerBar">
        <div className="codeBar">
          <Card style={{ borderRadius: '10px' }}>
            <Button bgColor="#0AB663" style={{ color: 'blue' }} onClick={handleRunButtonClick}>
              Run
            </Button>
          </Card>
          <textarea
            style={{ fontFamily: 'monospace', padding: '10px', borderRadius: '5px', minHeight: '200px', width: '92%' }}
            className="codepen"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="output">
          <Card>Output:-</Card>
          <div className="printer">{output}</div>
        </div>
        <MemoryTable memoryStackItems={memoryStack} />
      </div>
    </div>
  );
};

export default Content;
