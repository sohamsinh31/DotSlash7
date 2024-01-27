import React, { useState, useEffect } from 'react';
import Button  from '@/Components/Button';
import Card from "@/Components/Card";
import "./Test.css";
import { analyzeCode } from '@/Services/CodeT';
import getOutput from "../../Services/Compiler.js"
import HomePage from "@/Services/Data"
import Stack from '../Stack';
import Memory from '../Memory';
// import mermaid from 'mermaid';

interface MemoryStackItem {
    variableName?: any;
    dataType?: any;
    bytesize: string | number;
    time: string | number;
    functionName?: any;
}

const Test = () => {

    // useEffect(() => {
    //     mermaid.initialize({ startOnLoad: true });
    //   }, []);
    
      const mermaidCode = `
        graph TD
        A[Client] --> B[Load Balancer]
        B --> C[Server1]
        B --> D[Server2]
      `;


    const [output, setOutput] = useState("");

    const [code, setCode] = useState(`#include <stdio.h>

int main(int argc, char *argv[]) {
    int sum = 10;
    printf("Hello world");
    return 0;
}`);

    // console.log(code)

    // useEffect(() => {
    // Example usage:
    const codeAnalysisResult = analyzeCode(code);
    console.log(codeAnalysisResult);

    // console.log(code)
    const [memoryStack, setMemoryStack] = useState<MemoryStackItem[]>([]);

    const handleRunButtonClick = async () => {
        console.log("button clicked")
        setOutput(await getOutput(code));
        console.log(output)
        setMemoryStack(analyzeCode(code))
    };

    return (
        <div className="content">
            <div className="lowerBar">
                <div className="codeBar">
                    <Card style={{ borderRadius: '10px' }}>
                        <Button bgColor="#0AB663" style={{ color: 'blue' }}
                            onClick={handleRunButtonClick}>Run</Button>
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
                    <div className='printer'>
                        {output}
                    </div>
                </div>
                <div className="stack">
                    <Stack />
                </div>
                </div>
              <Memory />
        </div>
    );
};

export default Test;
