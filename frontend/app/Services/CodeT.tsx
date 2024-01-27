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
