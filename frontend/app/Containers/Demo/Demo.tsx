import React from 'react';
import Graph from '@/Components/Graph/Graph';
import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar';
import { Tree , GraphData } from '@/Services/Data';
import GraphComponent from '@/Components/Graph/Graph';

export const Demo: React.FC = () => {
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
            </div>
        </div>
    );
};
