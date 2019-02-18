const experss = require('express');
const app = experss();
const cors = require('cors');
const bodyParser = require('body-parser');
const Users = require('./modules/users');
const Repo = require('./modules/Repo');
const port = 3000;
const path = require('path');

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(experss.static(path.join(__dirname, 'dist')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get("/api/loginUser", Users.getUser);
app.get("/api/getAllRepo", Repo.getAllRepo);
app.listen(port,function () {
    console.log("server listening on port : "+port);
});
