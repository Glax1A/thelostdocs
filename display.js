// The max number possible
let MAX_NUMBER = 9999
let MIN_NUMBER = 1000

// Interval in ms
let INTERVAL_TIME = 1500 // 1.5 second

// Every INTERVAL_TIME
setInterval(function () {

    // Returns a random integer from 1000 to 9999:
    document.write(Math.floor(Math.random() * MAX_NUMBER + 1))

}, INTERVAL_TIME)

//reload server
setTimeout(function(){
   window.location.reload(1);
}, 2000);
