export function analyzeCode(code: string) {
    const lines = code.split('\n');
    const result: { variableName?: any; dataType?: any; bytesize: string | number; time: string | number; functionName?: any; }[] = [];

    lines.forEach((line) => {
        // Analyze variable declarations
        const variableDeclarationMatch = line.match(/(\w+)\s+(\w+)\s*(?:\[\s*(\d+)\s*\])?\s*=\s*(.*?);/);
        if (variableDeclarationMatch) {
            const [, dataType, variableName, arraySize, initialValue] = variableDeclarationMatch;
            let bytesize;

            // Determine bytesize based on data type
            switch (dataType) {
                case 'int':
                    bytesize = 4;
                    break;
                case 'char':
                    bytesize = 8;
                    break;
                // Add more cases for other data types as needed
                default:
                    bytesize = 'N/A';
            }

            // Calculate time complexity for array declarations
            let timeComplexity = 0;
            if (arraySize) {
                // Assuming each array element uses 4 bytes and accessing an element takes 1 unit of time
                bytesize = parseInt(arraySize, 10) * 4;
                timeComplexity = parseInt(arraySize, 10);
            }

            result.push({ variableName, dataType, bytesize, time: timeComplexity });
        }

        // Analyze function calls
        const functionCallMatch = line.match(/(\w+)\s*\([^)]*\);/);
        if (functionCallMatch) {
            const [, functionName] = functionCallMatch;
            // Assuming each function call takes 2 units of time (adjust as needed based on your requirements)
            const timeComplexity = 2;
            result.push({ functionName, bytesize: 'N/A', time: timeComplexity });
        }
    });

    return result;
}