#! /usr/bin/env node

//required packages
var fs = require('fs');
var mkdirp = require('mkdirp');

var path = process.cwd()+'/quickbs';

//in case there is an issue with ECMAScript6 and Node doesn't recognize the endsWith function
if (typeof String.prototype.endsWith !== 'function'){
  String.prototype.endsWith = function(suffix){
    return this.indexOf(suffix, this.length-suffix.length) !== -1;
  };
}

//the HTML template
function generateTemplate(){
  return '<!DOCTYPE html>\n'+
'<html lang="en">\n'+
'  <head>\n'+
'    <meta charset="utf-8">\n'+
'    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n'+
'    <meta name="viewport" content="width=device-width, initial-scale=1">\n'+
'    <title></title>\n'+
'    <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">\n'+
'    <link type="text/css" rel="stylesheet" href="css/styles.css">\n'+
'    <!--[if lt IE 9]>\n'+
'      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>\n'+
'      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>\n'+
'    <![endif]-->\n'+
'  </head>\n'+
'  <body>\n'+
'    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>\n'+
'    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>\n'+
'    <script src="js/scripts.js"></script>\n'+
'  </body>\n'+
'</html>'
}

function createTemplate(){
  mkdirp(path, function(err){
    if (err) console.error("Error creating path" + path)

    var htmlStream = fs.createWriteStream(path+'/index.html');
    htmlStream.once('open', function(){
      htmlStream.end(generateTemplate());
    });
    /////////////////
    mkdirp(path+'/css/', function (err){
      if (err) console.error("Error creating path "+path+'/css/');

      var cssStream = fs.createWriteStream(path+'/css/styles.css');
      cssStream.once('open', function(){
        cssStream.end("");
      });
      ///////////////
      mkdirp(path+'/js/', function (err){
        if (err) console.error("Error creating path "+path+'/js/');

        var jsStream = fs.createWriteStream(path+'/js/scripts.js');
        jsStream.once('open', function(){
          jsStream.end("");
        });

      });//inner mkdirp
    });//middle mkdirp
  });//outer mkdirp
}; //create template


if (process.argv.slice(2)[0]){
  //the command line argument is the path to create the directory in
  path = process.argv.slice(2)[0];
  //if the path ends with a slash, remove it
  path = (path.endsWith('/') ? path.substring(0, path.length-1) : path);
}

console.log('Creating template in directory ' + path);
createTemplate();