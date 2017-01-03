var dash_button = require('node-dash-button'),
    dash = dash_button('xx:xx:xx:xx:xx:xx'), //REPLACE WITH YOUR ADDRESS
    exec = require('child_process').exec;

var IS = require('initial-state');
var bucket = IS.bucket('Doorbell', 'YOUR_ACCESS_KEY');

dash.on('detected', function() {
    console.log('Button pushed!');
    bucket.push('Front Door','Someone is Here!');
});
