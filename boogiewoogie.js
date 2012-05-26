var BoogieWoogie = function(opts) {
    var defaults = {
        canvasId: 'source'
    };
    
    var canvas = document.getElementById(opts.canvasId || defaults.canvasId);
    if (!canvas) throw new Error("Could not get canvas element with source");
    
    console.log(canvas);
};

BoogieWoogie.prototype = {};
