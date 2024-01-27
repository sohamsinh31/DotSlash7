import React, { useEffect, useState } from 'react';
import Button from '@/Components/Button';
import Card from '@/Components/Card';
import Graph from '@/Components/Graph/Graph';
import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar';
import { Tree, GraphData } from '@/Services/Data';
import GraphComponent from '@/Components/Graph/Graph';
import MemoryTable, { MemoryStackItem } from '@/Components/Memory/Memory';
import { analyzeCode } from '@/Services/CodeT';
import getOutput from '@/Services/Compiler';
import CodeTextArea from '@/Components/CodeText';
import OutputWindow from '@/Components/Output/Output';
import "./Demo.css"

export const Demo: React.FC = () => {

    const [output, setOutput] = useState('');
    const [code, setCode] = useState(`#include <stdio.h>

    #define MAX_VERTICES 5
    
    int main() {
        int graph[MAX_VERTICES][MAX_VERTICES] = {
            {0, 1, 0, 0, 1},
            {1, 0, 0, 1, 0},
            {0, 0, 0, 0, 0},
            {0, 1, 0, 0, 1},
            {1, 0, 0, 1, 0}
        };
    
        printf("Edges in the graph:\\n");
    
        for (int i = 0; i < MAX_VERTICES; i++) {
            for (int j = i + 1; j < MAX_VERTICES; j++) {
                if (graph[i][j] == 1) {
                    printf("(%d, %d)\\n", i + 1, j + 1);
                }
            }
        }
    
        return 0;
    }    

    `);

    const [memoryStack, setMemoryStack] = useState<MemoryStackItem[]>([]);

    const handleRunButtonClick = async () => {
        console.log('button clicked');
        setOutput(await getOutput(code));
        setMemoryStack(analyzeCode(code));
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <div className="container" style={{ flex: 1, padding: '20px' }}>
                <Navbar title="Trees in C" />
                <div style={{ display: 'flex' }}>
                    <div className="textBar">
                        <Tree />
                    </div>
                    <GraphComponent graphData={GraphData} />
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
        </div>
    );
};
