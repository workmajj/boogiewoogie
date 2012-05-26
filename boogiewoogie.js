var BoogieWoogie = function(opts) {
    var defaults = {
        canvasId: 'source'
    };
    
    this.opts = extend(defaults, opts);
    
    var canvas = document.getElementById(this.opts.canvasId);
    if (!canvas) throw new Error("Could not get canvas element");
    
    console.log(canvas);
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
