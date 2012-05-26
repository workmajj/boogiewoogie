var BoogieWoogie = function(opts) {
    var defaults = {
        file: 'source.png',
        canvasId: 'canvas'
    };

    this.opts = extend(defaults, opts);

    var canvas = document.getElementById(this.opts.canvasId);
    if (!canvas) throw new Error("Could not get canvas element");
    var ctx = canvas.getContext('2d');

    var img = new Image();
    img.src = this.opts.file;
    img.onload = function() {
        canvas.setAttribute('width', img.width);
        canvas.setAttribute('height', img.height);
        ctx.drawImage(img, 0, 0);
    };
};

BoogieWoogie.prototype = {
    opts: null
};

////////////////////////////////////////////////////////////////////////////////

function extend(orig, delta) {
    var obj = JSON.parse(JSON.stringify(orig)); // copy
    for (var i in delta) {
        if (delta.hasOwnProperty(i)) obj[i] = delta[i];
    }
    return obj;
}
