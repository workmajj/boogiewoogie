function extend(orig, delta) {
    var obj = JSON.parse(JSON.stringify(orig)); // copy
    for (var i in delta) {
        if (delta.hasOwnProperty(i)) obj[i] = delta[i];
    }
    return obj;
}

////////////////////////////////////////////////////////////////////////////////

var BoogieWoogie = function(opts) {
    var defaults = {
        canvasId: 'canvas',
        imgFile: 'source.png'
    };

    this.opts = extend(defaults, opts);

    this._load(this.opts.canvasId, this.opts.imgFile);
};

BoogieWoogie.prototype = {
    opts: null,

    _load: function(canvasId, imgFile) {
        var canvas = document.getElementById(canvasId);
        if (!canvas) throw new Error("Could not get canvas element");
        var ctx = canvas.getContext('2d');

        var img = new Image();
        img.src = imgFile;
        img.onload = function() {
            canvas.setAttribute('width', img.width);
            canvas.setAttribute('height', img.height);
            ctx.drawImage(img, 0, 0);
        };
    }
};
