var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
 'article-one': {
    title: 'Article-one | siddharth',
    heading:'Article-one',
    date:'oct 6, 2016',
    content:` <p>
        this is content of the first page         this is content of the first page        this is content of the first page
                  this is content of the first page        this is content of the first page        this is content of the first page
    </p>
    <p>
        this is content of the first page         this is content of the first page        this is content of the first page
                this is content of the first page        this is content of the first page        this is content of the first page
    </p>
    <p>
        this is content of the first page         this is content of the first page        this is content of the first page
                this is content of the first page        this is content of the first page        this is content of the first page
    </p>`
   },
   'article-two': {
       title: 'Article-two | siddharth',
    heading:'Article-two',
    date:'oct 7, 2016',
    content:` <p>
        this is content of the second page       
        </p>`
  
  },
  'article-three': {
      title: 'Article-three | siddharth',
    heading:'Article-three',
    date:'oct 8, 2016',
    content:` <p>
        this is content of the third page       
        </p>`
  }
};
function createTemplate (data){
 var title=data.title;
 var date=data.date;
 var heading=data.heading;
 var content=data.content;
 
 
var htmlTemplate=`<html>
<head>
<title>${title}</title>
<meta name="viewport" content="width=device-width, initial-sacle=1">
 <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class="wrapper">
<div>
    <a href="/">home</a> 
</div>    
<hr/>
<h2>${heading}
</h2>
<div>
    ${date}
</div>
<div>
 ${content} 
</div>
</div>
</body>
</html>
`;
return htmlTemplate;
} 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
  app.get('/counter', function(req,res){
 counter=counter+1;
 res.send(counter.toString());
});
app.get('/:articleName', function(req, res){
var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
