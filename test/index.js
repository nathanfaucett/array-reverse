var tape = require("tape"),
    arrayReverse = require("..");


tape("arrayReverse(array) should return a reverse of array", function(assert) {
    var a = [0, 1, 2, 3, 4, 5],
        b = arrayReverse(a);

    assert.deepEquals(a, [0, 1, 2, 3, 4, 5]);
    assert.deepEquals(b, [5, 4, 3, 2, 1, 0]);

    assert.end();
});
