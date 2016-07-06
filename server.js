var app = require('./config.js');

var port = process.env.PORT || 3000;

app.listen(port);

console.log('MakerLounge Server now listening on port ' + port);
