var BoogieWoogie = function(opts) {
    var defaults = {
        canvasId: 'program'
    };
    
    var canvas = document.getElementById(opts.canvasId || defaults.canvasId);
    if (!canvas) throw "Could not get canvas element.";
    
    console.log(canvas);
};

BoogieWoogie.prototype = {};
