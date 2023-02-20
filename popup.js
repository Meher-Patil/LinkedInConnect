let connectButton = document.getElementById("connectButton");
var connectInterval,numberOfConnect=0;

connectButton.addEventListener('click', function() {
    if (connectButton.classList.contains('start')) {
        connectButton.classList.remove('start');
        connectButton.textContent = "Start Connecting";
        clearInterval(connectInterval);
    } else {
        connectButton.classList.add('start');
        connectButton.textContent = "Stop Connecting";
        startConnecting();
    }
});
function startConnecting(){
    function connectWithPeople(){
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
                 chrome.scripting.executeScript({
                 target: {tabId: tabs[0].id, allFrames: true},
                 files: ['connectToPeople.js'],
                 });
                 document.getElementById('numberOfConnect').textContent = ++numberOfConnect;
         });
    }
    var minRange = 5,maxRange = 10;
    var randomRange = Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
    connectInterval = setInterval(connectWithPeople,randomRange * 1000);
}