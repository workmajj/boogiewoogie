function extend(orig, delta) {
    var obj = JSON.parse(JSON.stringify(orig)); // copy
    for (var i in delta) {
        if (delta.hasOwnProperty(i)) obj[i] = delta[i];
    }
    return obj;
}

var BoogieWoogie = function(cfg) {
    var defaults = {
        imgSrc: null,
        imgType: null,
        canvasId: 'program'
    };

    this.cfg = extend(defaults, cfg);

    if (!this.cfg.imgSrc || !this.cfg.imgType) {
        throw new Error('No image source or image type set');
    }

    this.stack = []; // TODO: move this to run/init once built

    this._load();
};

BoogieWoogie.prototype = {
    cfg: null,
    stack: null,
    val: null // current color block value
};

BoogieWoogie.prototype._load = function() {
    var canvas = document.getElementById(this.cfg.canvasId);
    if (!canvas) throw new Error('Could not get canvas element');
    var ctx = canvas.getContext('2d');

    var img = new Image();
    img.src = 'data:image/' + this.cfg.imgType + ';base64,' +
        this.cfg.imgSrc; // source is base64-encoded

    var that = this;
    img.onload = function() {
        canvas.setAttribute('width', img.width);
        canvas.setAttribute('height', img.height);

        ctx.drawImage(img, 0, 0);

        var d = ctx.getImageData(0, 0, canvas.width, canvas.height);
        that._canvasToPiet(d);
    };
};

BoogieWoogie.prototype._canvasToPiet = function(d) {
    for (var i = 0, l = d.data.length; i < l; i += 4) {
        var r = d.data[i];
        var g = d.data[i + 1];
        var b = d.data[i + 2];
        var a = d.data[i + 3];

        console.log('i=' + i, r, g, b, a);
    }
};

BoogieWoogie.prototype.ops = {
    pus: function() {},
    pop: function() {},
    add: function() {},
    sub: function() {},
    mul: function() {},
    div: function() {},
    mod: function() {},
    not: function() {},
    grt: function() {},
    poi: function() {},
    swi: function() {},
    dup: function() {},
    rol: function() {},
    inn: function() {},
    inc: function() {},
    ouc: function() {},
    oun: function() {}
};
