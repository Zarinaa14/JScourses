const express = require('express');
// const path = require('path');
const app = express();
const port = 3001;


app.use(express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Content-Type', 'application/json');
  next();
});


app.get('/', function (req, res) {
  res.render('public/index.html')
})

app.get('/users', function (req, res) {
  res.send(JSON.stringify({"test": "1"}));
})

app.get('/farms', function(req, res) {
  res.send(JSON.stringify({
    "name": "Фермерское хозяйство Петра Петровича",
    "organic_percentage": "100%",
    "cameras": {
      "activity_percentage": "98%",
      "installation_date": "21.08.2019"
    }
  }));
})

app.get('/video-highlights', function(req, res) {
  res.send(JSON.stringify({
    "title": "Сбор клубники, лето 2018",
    "duration": "1 мин 30 сек"
  }));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
