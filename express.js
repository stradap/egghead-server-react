var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = React.createFactory(require('./Component'));


var app = express();

function home(req, res){
  var msg = req.params.msg || 'Hello';
  var comp = Component({msg:msg});
  //res.send(React.renderToStaticMarkup(comp));
  res.send(ReactDOMServer.renderToStaticMarkup(comp))
}

app.get('', home);
app.get('/:msg', home)

app.listen(4000)
