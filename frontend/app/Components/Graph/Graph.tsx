import React from 'react';
import { Graph } from 'react-d3-graph';
import './Graph.css'; // Import the CSS file for styling

// Graph payload for a 6-node graph with values
const data = {
  nodes: [
    { id: 'Node1', label: 'Value 1' },
    { id: 'Node2', label: 'Value 2' },
    { id: 'Node3', label: 'Value 3' },
    { id: 'Node4', label: 'Value 4' },
    { id: 'Node5', label: 'Value 5' },
  ],
  links: [
    { source: 'Node1', target: 'Node2' },
    { source: 'Node1', target: 'Node3' },
    { source: 'Node2', target: 'Node4' },
    { source: 'Node2', target: 'Node5' },
  ],
};

// The graph configuration
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
    color: 'lightgreen',
    size: 300, // Increased node size
    highlightStrokeColor: 'blue',
    fontColor: 'white', // Text color
  },
  link: {
    highlightColor: 'lightblue',
  },
  d3: {
    gravity: -300, // Pull nodes to the center more strongly
  },
};

const onClickNode = function (nodeId: string) {
  window.alert(`Clicked node ${nodeId}`);
};

const onClickLink = function (source: string, target: string) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

const GraphComponent: React.FC = () => (
  <div className="graph-container"> {/* Add a container div with styling */}
    <Graph
      id="graph-id" // id is mandatory
      data={data}
      config={myConfig}
      onClickNode={onClickNode}
      onClickLink={onClickLink}
    />
  </div>
);

export default GraphComponent;
