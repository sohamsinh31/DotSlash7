const getOutput = (code) => {
    // console.log (code)
    fetch('http://localhost:8000/compile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: code }), // Ensure 'code' is the correct key
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data.output
    })
    .catch(error => {
        console.error('Error:', error);
    });
    return "Not working"
};

export default getOutput
