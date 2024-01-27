import React from 'react';
import { Graph, GraphLink } from 'react-d3-graph';
import './Graph.css'; // Import the CSS file for styling

// Define the props for the GraphComponent
interface GraphComponentProps {
  graphData: {
    nodes: GraphNode[]; // Change the type to GraphNode[]
    links: GraphLink[];
  };
}

interface GraphNode {
  id: string;
  label?: string;
}

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

// GraphComponent now accepts graphData as a prop
const GraphComponent: React.FC<GraphComponentProps> = ({ graphData }) => (
  <div className="graph-container">
    <Graph
      id="graph-id" // id is mandatory
      data={graphData}
      config={myConfig}
      onClickNode={onClickNode}
      onClickLink={onClickLink}
    />
  </div>
);

export default GraphComponent;
