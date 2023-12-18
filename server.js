const { response } = require('express');
const express = require ('express'); 
const app = express(); 
const PORT = 8000; 

const rappers = {
    
    '21 savage': {
        'birthName': 'Shéyaa Bin Abraham-Joseph', 
        'birthLocation': 'London, England',
        'age': 31
    }, 
    'j cole': {
        'birthName': 'Jermaine Lamarr Cole', 
        'birthLocation': 'Frankfurt, Germany',
        'age': 38
    }, 
    'drake': {
        'birthName': 'Aubrey Drake Graham', 
        'birthLocation': 'Toronto, Canada',
        'age': 37
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
})

app.get('/api/:name', (request, response) => {
    const rapperName =  request.params.name.toLocaleLowerCase(); 
    console.log(rapperName); 
    if ( rappers[rapperName]) {
        response.json(rappers[rapperName]);
    }
})

app.listen (PORT, (request, response) => {
    console.log(`The server is now running on ${PORT}, better go catch it`)
})