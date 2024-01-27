import re

def convert_c_to_mermaid(c_code):
    mermaid_code = """
    <pre class="mermaid">
      graph TD
    """

    # Example: Match function definitions
    function_pattern = re.compile(r'\b(\w+)\s+(\w+)\s*\([^)]*\)\s*{')
    functions = re.findall(function_pattern, c_code)

    for func_type, func_name in functions:
        mermaid_code += f"\n    A[Start] --> {func_name}{{Initialize {func_type}}}"
        mermaid_code += f"\n    {func_name} --> B[End]"

    mermaid_code += """
    </pre>
    """
    return mermaid_code

# Example C code
c_code = """
int add(int a, int b) {
    return a + b;
}

void main() {
    int result = add(5, 10);
}
"""

mermaid_representation = convert_c_to_mermaid(c_code)
print(mermaid_representation)
