
function drawRect(color) {
    var ctx = context();
    ctx.fillStyle = color;
    ctx.fillRect(60, 60, 55, 50);
}

self.onmessage = function(e) {
  console.log('Message received from main script');
  var data = e.data;

setInterval(function(){ drawRect("red"); }, 300);

setTimeout(function() {setInterval(function(){ drawRect("green"); }, 300);}, 100);

self.postMessage(data);

}
