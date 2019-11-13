const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/database');
require('./server/config/routes')(app);

app.use('/1955', require('./server/config/routes'));
app.listen(port, () => console.log(`Express server listening on port ${ port }`));
