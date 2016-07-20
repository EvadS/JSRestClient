
/* createMd5.js
*  required:
* /// <reference path="2.5.3-crypto-md5.js" />
*
*/

function getMd5(str) {
    var result = Crypto.MD5(str);
    return result;
}

function getUpperMd5(str) {
    var result = Crypto.MD5(str);
    return result.toUpperCase();
}
