import React, { useState } from 'react';
import Button from '@/Components/Button';
import Card from '@/Components/Card';
import GraphComponent from '@/Components/Graph/Graph';
import MemoryTable, { MemoryStackItem } from '@/Components/Memory/Memory';
import { analyzeCode,createGraphData } from '@/Services/CodeT';
import getOutput from '@/Services/Compiler';
import CodeTextArea from '@/Components/CodeText';
import OutputWindow from '@/Components/Output/Output';
import Sidebar from '@/Components/Sidebar'; // Import Sidebar component
import Navbar from '@/Components/Navbar'; // Import Navbar component
import "./Demo.css";
import { Tree } from '@/Services/Data';

type GraphData = {
    nodes: { id: string; label: string }[];
    links: { source: string; target: string }[];
};

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
        }`);

    const [memoryStack, setMemoryStack] = useState<MemoryStackItem[]>([]);
    
    // Adjust the initial state to match your GraphData type
    const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] });

    const handleRunButtonClick = async () => {
        console.log('button clicked');
        const cOutput = await getOutput(code);
        setOutput(cOutput);

        const newGraphData = createGraphData(cOutput);
        setGraphData(newGraphData);

        setMemoryStack(analyzeCode(code));
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <div className="container" style={{ flex: 1, padding: '20px' }}>
                <Navbar title="Trees In C" />
                <div style={{ display: 'flex' }}>
                    <Tree />
                    <GraphComponent graphData={graphData} />
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
