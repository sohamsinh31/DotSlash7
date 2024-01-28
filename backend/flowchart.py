import re

def convert_c_to_mermaid(c_code):
    mermaid_code = """
    <pre class="mermaid">
      graph TD
    """

    # Example: Match if-else statements
    if_else_pattern = re.compile(
        r'\bif\s*\(([^)]+)\)\s*{([^}]+)}\s*else\s*{([^}]+)}')
    if_else_matches = re.findall(if_else_pattern, c_code)

    for condition, if_body, else_body in if_else_matches:
        mermaid_code += f"\n    A[Start] -->|{condition}| B{{If}}"
        mermaid_code += f"\n    B -->|true| C{{True}}"
        mermaid_code += f"\n    B -->|false| D{{False}}"

    # Example: Match simple statements
    statement_pattern = re.compile(r'\b(\w+)\s*=\s*([^;]+);')
    statements = re.findall(statement_pattern, c_code)

    for variable, value in statements:
        mermaid_code += f"\n    E[Start] -->|{variable} = {value}| F{{Assignment}}"
        mermaid_code += f"\n    F --> G[End]"

    mermaid_code += """
    </pre>
    """
    return mermaid_code
