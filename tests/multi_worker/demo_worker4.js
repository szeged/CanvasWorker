
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawRandRect() {
    var ctx = context();
    ctx.fillStyle = getRandomColor();
    var x = Math.floor((Math.random() * 450) + 1);
    var y = Math.floor((Math.random() * 450) + 1);
    ctx.fillRect(x, y, 50, 50);
}

self.onmessage = function(e) {
  console.log('Message received from main script');
  var data = e.data;

setInterval(function(){ drawRandRect(); }, 300);

self.postMessage(data);

}
