var Utils = {
    getRandom: function (min, max) {
        switch (arguments.length) {
            case 1: return parseInt(Math.random() * min + 1);
            case 2: return parseInt(Math.random() * (max - min + 1) + min);
            default: return 0;
        }
    },
};

var drawing = true;

function redraw(ctx) {
    var x = 0,
        y = 0,
        angle = 0;

    for (var i = 0; i < 300; i++) {
        x = Utils.getRandom(800);
        y = Utils.getRandom(600);
        angle = Utils.getRandom(Math.PI * 2.0);
        if (i % 2 == 0) {
            ctx.fillStyle = 'rgba(255, 0, 0, 0.25)';
        } else if (i % 3 == 0) {
            ctx.fillStyle = 'rgba(0, 0, 255, 0.25)';
        } else {
            ctx.fillStyle = 'rgba(0, 255, 0, 0.25)';
        }
        ctx.beginPath();
        ctx.arc(x, y, 60, 0, angle, true);
        ctx.closePath();
        ctx.fill();

        ctx.stroke();

    }

}

self.onmessage = function(e) {
    var data = e.data;
    if (drawing == true)
    {
        drawing = false;
        redraw(context());
        drawing = true;
    }

    self.postMessage("done");
}
