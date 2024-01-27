const getOutput = (code) => {
    console.log(code)
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8000/compile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: code }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            resolve(data.output || data.error);
        })
        .catch(error => {
            console.error('Error:', error);
            reject("Not working");
        });
    });
};

export default getOutput;
