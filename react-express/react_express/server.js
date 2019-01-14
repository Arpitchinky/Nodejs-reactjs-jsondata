var express = require('express');

var app =  express();


app.get('/api/customers',(req,res) => {
    var customers =[
        {id:1, firstName:'Arpit', lastName:'Chaurasia'},
        { id: 2, firstName: 'Deepak', lastName: 'Chaurasia' },
        { id: 3, firstName: 'Sankar', lastName: 'Chaurasia' }

    ];
    res.json(customers);
});

app.listen(5000);
console.log('server is running.....');