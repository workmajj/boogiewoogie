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
        imgSrc: null,
        imgType: null,
        canvasId: 'program'
    };

    this.opts = extend(defaults, opts);

    if (!this.opts.imgSrc || !this.opts.imgType) {
        throw new Error("No image source or image type set");
    }

    this.init();
};

BoogieWoogie.prototype = {
    opts: null,

    init: function() {
        var canvas = document.getElementById(this.opts.canvasId);
        if (!canvas) throw new Error("Could not get canvas element");
        var ctx = canvas.getContext('2d');

        var img = new Image();
        img.src = 'data:image/' + this.opts.imgType + ';base64,' +
            this.opts.imgSrc; // source is base64-encoded
        img.onload = function() {
            canvas.setAttribute('width', img.width);
            canvas.setAttribute('height', img.height);
            ctx.drawImage(img, 0, 0);

            var d = ctx.getImageData(0, 0, canvas.width, canvas.height);
            console.log(d.data);
        };
    }
};
