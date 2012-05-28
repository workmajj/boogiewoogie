$(function() {

////////////////////////////////////////////////////////////////////////////////

// hello world (http://www.dangermouse.net/esoteric/piet/samples.html)
var src = 'iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAIAAAAyxktbAAAABmJLR0QA/wD/AP+gva' +
    'eTAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH1AMUBzUEfbNeqwAAAO9JREFUeJzVlV' +
    '0OhCAMhKcb70WPXk42+4ARQSir4MNOSFRKv1bKDwj4zQCC12bJ0m8bOhIyvVB6Qwb6+ObHXA' +
    'DCdi+H3GHQQdYzambd/JOL52hAkbVUzzlltABcSv+cuSjoi9CJGC3HmA9x7IyjozI7rjDrml' +
    'Uv6NuptgKoRlRZ3+VabGetEBQrJN4EOyEVBmY0Q3FwzVQxgHA2uhkR7Rk6+W0iPf8I6jN00t' +
    'TxpOrNWvcqAPbpplnbqEozp/YemgA6XCfkoRfP6xfR7lz/oBByJWO5OWfRZ6kWnyvR1T29BG' +
    '07ueztlpEWJgP+5+L7AlSybJ19aBENAAAAAElFTkSuQmCC'; // 1 px per codel
// var src = 'iVBORw0KGgoAAAANSUhEUgAAAJYAAACRCAIAAACuZtYNAAAAB3RJTUUH1AMVCxQGro' +
//     'S0ZQAAAAlwSFlzAAAK8AAACvABQqw0mAAAAptJREFUeNrt3VFu6jAQQNGmYl/x0u2Vuf21Kx' +
//     'ncmIyvuOcP9ankcTXqKBBy1C+A0j48v2466tI+c/p95v18Rx+ArjIhngnxTIj3iHrio06sJP' +
//     'WIOkwApxDPhHgmxDMhXtg6M+b+8jqnEM+EeCbEMyHecdubTePTMXvuL1seVM8pxDMhngnxTI' +
//     'hnQjwT4pkQz4R4JsR769kZxMeMRzw7ozuYEM+EeCbEu/TZme6vfZ39uVZwCvFMiGdCPBPiza' +
//     '0z4/3E7SaEU4hnQjwT4pkQ78k6M7WBTG43WsMpxDMhngnxTIg399mZbkPJuXmYUvNwcn/Zcd' +
//     '3xszO6gwnxTIhnQrypb7N7+ssWHlbAa/H0f5TzFofVrY1OIZ4J8UyIZ0K8lesM4lzGSnctOy' +
//     'mVwU+dQjwT4pkQz4R4l9aZT9tfcok5O5OGr7RTiGdCPBPimRBv8sqmP/eC1A1y6h43W5VTiG' +
//     'dCPBPimRBvbp2p6/aXwwufXtbdQbzbKZ1CPBPimRDPhHhLPwo8o7Rv3KTuj/SZol6Rgag3m8' +
//     'acQjwT4pkQz4R4j+PIQU/d7i81Rb8UVE4hngnxTIhnQrxLNzn4NCk175Btct22U4hnQjwT4p' +
//     'kQb5t1ZniVVO2+sO+2g2q/4qU7jDLzq97HKcQzIZ4J8UyIt8s605/nCNpf+qPa4zDGnEI8E+' +
//     'KZEM+EeCbEMyGeCfFMiGdCPBPimRDPhHgmxDMh3i5vNhGd5/+/Frmsu+bbKcQzIZ4J8UyI5z' +
//     'oTo7uN5BVOIZ4J8UyIZ0I815kgddkNr5xCPBPimRDPhHiuMwvl1//pwm+scQrxTIhnQjwT4o' +
//     'WtMzW3939K0a8EllOIZ0I8E+KZEM+EeCbEMyGeCfFMiGdCPBPimRDPhHgmxPsByaRXr4Q+fD' +
//     'IAAAAASUVORK5CYII='; // 25 pixels per codel
var type = 'png';

var broadway = new BoogieWoogie({
    imgSrc: src,
    imgType: type,
    canvasId: 'program'
});

////////////////////////////////////////////////////////////////////////////////

});
