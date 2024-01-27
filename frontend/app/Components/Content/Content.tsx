import React, { useState, useEffect } from 'react';
import Button from "../Button";
import Card from "../Card";
import "./Content.css";
import { analyzeCode } from '@/Services/CodeT';
import getOutput from "../../Services/Compiler.js"
import HomePage from "@/Services/Data"

interface MemoryStackItem {
    variableName?: any;
    dataType?: any;
    bytesize: string | number;
    time: string | number;
    functionName?: any;
}

const Content = () => {
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
                            {memoryStack.map((variable, index) => (
                                <tr key={index}>
                                    <td>{variable.variableName || variable.functionName}</td>
                                    <td>{variable.bytesize}</td>
                                    <td>{variable.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Content;
