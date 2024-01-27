// Content.jsx
import React, { useState } from 'react';
import Button from '../Button';
import Card from '../Card';
import HomePage from '@/Services/Data';
import CodeTextArea from '../CodeText';
import MemoryTable, { MemoryStackItem } from '../Memory/Memory';
import { analyzeCode } from '@/Services/CodeT';
import getOutput from '../../Services/Compiler.js';
import OutputWindow from '../Output/Output';

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
          <CodeTextArea value={code} onChange={(e) => setCode(e.target.value)} />
        </div>
        <OutputWindow output={output} />
        <MemoryTable memoryStackItems={memoryStack} />
      </div>
    </div>
  );
};

export default Content;
