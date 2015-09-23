
function drawRect(color1) {
    var ctx = context();
    ctx.fillStyle = color1;
    ctx.fillRect(20, 20, 55, 50);
}

self.onmessage = function(e) {
  console.log('Message received from main script');
  var data = e.data;

setInterval(function(){ drawRect("yellow"); }, 300);

setTimeout(function() {setInterval(function(){ drawRect("cyan"); }, 300);}, 100);

self.postMessage(data);

}
