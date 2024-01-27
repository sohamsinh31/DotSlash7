// OutputWindow.jsx
import React from 'react';
import Card from '../Card';

type OutProps = {
    output: string
}

const OutputWindow = (props:OutProps) => (
    <div className="output">
        <Card>Output:-</Card>
        <div className="printer">{props.output}</div>
    </div>
);

export default OutputWindow;
