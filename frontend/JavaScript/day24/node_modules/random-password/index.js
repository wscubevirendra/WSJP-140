'use strict';

var TABLE = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%&=';

var randomPos = function(start, end) {
    return start + Math.floor(Math.random() * (end - start));
};

var generator = function(len, table) {
    len = parseInt(Number(len));
    table = table || TABLE;
    var passwd = '';
    if (isNaN(len) || len === Infinity || len === -Infinity) {
        len = 8;
    }
    for (var i=0; i<len; ++i) {
        passwd += table[randomPos(0, table.length)];
    }
    return passwd;
};

module.exports = generator;