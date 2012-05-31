var BoogieWoogie = function(opts) {
    this.canvasId = (opts && opts.canvasId) || 'program';
    this.debug = (opts && opts.debug) || false;

    return this; // chainable
};

BoogieWoogie.prototype = {
    canvasId: null,
    debug: null,

    imgType: null,
    imgSrc: null,

    load: function(cfg) {
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
        };
    },

    _canvasToCode: function(d) {
        for (var i = 0, l = d.data.length; i < l; i += 4) {
            var r = d.data[i];
            var g = d.data[i + 1];
            var b = d.data[i + 2];
            var a = d.data[i + 3];

            console.log('i=' + i, r, g, b, a);
        }
    },

    _op: function(opcode) {
        return this.opcodes[opcode].call(this);
    }
};

BoogieWoogie.prototype.opcodes = {
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
