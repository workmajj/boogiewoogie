var BoogieWoogie = function(opts) {
    this.canvasId = (opts && opts.canvasId) || 'program';
    this.debug = (opts && opts.debug) || false;

    // interpreter state
    this.stack = [];
    this.val = 0;
    this.dp = 'R'; // TODO: make a constant
    this.cc = 'L'; // TODO: make a constant

    return this; // chainable
};

BoogieWoogie.prototype = {
    canvasId: null,
    debug: null,

    stack: null,
    val: null,
    dp: null,
    cc: null,

    imgType: null,
    imgSrc: null,

    run: function(cfg) {
        if (!cfg.type || !cfg.src) throw new Error('No image type or source');

        this.imgType = cfg.type;
        this.imgSrc = cfg.src;

        var canvas = document.getElementById(this.canvasId);
        if (!canvas) throw new Error('Could not get canvas element');
        var ctx = canvas.getContext('2d');

        var that = this;

        var img = new Image();
        img.src = 'data:image/' + this.imgType + ';base64,' + this.imgSrc;
        img.onload = function() {
            canvas.setAttribute('width', img.width);
            canvas.setAttribute('height', img.height);

            ctx.drawImage(img, 0, 0);

            var d = ctx.getImageData(0, 0, canvas.width, canvas.height);
            that._canvasToCode(d);

            that._printCode();
        };
    },

    code: null,

    _canvasToCode: function(d) {
        this.code = new Array(d.width);
        for (var i = 0, l = d.width; i < l; i++) {
            this.code[i] = new Array(d.height);
        }

        for (i = 0, l = d.data.length; i < l; i += 4) {
            var hex = '#';
            for (var j = 0; j < 3; j++) {
                hex += (d.data[i + j] === 0) ? '00' :
                    d.data[i + j].toString(16);
            }

            var x = (i / 4) % d.width;
            var y = Math.floor((i / 4) / d.width);

            this.code[x][y] = hex;
        }
    },

    _printCode: function() {
        var that = this;

        console.log(this.code.map(function(col) {
            return col.map(function(px) {
                return that.hexToNames[px];
            });
        }));
    },

    _op: function(opcode) {
        return this.opcodes[opcode].call(this);
    }
};

BoogieWoogie.prototype.hexToNames = {
    '#ffffff': 'white',
    '#000000': 'black',

    '#ffc0c0': 'light red',
    '#ff0000': 'red',
    '#c00000': 'dark red',

    '#ffffc0': 'light yellow',
    '#ffff00': 'yellow',
    '#c0c000': 'dark yellow',

    '#c0ffc0': 'light green',
    '#00ff00': 'green',
    '#00c000': 'dark green',

    '#c0ffff': 'light cyan',
    '#00ffff': 'cyan',
    '#0000c0': 'dark blue',

    '#ffc0ff': 'light magenta',
    '#ff00ff': 'magenta',
    '#c000c0': 'dark magenta'
};

BoogieWoogie.prototype.opcodes = {
    nop: function() { // no-op
        return true;
    },

    psh: function() { // push
        this.stack.push(this.val);
        return true;
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
        this.stack.push(this.stack.pop() !== 0 ? 0 : 1);
        return true;
    },

    grt: function() { // greater
        if (this.stack.length < 2) return false;
        var tmp = this.stack.pop();
        this.stack.push(this.stack.pop() > tmp ? 1 : 0);
        return true;
    },

    pnt: function() { // pointer
        return; // TODO
    },

    swi: function() { // switch
        return; // TODO
    },

    dup: function() { // duplicate
        if (this.stack.length < 1) return false;
        this.stack.push(this.stack[this.stack.length - 1]);
        return true;
    },

    rol: function() { // roll
        return; // TODO
    },

    nin: function() { // in (number)
        return; // TODO
    },

    cin: function() { // in (char)
        return; // TODO
    },

    nou: function() { // out (number)
        return; // TODO
    },

    cou: function() { // out (char)
        return; // TODO
    }
};
