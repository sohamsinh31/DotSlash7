import React, { useState, useEffect } from 'react';
import Button from "../Button";
import Card from "../Card";
import "./Content.css";
import { analyzeCode } from '@/Services/CodeT';
import getOutput from "../../Services/Compiler.js"

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
                    <h3>What is C?</h3>
                    C is a general-purpose, procedural, high-level programming language used in the development of computer software and applications, system programming, games, web development, and more.
                    <ul>
                        <li>C language was developed by Dennis M. Ritchie at the Bell Telephone Laboratories in 1972.</li>
                        <li>It is a powerful and flexible language which was first developed for the programming of the UNIX operating System.</li>
                        <li>C is one of the most widely used programming languages.</li>
                        <li>C programming language is known for its simplicity and efficiency. It is the best choice to start with programming as it gives you a foundational understanding of programming.</li>
                    </ul>
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
                        style={{ fontFamily: 'monospace', padding: '10px', borderRadius: '5px', minHeight: '200px', width: '95%' }}
                        className="codepen"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </div>
                <div className="output">
                    {output}
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
