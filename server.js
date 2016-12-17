let express = require('express');
let path = require('path');
let compression = require('compression');

let app = express();

app.use(compression());

// serve our static stuff like build.js
app.use('/static', express.static(path.join(__dirname, 'build')));

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
});

let PORT = process.env.PORT || 8888;
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
});