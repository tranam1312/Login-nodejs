var express = require('express')
var app = express();
var bodyParser = require('body-parser')
const path = require('path');
//Nhập mô-đun mongoose
var mongoose = require('mongoose');

//Thiết lập một kết nối mongoose mặc định
var mongoDB = 'mongodb://127.0.0.1/QUANLYDANGNHAP';
mongoose.connect(mongoDB);
//Ép Mongoose sử dụng thư viện promise toàn cục
mongoose.Promise = global.Promise;
//Lấy kết nối mặc định
var db = mongoose.connection;

//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.Promise = global.Promise;
const { join } = require('path');
const { error } = require('console');


var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var port = 3000;

app.use(bodyParser());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"))
});



app.get('/newaccount', function(req, res) {

    res.sendFile("newaccount.html")
});
app.post('/login', function(req, res) {
    console.log('user: ' + JSON.stringify(req.body.username));
    console.log('pass ' + JSON.stringify(req.body.password));

    res.send(req.body);

});
app.post('/', function(req, res) {

    let item = { username, password } = req.body;


    db.collection('User').findOne(item, function(findErr, result) {
        if (findErr) throw findErr;
        console.log(result);
        


    })
});





app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));