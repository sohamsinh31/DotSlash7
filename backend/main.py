from flask import Flask, request, jsonify
import subprocess
import os

app = Flask(__name__)

@app.route('/compile', methods=['POST'])
def compile_code():
    try:
        # Get the C code from the request
        c_code = request.json['code']

        # Write the C code to a temporary file
        with open('temp.c', 'w') as file:
            file.write(c_code)

        # Compile the C code using gcc
        result = subprocess.run(['gcc', 'temp.c'], capture_output=True, text=True)

        if result.returncode == 0:
            # If compilation is successful, run the compiled executable
            output = subprocess.run('./a.out', capture_output=True, text=True)

            # Delete temporary files
            os.remove('temp.c')
            os.remove('a.out')

            return jsonify({'success': True, 'output': output.stdout})
        else:
            # If compilation fails, return the compilation error

            # Delete temporary file
            os.remove('temp.c')

            return jsonify({'success': False, 'error': result.stderr})

    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    app.run(port=8000, debug=True)
