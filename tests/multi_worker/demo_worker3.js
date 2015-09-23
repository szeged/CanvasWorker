function linearGradient(color1, color2) {
    var ctx = context();
    var grd = ctx.createLinearGradient(0,0,200,0);
    grd.addColorStop(0,color1);
    grd.addColorStop(1,color2);
// Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(100,0,155,155);
}

self.onmessage = function(e) {
  console.log('Message received from main script');
  var data = e.data;

setInterval(function(){ linearGradient("red", "white"); }, 300);

setTimeout(function() {setInterval(function(){ linearGradient("white", "red"); }, 300);}, 100);

self.postMessage(data);

}
