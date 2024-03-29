export function analyzeCode(code: string) {
    const lines = code.split('\n');
    const result: { variableName?: any; dataType?: any; bytesize: string | number; time: string | number; functionName?: any; }[] = [];

    let insideFunction = false;

    lines.forEach((line) => {
        // Analyze variable declarations
        const variableDeclarationMatch = line.match(/(\w+)\s+(\w+)\s*(?:\[\s*(\d+)\s*\])?\s*=\s*(.*?);/);
        if (variableDeclarationMatch) {
            const [, dataType, variableName, arraySize, initialValue] = variableDeclarationMatch;
            let bytesize;

            // Determine bytesize based on data type
            switch (dataType) {
                case 'short':
                case 'short int':
                case 'signed short':
                case 'signed short int':
                case 'unsigned short':
                case 'unsigned short int':
                    bytesize = 2;
                    break;
                case 'unsigned':
                case 'unsigned int':
                    bytesize = 4;
                    break;
                case 'int':
                case 'signed':
                case 'signed int':
                    bytesize = 4;
                    break;
                case 'long':
                case 'long int':
                case 'signed long':
                case 'signed long int':
                case 'unsigned long':
                case 'unsigned long int':
                    bytesize = 4;
                    break;
                case 'long long':
                case 'long long int':
                case 'signed long long':
                case 'signed long long int':
                case 'unsigned long long':
                case 'unsigned long long int':
                    bytesize = 8;
                    break;
                case 'signed char':
                    bytesize = 1;
                    break;
                case 'unsigned char':
                    bytesize = 1;
                    break;
                case 'float':
                    bytesize = 4;
                    break;
                case 'double':
                    bytesize = 8;
                    break;
                case 'long double':
                    bytesize = 16;
                    break;
                // Add more cases for other data types as needed
                default:
                    bytesize = -1;
            }

            // Calculate time complexity for array declarations
            let timeComplexity = 1;
            if (arraySize) {
                // Assuming each array element uses 4 bytes and accessing an element takes 1 unit of time
                bytesize = parseInt(arraySize, 10) * bytesize;
                timeComplexity = parseInt(arraySize, 10);
            }

            result.push({ variableName, dataType, bytesize, time: timeComplexity });
        }

        // Analyze function calls
        const functionCallMatch = line.match(/(\w+)\s*\([^)]*\);/);
        if (functionCallMatch) {
            const [, functionName] = functionCallMatch;
            // Assuming each function call takes 2 units of time (adjust as needed based on your requirements)
            const timeComplexity = insideFunction ? 2 : 1;
            result.push({ functionName, bytesize: 'N/A', time: timeComplexity });
        }

        // Identify the start and end of a function block
        if (line.includes('{')) {
            insideFunction = true;
        } else if (line.includes('}')) {
            insideFunction = false;
        }
    });

    return result;
}

interface GraphNode {
    id: string;
    label: string;
}

interface GraphLink {
    source: string;
    target: string;
}

interface GraphData {
    nodes: GraphNode[];
    links: GraphLink[];
}

export function createGraphData(edgesString: string): GraphData {
    const edges = edgesString
        .trim()
        .split('\n')
        .map(edge => {
            const match = edge.match(/\((\d+), (\d+)\)/);
            return match ? match.slice(1).map(Number) : [];
        })
        .filter(edge => edge.length === 2);

    const graphData: GraphData = { nodes: [], links: [] };

    // Extract unique vertices from the edges
    const vertices = Array.from(new Set(edges.flat()));

    // Create nodes
    graphData.nodes = vertices.map((vertex) => ({
        id: `Node${vertex}`,
        label: `Value ${vertex}`
    }));

    // Create links
    edges.forEach(([source, target]) => {
        graphData.links.push({
            source: `Node${source}`,
            target: `Node${target}`
        });
    });

    return graphData;
}

type FunctionInfo = {
    functionName: string;
    callCount: number;
    recursive: boolean;
};

export const analyzeCodeForFunctions = (code: string): FunctionInfo[] => {
    const functionDeclarationRegex = /(\w+)\s+(\w+)\s*\([^)]*\)\s*{/g;
    const functionCallRegex = /(\w+)\s*\([^)]*\);/g;

    const functions = new Map<string, FunctionInfo>();

    let match;

    // Find function declarations
    while ((match = functionDeclarationRegex.exec(code)) !== null) {
        const [, returnType, functionName] = match;
        functions.set(functionName, { functionName, callCount: 0, recursive: false });
    }

    // Find function calls
    while ((match = functionCallRegex.exec(code)) !== null) {
        const [, functionName] = match;
        if (functions.has(functionName)) {
            const functionInfo = functions.get(functionName)!;
            functionInfo.callCount += 1;
            functions.set(functionName, functionInfo);
        }
    }

    // Check for recursion
    for (const [functionName, functionInfo] of Array.from(functions.entries())) {
        const recursionRegex = new RegExp(`\\b${functionName}\\s*\\([^)]*${functionName}[^)]*\\)\\s*;`, 'g');
        if (recursionRegex.test(code)) {
            functionInfo.recursive = true;
            functions.set(functionName, functionInfo);
        }
    }

    return Array.from(functions.values());
};