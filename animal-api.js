const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static(__dirname + '/public'));

app.get('/random', function(req, res, next) {
    const files = fs.readdirSync(__dirname + '/public')
    res.send({message: 'http://localhost:3000/public/' + files[0], status: 'okay'})

})
app.listen(3000, function() {
    console.log('Ready to listen')
})