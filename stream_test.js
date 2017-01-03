var IS = require('initial-state');
var bucket = IS.bucket('NodeJS SDK Example', 'YOUR_ACCESS_KEY_GOES_HERE');

// Push event to initial state
bucket.push('Demo State', 'active');

setTimeout(function () {

    // Push another event
    bucket.push('Demo State', 'inactive');

}, 1000);
