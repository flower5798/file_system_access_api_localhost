var express = require('express');
var app = express();

app.set("view engine", "ejs");

// HTTPリクエストを受け取る部分
app.get('/', function (req, res) {
  const data = {};
  res.render("./templates/index.ejs", data);
});

// サーバーを起動する部分
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

