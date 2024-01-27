import mermaid from "mermaid";
import { useEffect } from "react";
import "./Flowchart.css";

const FlowChart = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
    }, []);

    const mermaidCode = `
        graph TD
        A[Client] --> B[Load Balancer]
        B --> C[Server1]
        B --> D[Server2]
    `;

    return (
        <div className="mermaid" data-mermaid={mermaidCode}></div>
    );
};

export default FlowChart;
