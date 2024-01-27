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

export const Demo: React.FC = () => {

    const [output, setOutput] = useState('');
    const [code, setCode] = useState(`#include <stdio.h>

    void printGraph(int** graph, int numVertices) {
        FILE *fp = fopen("graph_data.js", "w");
        
        if (fp == NULL) {
            perror("Error opening file");
            return;
        }
    
        fprintf(fp, "export const GraphData = {\n");
        fprintf(fp, "  nodes: [\n");
    
        for (int i = 0; i < numVertices; i++) {
            fprintf(fp, "    { id: 'Node%d', label: 'Value %d' },\n", i + 1, i + 1);
        }
    
        fprintf(fp, "  ],\n");
        fprintf(fp, "  links: [\n");
    
        for (int i = 0; i < numVertices; i++) {
            for (int j = i + 1; j < numVertices; j++) {
                if (graph[i][j] == 1) {
                    fprintf(fp, "    { source: 'Node%d', target: 'Node%d' },\n", i + 1, j + 1);
                }
            }
        }
    
        fprintf(fp, "  ]\n");
        fprintf(fp, "};\n");
    
        fclose(fp);
    }
    
    int main() {
        int numVertices = 5;
    
        // Dynamically allocate memory for the 2D array
        int** graph = (int**)malloc(numVertices * sizeof(int*));
        for (int i = 0; i < numVertices; i++) {
            graph[i] = (int*)malloc(numVertices * sizeof(int));
            for (int j = 0; j < numVertices; j++) {
                graph[i][j] = 0; // Initialize to 0 (no edge)
            }
        }
    
        // Add edges to the graph
        graph[0][1] = 1;
        graph[0][4] = 1;
        graph[1][3] = 1;
        graph[3][4] = 1;
    
        // Print the graph in the desired JavaScript format
        printGraph(graph, numVertices);
    
        // Free allocated memory
        for (int i = 0; i < numVertices; i++) {
            free(graph[i]);
        }
        free(graph);
    
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
