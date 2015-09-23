/*
 * Copyright (C) 2015 University of Szeged
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY UNIVERSITY OF SZEGED AND CONTRIBUTORS
 * ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL UNIVERSITY OF
 * SZEGED OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

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
