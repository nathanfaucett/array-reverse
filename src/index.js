module.exports = arrayReverse;


function arrayReverse(array) {
    var i = array.length,
        out = new Array(i),
        j = 0;

    while (i--) {
        out[j++] = array[i];
    }

    return out;
}
