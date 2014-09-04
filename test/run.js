var fs = require('fs')
var path = require('path')
var assert = require('assert')
var _ = require('underscore')
var parseCss = require('..')

var cssObj = require('./style.js')
var expected = readFile('./expected.css')

runTest()

function runTest(){
  parseCss(cssObj, function(err, css){
    assert(!err)
    assert(css === expected)
    console.log('test passed')
  })
}

function readFile(file){
  file = path.resolve(__dirname, file)
  return fs.readFileSync(file).toString()
}