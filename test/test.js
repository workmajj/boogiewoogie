$(function() {

////////////////////////////////////////////////////////////////////////////////

var broadway = new BoogieWoogie();

module('foo');

test('bar', function() {
    expect(1);

    equal(true, true, 'baz');
});

test('baz', function() {
    expect(3);

    equal(true, true, 'qux');
    equal(true, true, 'quux');
    equal(true, true, 'lol');
});

////////////////////////////////////////////////////////////////////////////////

});
