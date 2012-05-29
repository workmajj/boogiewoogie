var BoogieWoogie = function(cfg) {
    this.cfg = this.extend({
        imgSrc: null,
        imgType: null,
        canvasId: 'program'
    }, cfg);

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

BoogieWoogie.prototype.extend = function(orig, delta) {
    var obj = JSON.parse(JSON.stringify(orig));
    for (var i in delta) {
        if (delta.hasOwnProperty(i)) obj[i] = delta[i];
    }
    return obj;
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
    pus: function() { // push
        this.stack.push(this.val);
    },
    pop: function() { // pop
        if (this.stack.length < 1) return false;
        this.stack.pop();
        return true;
    },
    add: function() { // add
        if (this.stack.length < 2) return false;
        this.stack.push(this.stack.pop() + this.stack.pop());
        return true;
    },
    sub: function() { // subtract
        if (this.stack.length < 2) return false;
        var tmp = this.stack.pop();
        this.stack.push(this.stack.pop() - tmp);
        return true;
    },
    mul: function() { // multiply
        if (this.stack.length < 2) return false;
        this.stack.push(this.stack.pop() * this.stack.pop());
        return true;
    },
    div: function() { // divide
        if (this.stack.length < 2) return false;
        var tmp = this.stack.pop();
        this.stack.push(Math.round(this.stack.pop() / tmp));
        return true;
    },
    mod: function() { // modulo
        if (this.stack.length < 2) return false;
        var tmp = this.stack.pop();
        this.stack.push(this.stack.pop() % tmp);
        return true;
    },
    not: function() { // not
        if (this.stack.length < 1) return false;
        if (this.stack.pop() !== 0) this.stack.push(0);
        else this.stack.push(1);
        return true;
    },
    grt: function() { // greater
        if (this.stack.length < 2) return false;
        var tmp = this.stack.pop();
        this.stack.push(this.stack.pop() > tmp ? 1 : 0);
        return true;
    },
    poi: function() {},
    swi: function() {},
    dup: function() { // duplicate
        if (this.stack.length < 1) return false;
        this.stack.push(this.stack[this.stack.length - 1]);
        return true;
    },
    rol: function() {},
    inn: function() {},
    inc: function() {},
    oun: function() {},
    ouc: function() {}
};
